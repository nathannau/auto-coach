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
        return new Promise((resolve)=>{
            var state = {};
            
            var nbResources = 1;
            var assignState = (name, value) => {
                state[name] = value;
                nbResources--;
                if (nbResources==0)
                {
                    Resources._state = state;
                    resolve();
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
                // console.log("CachesDirectoryPath : " ,fs.CachesDirectoryPath);

                var nbItems = items.length;
                var assignFile = (name, path) =>
                {
                    annotations[name] = path;
                    nbItems--;
                    if (nbItems==0) resolve(annotations);
                }
                for (var item of items) {
                    let file = sh.unique(item.path);
                    let path = `${base}${fs.CachesDirectoryPath}/${file}`;//.png
                    let url = `${dataConfig.assetsHost}/${item.path}`;
                    let name = item.name;
                    fs.exists(path).then(exists => {
                        if(exists) 
                            assignFile(name, path);
                        else 
                            fs.downloadFile({
                                fromUrl:url, 
                                toFile: path,
                            }).promise.then((r)=>{ 
                                assignFile(name, path);
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