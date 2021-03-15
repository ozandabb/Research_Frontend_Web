import Axios from "axios";
import Config from "../Config.controllers";

class staffAdminController{
    constructor(){
        this.api = {
            addStaff: "/api/user/register/staff",
     
        };
    }

    //add a new staff
    addStaff = async (data, token) => {
        return await Axios.post( `${Config.host}${Config.port}${this.api.addStaff}`, data,
        { headers: { 'Authorization': `bearer ${token}`, 'Content-Type': 'application/json', }} )
            .then(Response => {
                return { ...Response.data , status : 200 }
            })
            .catch(err => {
                return { ...err , status : 400 }
            });
    }


}

var UserObject = new staffAdminController();
export default UserObject;