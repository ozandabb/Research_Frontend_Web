import React from "react";
import ADMINSidebar from "../sidebar.admin";
import {  Button, Card, Image ,Row , Col } from 'react-bootstrap';
import {FormInput ,FormSelect } from '../../../Components/Form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import AdminController from '../../../Controllers/AdminControllers/Staff.AdminController';
import CONFIG from '../../../Controllers/Config.controllers';

class StaffReg extends React.Component {

    constructor() {
        super();
        this.state = {
            errors : {},
            firstName : '',
            lastName : '',
            initials : '',
            dob : '',
            phoneNo : '',
            gender : '',
            address : '',
            email : '',
            password : '',
            roleId : '',
            staffId : '',
            specialization : '',
            speciltionStore:'',

        };
    }

    formValueChange = (e) => {
        this.setState({[e.target.name] : e.target.value  });
    }

    onFormSubmit = async (e) => {
        e.preventDefault();

        if (this.validate()) {
            if(this.state.specialization == "IT"){
                this.state.speciltionStore= 1
            }
            else if(this.state.specialization == "SE"){
                this.state.speciltionStore= 2
            }

            var data = {
                firstName :  this.state.firstName,
                lastName :  this.state.lastName,
                initials :  this.state.initials,
                dob :  this.state.dob,
                phoneNo :  this.state.phoneNo,
                gender :  this.state.gender,
                address :  this.state.address,
                email :  this.state.email,
                password :  this.state.password,
                roleId :  3,
                staffId :  this.state.staffId,
                specialization :  this.state.speciltionStore,
            }


            const result = await AdminController.addStaff(data, this.props.auth.token);

            if(result.status == 200){
                CONFIG.setToast("Successfully Added");
                this.clear();
            }else{
                CONFIG.setErrorToast("Somthing Went Wrong!");
                this.clear();
            }
        }
    }

    clear = ()=>{
        this.setState({
            firstName : '',
            lastName : '',
            initials : '',
            dob : '',
            phoneNo : '',
            gender : '',
            address : '',
            email : '',
            password : '',
            roleId : '',
            staffId : '',
            specialization : '',
        })
    }

    render() {

        const {errors } = this.state;

        return (
            <div className="bg-light wd-wrapper">
                <ADMINSidebar activemenu={'STAFF'} submenu={'REGISTRATION'} />
                    <div className="wrapper-wx" style={{height:"100hv"}}>
                        <div className="container-fluid" style={{height:"100hv"}}>

                            {/* ========================Title and the button section start here =====================*/}
                            <div className="row" style={{marginTop:"5px", fontFamily:"sans-serif", marginBottom:"15px"}}>
                                <div className="col-sm-9">
                                    <h6 style={{paddingTop:"10px", paddingLeft:"5px"}}>Staff Registration <br></br>
                                    <span className="text-muted small">Dashboard / Staff / Registration</span></h6>
                                </div>
                                <div className="col-sm-3"> 
                                </div>
                            </div>
                            {/* =======================Title and the button section ends here======================== */}
                            
                            {/* ==========================Registration form start here==================================*/}
                            <div className="row" style={{  marginBottom:"15px", height:"100hv" }}>
                                <div className="col-12">
                                    <Card className="col-12 shadow" style={{paddingBottom:"15px"}}>
                                        <Card.Body>

                                            <div className="col-12 bg-white mt-1 pb-1" >
                                                <form onSubmit={(e) => this.onFormSubmit(e)}>

                                                    {/* ============================Basic details section start here ===========================*/}
                                                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Enter Staff Basic Details<br></br>
                                                    <span className="text-muted small">You can add a new Staff member by filling relavant Information</span></h6>
                                                    <div className="row" >
                                                        <div className="col-sm-8">
                                                            
                                                            <div className="row">
                                                                    <div className="col-sm-6 mt-1 mb-1" >
                                                                        <FormInput 
                                                                            label={'Initials *'}
                                                                            placeholder={"Enter initials"}
                                                                            value={this.state.initials}
                                                                            name="initials"
                                                                            onChange={this.formValueChange}
                                                                        />
                                                                        {errors.initials && errors.initials.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.initials}</h4>}
                                                                    </div>
                                                                    <div className="col-sm-6 mt-1 mb-1" >
                                                                        <FormInput 
                                                                            label={'Firstname *'}
                                                                            placeholder={"Enter firstname"}
                                                                            value={this.state.firstName}
                                                                            name="firstName"
                                                                            onChange={this.formValueChange}
                                                                        />
                                                                        {errors.firstName && errors.firstName.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.firstName}</h4>}
                                                                    </div>
                                                            </div>

                                                            <div className="row">
                                                                    <div className="col-sm-6 mt-1 mb-1" >
                                                                        {/* <FormInput 
                                                                            label={'Gender *'}
                                                                            placeholder={"Enter gender"}
                                                                            value={this.state.gender}
                                                                            name="gender"
                                                                            onChange={this.formValueChange}
                                                                        /> */}
                                                                        <FormSelect 
                                                                            label={'Gender'}
                                                                            options={GENDER}
                                                                            selected={this.state.gender}
                                                                            onChange={this.formValueChange}
                                                                            name="gender"
                                                                        />
                                                                        {errors.gender && errors.gender.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.gender}</h4>}
                                                                    </div>
                                                                    <div className="col-sm-6 mt-1 mb-1" >
                                                                        <FormInput 
                                                                            label={"Contact Number *"}
                                                                            type="Number"
                                                                            placeholder={"Enter Contact No"}
                                                                            value={this.state.phoneNo}
                                                                            name="phoneNo"
                                                                            onChange={this.formValueChange}
                                                                        />
                                                                        {errors.phoneNo && errors.phoneNo.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.phoneNo}</h4>}
                                                                    </div>
                                                            </div>

                                                            <div className="row">
                                                                    <div className="col-12 mt-1 mb-1" >
                                                                        <FormInput 
                                                                            label={'Address *'}
                                                                            placeholder={"Enter Supplier's Address"}
                                                                            value={this.state.address}
                                                                            name="address"
                                                                            onChange={this.formValueChange}
                                                                        />
                                                                        {errors.address && errors.address.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.address}</h4>}
                                                                    </div>
                                                            </div>
        
                                                        </div>

                                                        <div className="col-sm-4">

                                                            <div className="row">
                                                                <div className="col-12 mt-1 mb-1" >
                                                                    <FormInput 
                                                                        label={"Lastname *"}
                                                                        placeholder={"Enter lastname"}
                                                                        value={this.state.lastName}
                                                                        name="lastName"
                                                                        onChange={this.formValueChange}
                                                                    />
                                                                    {errors.lastName && errors.lastName.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.lastName}</h4>}
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mt-1 mb-1" >
                                                                    <FormInput 
                                                                        label={"Date of Birth *"}
                                                                        placeholder={"Enter birthday"}
                                                                        type="date"
                                                                        value={this.state.dob}
                                                                        name="dob"
                                                                        onChange={this.formValueChange}
                                                                    />
                                                                    {errors.dob && errors.dob.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.dob}</h4>}
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    {/*============================= Basic details section ends here ===========================*/}

                                                    <h6 className="text-header mt-3 py-3 mb-0 font-weight-bold line-hight-1">Create Staff Login Details<br></br>
                                                    <span className="text-muted small">You can create a staff login by filling relavant Information</span></h6>
                                                    <div className="row" >
                                                        <div className="col-sm-8">
                                                            
                                                            <div className="row">
                                                                <div className="col-sm-6 mt-1 mb-1" >
                                                                    <FormInput 
                                                                        label={'Staff ID *'}
                                                                        placeholder={"Enter staff ID"}
                                                                        value={this.state.staffId}
                                                                        name="staffId"
                                                                        onChange={this.formValueChange}
                                                                    />
                                                                    {errors.staffId && errors.staffId.length > 0 &&
                                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.staffId}</h4>}
                                                                </div>
                                                                <div className="col-sm-6 mt-1 mb-1" >
                                                                    <FormInput 
                                                                        label={'Email *'}
                                                                        type="email"
                                                                        placeholder={"example@mail.com"}
                                                                        value={this.state.email}
                                                                        name="email"
                                                                        onChange={this.formValueChange}
                                                                    />
                                                                    {errors.email && errors.email.length > 0 &&
                                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>}
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-6 mt-1 mb-1" >
                                                                    {/* <FormInput 
                                                                        label={'Specialization *'}
                                                                        placeholder={"Enter initials"}
                                                                        value={this.state.specialization}
                                                                        name="specialization"
                                                                        onChange={this.formValueChange}
                                                                    /> */}
                                                                    <FormSelect 
                                                                        label={'Specialization *'}
                                                                        options={SPECIALIZATION}
                                                                        selected={this.state.specialization}
                                                                        onChange={this.formValueChange}
                                                                        name="specialization"
                                                                    />
                                                                    {errors.specialization && errors.specialization.length > 0 &&
                                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.specialization}</h4>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">

                                                            <div className="row">
                                                                <div className="col-12 mt-1 mb-1" >
                                                                    <FormInput 
                                                                        label={"Password *"}
                                                                        type="password"
                                                                        placeholder={"Enter password"}
                                                                        value={this.state.password}
                                                                        name="password"
                                                                        onChange={this.formValueChange}
                                                                    />
                                                                    {errors.password && errors.password.length > 0 &&
                                                                        <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.password}</h4>}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    {/* ==========================Add and clear button section start here ========================*/}
                                                    <div className="row"> 
                                                        <div className="col-6 mt-3 mb-1" >
                                                            <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Submit</button>
                                                            <button type="button" style={{backgroundColor:"red",marginLeft:"10px", color:"#FFFFFF", cursor: 'pointer'}} onClick={() => this.clear()} className="btn mt-2 btn btn-sm px-5">Clear</button>
                                                        </div>
                                                    </div>
                                                    {/* ==========================Add and clear button section ends here =========================*/}

                                                    
                                                </form>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            {/* ==========================Registration form ends here==================================*/}
                            
                            
                        </div>
                    </div>
            </div>
        )
    }

    validate = () => {
        let { errors, firstName,initials, lastName, phoneNo, dob , gender, address, email, password, staffId, specialization } = this.state;
        let count = 0;

        if (firstName.length === 0) {
            errors.firstName =  'FirstName can not be empty !'
            count++
        } else {
            errors.firstName = ''
        }

        if (lastName.length === 0) {
            errors.lastName =  'Lastname can not be empty !'
            count++
        } else {
            errors.lastName = ''
        }

        if (initials.length === 0) {
            errors.initials =  'Initials can not be empty !'
            count++
        } else {
            errors.initials = ''
        }

        if (dob.length === 0) {
            errors.dob =  'birthday can not be empty !'
            count++
        } else {
            errors.dob = ''
        }

        if (phoneNo.length === 0) {
            errors.phoneNo = "Contact Number can not be empty"
            count++
        } else {
            if(phoneNo.length < 10){
                errors.phoneNo = "Need 10 Digits for a number"
                count++
            }else{
                errors.phoneNo = ""
            }
        }

        if (gender.length === 0) {
            errors.gender =  'Gender can not be empty !'
            count++
        } else {
            errors.gender = ''
        }

        if (email.length === 0) {
            errors.email =  'Email can not be empty !'
            count++
        } else {
            errors.email = ''
        }

        if (password.length === 0) {
            errors.password =  'Password can not be empty !'
            count++
        } else {
            errors.password = ''
        }

        if (staffId.length === 0) {
            errors.staffId =  'Staff ID can not be empty !'
            count++
        } else {
            errors.staffId = ''
        }

        if (specialization.length === 0) {
            errors.specialization =  'Specialization can not be empty !'
            count++
        } else {
            errors.specialization = ''
        }

        if (address.length === 0) {
            errors.address =  'Address can not be empty !'
            count++
        } else {
            errors.address = ''
        }

        this.setState({ errors });
        return count == 0;
    }






}

const GENDER = [{ label : 'Select the Gender' ,value : 'NONE' } , 
...['Male','Female'].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const SPECIALIZATION = [{ label : 'Select the Specialization' ,value : 'NONE' } , 
...['IT','SE'].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];


const mapStateToProps = state => ({
    auth: state.auth || {},
});
 
  
export default connect(mapStateToProps, null)(withRouter(StaffReg));