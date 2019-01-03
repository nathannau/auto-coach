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

    load(then=null) {
        Config._cache.getItem("state", (err, value) => { 
            Config._state = value || {}; 
            then && then();
        });
    }

    save(then=null) {
        Config._cache.setItem(
            "state", 
            Config._state, 
            ()=>{ then && then(); }
        );
    }

    _get(name) {
        return Config._state && Config._state[name]; 
    }
    _set(name, value, autoFlush) { 
        if (Config._state==null) return;
        Config._state[name] = value;
        if (autoFlush) save();
        Config._watchers.forEach(watcher => {
            if (watcher.name==name) watcher.fn(value);
        });
    }
    _watch(name, fn) { Config._watchers.push({ name:name, fn:fn }); }
    _unwatch(name, fn) {
        Config._watchers = Config._watchers.filter(watcher => {
            return !(watcher.name == name && ( fn==null || watcher.fn==fn ));
        })
    } 

    getLogin() { return this._get('login'); }
    setLogin(value, autoFlush=true) { this._set('login', value, autoFlush); }
    watchLogin(fn) { this._watch('login', fn); }
    unwatchLogin(fn) { this._unwatch('login', fn); }

    getToken() { return this._get('token'); }
    setToken(value, autoFlush=true) { this._set('token', value, autoFlush); }
    watchToken(fn) { this._watch('token', fn); }
    unwatchToken(fn) { this._unwatch('token', fn); }

    getUsers() { return this._get('users'); }
    getUser(id) { return this._get('users')[id]; }
    setUser(user, autoFlush=true) { 
        var users = this.getUsers() || {};
        users[user.id] = user;
        this._set('users', users, autoFlush); 
    }
    watchUser(fn) { this._watch('users', fn); }
    unwatchUser(fn) { this._unwatch('users', fn); }

}