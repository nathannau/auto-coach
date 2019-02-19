import { AsyncStorage } from 'react-native';
import { Cache } from "react-native-cache";

export default class Config {
    static _state = null;
    static _cache = new Cache({
        namespace: "config",
        backend: AsyncStorage
    });
    static _watchers = [];

    constructor() {
        this.id = "";
    }

    isLoaded() {
        return Config._state==null;
    }

    load() {
        return new Promise((resolve)=>{
            Config._cache.getItem("state", (err, value) => { 
                Config._state = value || {}; 
                resolve();
            });
        })
    }

    save() {
        return new Promise((resolve)=>{
            Config._cache.setItem(
                "state", 
                Config._state, 
                resolve
            );
        });
    }

    _get(name) {
        return Config._state && Config._state[name]; 
    }
    _set(name, value, autoFlush) { 
        if (Config._state==null) return null;
        Config._state[name] = value;
        if (autoFlush) this.save();
        Config._watchers.forEach(watcher => {
            if (watcher.name==name) watcher.fn(value);
        });
        return value;
    }
    _watch(name, fn) { Config._watchers.push({ name:name, fn:fn }); }
    _unwatch(name, fn) {
        Config._watchers = Config._watchers.filter(watcher => {
            return !(watcher.name == name && ( fn==null || watcher.fn==fn ));
        })
    } 

    getLogin() { return this._get('login'); }
    setLogin(value, autoFlush=true) { return this._set('login', value, autoFlush); }
    watchLogin(fn) { this._watch('login', fn); }
    unwatchLogin(fn) { this._unwatch('login', fn); }

    getToken() { return this._get('token'); }
    setToken(value, autoFlush=true) { return this._set('token', value, autoFlush); }
    watchToken(fn) { this._watch('token', fn); }
    unwatchToken(fn) { this._unwatch('token', fn); }

    getUsers() { return this._get('users') || []; }
    getUser(id) { return this._get('users')[id]; }
    setUser(user, autoFlush=true) { 
        var users = this.getUsers() || {};
        users[user.id] = user;
        return this._set('users', users, autoFlush); 
    }
    removeUser(user, autoFlush=true) { 
        var users = this.getUsers() || {};
        delete users[user.id];
        return this._set('users', users, autoFlush); 
    }
    watchUser(fn) { this._watch('users', fn); }
    unwatchUser(fn) { this._unwatch('users', fn); }

    getAnnotations() { return this._get('annotations') || []; }
    getAnnotation(id) { return this._get('annotations')[id]; }
    setAnnotation(annotation, autoFlush=true) {
        var annotations = this.getAnnotations() || {};
        annotations[annotation.id] = annotation;
        return this._set('annotations', annotations, autoFlush); 
    }
    removeAnnotation(annotation, autoFlush=true) { 
        var annotations = this.getAnnotations() || {};
        delete annotations[annotation.id];
        return this._set('annotations', annotations, autoFlush); 
    }
    watchAnnotation(fn) { this._watch('annotations', fn); }
    unwatchAnnotation(fn) { this._unwatch('annotations', fn); }

}