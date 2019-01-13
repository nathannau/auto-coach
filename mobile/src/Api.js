
import dataConfig from '../config.default'

export default class Api {
    static Login(user, password, cbSucces, cbError) {
        if (user!="err")
            cbSucces({
                token: "le_token",
                config: {},
            });
        else
            setTimeout(cbError, 2000);
    }

    static GetAnnotations(cbSucces, cbError) {
        fetch(dataConfig.apiHost + '/annotations', { method: "GET"}).then(
            (res)=>{res.json().then(cbSucces)},
            (err)=>{ console.log(err); cbError && cbError(err)}
        );
    }
    
}