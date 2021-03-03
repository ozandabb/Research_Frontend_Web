import Axios from "axios";
import Config from "../Config.controllers";

class studentController{
    constructor(){
        this.api = {
            addStudent: "/api/user/register/student",
            // getAllCustomer: "/api/customer/all",
            // getOneCustByTCODE: "/api/customer/tcode",
            // getOneUserByUSERNAME: "/api/users/username",
            // UpdateCustomer: "/api/customer/cutomer",
            // CutPromotions : "/api/customer/add/promotions",
            // GetAllPromotions : "/api/customer/promos"
        };
    }

    //add a new Studnet
    addStudent = async (data, token) => {
        return await Axios.post( `${Config.host}${Config.port}${this.api.addStudent}`, data,
        { headers: { 'Authorization': `bearer ${token}`, 'Content-Type': 'application/json', }} )
            .then(Response => {
                return { ...Response.data , status : 200 }
            })
            .catch(err => {
                return { ...err , status : 400 }
            });
    }


}

var UserObject = new studentController();
export default UserObject;