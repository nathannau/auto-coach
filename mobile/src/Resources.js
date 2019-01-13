import {Platform} from 'react-native';
import fs from 'react-native-fs';
import sh from 'shorthash';
import Api  from './Api'
import dataConfig from '../config.default'

export default class Resources {
    static _state = null;

    constructor() {
        this.id = "";
    }

    isLoaded() {
        return Resources._state==null;
    }

    load() {
        return new Promise((resole)=>{
            var state = {};
            
            var nbResources = 1;
            var assignState = (name, value) => {
                state[name] = value;
                nbResources--;
                if (nbResources==0)
                {
                    Resources._state = state;
                    resole();
                }
            }
        
            this._loadAnnotations().then((annotations)=>{assignState("annotations", annotations)});
        });
    }

    _loadAnnotations()
    {
        return new Promise((resolve)=>{
            Api.GetAnnotations((items)=>{
                var annotations = {};
                const base = (Platform.OS === 'android') ? 'file://' : ''; 
                console.log("CachesDirectoryPath : " ,fs.CachesDirectoryPath);

                var nbItems = items.length;
                var assignFile = (name, path) =>
                {
                    annotations[name] = path;
                    nbItems--;
                    if (nbItems==0) resolve(annotations);
                }
                for (var item of items) {
                    var file = sh.unique(item.path);
                    var path =`${base}${fs.CachesDirectoryPath}/${file}`;//.png
                    fs.exists(path).then(exists => {
                        if(exists) 
                            assignFile(item.name, path);
                        else 
                            fs.downloadFile({
                                fromUrl:`${dataConfig.assetsHost}/${item.path}`, 
                                toFile: path,
                            }).promise.then((r)=>{ 
                                assignFile(item.name, path);
                            }) ;
                    });
                }

            });
        });
    }

    _get(name) {
        return Resources._state && Resources._state[name]; 
    }
    // _set(name, value) { 
    //     if (Resources._state==null) return null;
    //     Resources._state[name] = value;
    //     return value;
    // }

    getAnnotations() { return this._get('annotations'); }
    getAnnotation(id) { return this._get('annotations')[id]; }

}