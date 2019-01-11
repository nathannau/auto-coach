
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
        fetch(dataConfig.webhost + '/')
        if (user!="err")
            cbSucces({
                token: "le_token",
                config: {},
            });
        else
            setTimeout(cbError, 2000);
    }
    
}