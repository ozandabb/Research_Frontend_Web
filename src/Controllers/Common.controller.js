import Config from './Config.controllers'
import Axios from 'axios';
// import setAuthToken from '../Redux/utils/setAuthToken';
// import { setCurrentUser } from '../Redux/Action/authAction';
// import jwt_decode from 'jwt-decode';

class Common {
    constructor() {
        this.api = {
            signin: "/api/user/login",
        };
    }

    async common_sign(username, password) {
        var requestData = {
            email: username,
            password: password
        }
        console.log("menns logins",requestData);
        var userData = {};
        var resp = 600;
        await Axios.post(
            `${Config.host}${Config.port}${this.api.signin}`,
            requestData
        )
            .then(Response => {
                resp = Response.status;
                userData = Response;
            })
            .catch(err => {
                console.error(err);
                try {
                    console.error(err);
                    resp = err.response.status;
                } catch (error) {
                    console.log(error);

                    resp = 600;
                }
            });

        if (resp === 200) {
            return userData;
        }
        return resp;

    }

}

var obj = new Common();
export default obj;
