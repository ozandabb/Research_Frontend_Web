import React from "react";
import {FormInput ,FormSelect } from '../../Components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {  Button, Card , Form , Image , OverlayTrigger , Tooltip , Tab } from 'react-bootstrap';
import STUDENT_CONTROLLER from '../../Controllers/StudentController/student.controllers';
import CLIENT_CONTROLLER from '../../Controllers/ClientControllers/client.controller';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RegisterStudentStates: false,
            RegisterClientStates: false,
            RehisterState:false,

            firstName:'',
            lastName:'',
            initials:'',
            dob:'',
            phoneNo:'',
            gender:'',
            address:'',
            studentId:'',
            currentYear:'',
            currentSemester:'',
            facultyGroup:'',
            email:'',
            password:'',
            gpa:'',
            specialization:'',
            speciltionStore:'',

            CfirstName:'',
            ClastName:'',
            Cinitials: '',
            Cdob:'',
            CphoneNo:'',
            Cgender:'',
            Caddress:'',
            Cemail:'',
            Cpassword:'',
            CcompanyName:'',

          
            errors : {},
            error_message : '',

        };
    }

    formValueChange = (e) => {
        this.setState({[e.target.name] : e.target.value  });
    }

    //Update form submit
    onFormSubmitStudent = async (e) => {
        e.preventDefault();

        if (this.validateStudent()) {
            if(this.state.specialization == "IT"){
                this.state.speciltionStore= 1
            }
            else if(this.state.specialization == "SE"){
                this.state.speciltionStore= 2
            }
            var dataStudent = {
                firstName: this.state.firstName,
                lastName : this.state.lastName,
                initials: this.state.initials,
                dob: this.state.dob,
                phoneNo: this.state.phoneNo,
                gender: this.state.gender,
                address: this.state.address,
                studentId: this.state.studentId,
                currentYear:this.state.currentYear,
                currentSemester:this.state.currentSemester, 
                facultyGroup:this.state.facultyGroup,
                email:this.state.email,
                password:this.state.password,
                roleId:2,
                gpa:this.state.gpa,
                specialization: this.state.speciltionStore,
            }

            const resultStudent = await STUDENT_CONTROLLER.addStudent( dataStudent ,this.props.auth.token );

            console.log("student", resultStudent);
        }

    }

    //Update form submit
    onFormSubmitClient = async (e) => {
        e.preventDefault();

        if (this.validateClient()) {
            var dataClient = {
                firstName:this.state.CfirstName,
                lastName:this.state.ClastName,
                initials: this.state.Cinitials,
                dob:this.state.Cdob,
                phoneNo:this.state.CphoneNo,
                gender:this.state.Cgender,
                address:this.state.Caddress,
                email:this.state.Cemail,
                password:this.state.Cpassword,
                roleId:4,
                companyName:this.state.CcompanyName,
            }

            console.log("Client data", dataClient);

            const resultClient = await CLIENT_CONTROLLER.addClient( dataClient ,this.props.auth.token );

            console.log("Client result", resultClient);
        }

    }

    change_student_toggle = () => {
        if (this.state.RegisterStudentStates) {
            this.setState({ RegisterStudentStates: false, RehisterState:false })
        } else {
            this.setState({ RegisterStudentStates: true, RehisterState:true, RegisterClientStates:false })
        }
    }

    change_client_toggle = () => {
        if (this.state.RegisterClientStates) {
            this.setState({ RegisterClientStates: false, RehisterState:false })
        } else {
            this.setState({ RegisterClientStates: true , RehisterState:true, RegisterStudentStates: false })
        }
    }

    //Clear student input detaisl
    clearStudent = ()=>{
        this.setState({
            firstName:'',
            lastName:'',
            initials:'',
            dob:'',
            phoneNo:'',
            gender:'',
            address:'',
            studentId:'',
            currentYear:'',
            currentSemester:'',
            facultyGroup:'',
            email:'',
            password:'',
            roleId:'',
            gpa:'',
            specialization:'',
            
        })

    }

    //Clear Client input detaisl
    clearClient = ()=>{
        this.setState({
            firstName:'',
            lastName:'',
            initials: '',
            dob:'',
            phoneNo:'',
            gender:'',
            address:'',
            email:'',
            password:'',
            roleId:'',
            companyName:'',
            
        })

    }


    render() {

        const {errors } = this.state;

        return (
            // <div style={{height:'100hv'}}>
            <div class="container"  >
                <div className="row" >
                    <div className="col-sm-3" style={{backgroundColor:"#000080", height:'1200px'}}>

                    </div>

                    {/* ===============================register Setion start here ============================*/}
                    <div className="col-sm-9" style={{paddingLeft:'30px', paddingRight:'50px'}}>
                        <div className='row' style={{ marginTop:'50px'}}>
                            <h3>Signup Portal</h3>
                            <span className="text-muted small"><h6>Student and Client can signup by giving relevant information</h6></span>
                        </div>
                        {/* =====================================student and client buttons ========================*/}
                        <div className='row' style={{marginTop:'50px'}}>
                            <div className='col-sm'>
                                <button type="button" onClick={() => this.change_student_toggle()} class="btn btn-primary" style={{paddingLeft:'50px', paddingRight:'50px'}}>Student</button>
                                <button type="button" onClick={() => this.change_client_toggle()} class="btn btn-info" style={{marginLeft:'20px',paddingLeft:'50px', paddingRight:'50px'}}>Clients</button>
                            </div>
                        </div>

                        {/*=======================================================================================================*/}
                        {/*==================================== student regidtration form start here =============================*/}
                        {/*=======================================================================================================*/}
                        <div style={{ display: this.state.RegisterStudentStates == true ? 'block' : 'none'}}>
                            <Card className="col-sm shadow" style={{ marginTop:'20px'}}>
                                <form onSubmit={(e) => this.onFormSubmitStudent(e)}>

                                    {/* Bsic details section start here */}
                                    <div className='row' style={{marginTop:'20px', paddingLeft:'20px', paddingRight:'20px'}}>

                                        <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Enter Student Basic Details<br></br>
                                        <span className="text-muted small">Fill the relevant feilds to complete basic details </span></h6>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
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
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'First Name *'}
                                                        placeholder={"Enter first Name"}
                                                        value={this.state.firstName}
                                                        name="firstName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.firstName && errors.firstName.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.firstName}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Last Name *'}
                                                        placeholder={"Enter last Email"}
                                                        value={this.state.lastName}
                                                        name="lastName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.lastName && errors.lastName.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.lastName}</h4>}
                                                </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'10px'}}>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
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
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Date of Birth *'}
                                                        type='Date'
                                                        placeholder={"Enter Birthday"}
                                                        value={this.state.dob}
                                                        name="dob"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.dob && errors.dob.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.dob}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Contact Number *'}
                                                        type='Number'
                                                        placeholder={"Enter contact number"}
                                                        value={this.state.phoneNo}
                                                        name="phoneNo"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.phoneNo && errors.phoneNo.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.phoneNo}</h4>}
                                                </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'10px'}}>
                                        <div className="row">
                                            <div className="col-sm-12 mt-1 mb-1" >
                                                <FormInput 
                                                    label={'Address *'}
                                                    placeholder={"Enter address"}
                                                    value={this.state.address}
                                                    name="address"
                                                    onChange={this.formValueChange}
                                                />
                                                {errors.address && errors.address.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.address}</h4>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* university details section */}
                                    <div className='row' style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px'}}>

                                        <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Enter University Details<br></br>
                                        <span className="text-muted small">Fill the relevant feilds to complete university details </span></h6>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Student ID *'}
                                                        placeholder={"Enter student ID"}
                                                        value={this.state.studentId}
                                                        name="studentId"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.studentId && errors.studentId.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.studentId}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Faculty Group *'}
                                                        placeholder={"Enter faculty group"}
                                                        value={this.state.facultyGroup}
                                                        name="facultyGroup"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.facultyGroup && errors.facultyGroup.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.facultyGroup}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
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

                                    <div className='row' style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px'}}>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormSelect 
                                                        label={'Current Year *'}
                                                        options={CURRENT_YEAR}
                                                        selected={this.state.currentYear}
                                                        onChange={this.formValueChange}
                                                        name="currentYear"
                                                    />
                                                    {errors.currentYear && errors.currentYear.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.currentYear}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >

                                                    <FormSelect 
                                                        label={'Current Semester *'}
                                                        options={CURRENT_SEMESTER}
                                                        selected={this.state.currentSemester}
                                                        onChange={this.formValueChange}
                                                        name="currentSemester"
                                                    />
                                                    {errors.currentSemester && errors.currentSemester.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.currentSemester}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'GPA *'}
                                                        placeholder={"Enter gpa "}
                                                        value={this.state.gpa}
                                                        name="gpa"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.gpa && errors.gpa.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.gpa}</h4>}
                                                </div>
                                        </div>
                                    </div>

                                    {/* login details sectionstart here */}
                                    <div className='row' style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px'}}>

                                        <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Enter Login Details<br></br>
                                        <span className="text-muted small">Fill the relevant feilds to complete Login details </span></h6>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Email *'}
                                                        placeholder={"Enter your valid email"}
                                                        type="Email"
                                                        value={this.state.email}
                                                        name="email"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.email && errors.email.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Password *'}
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


                                    <div className="row" style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px'}}> 
                                        <div className="col-6 mt-3 mb-1" >
                                        <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Submit</button>
                                        <button type="button" style={{backgroundColor:"red",marginLeft:"10px", color:"#FFFFFF", cursor: 'pointer'}} onClick={() => this.clearStudent()} className="btn mt-2 btn btn-sm px-5">Cancel</button>
                                        </div>
                                    </div>

                                    
                                </form>
                            </Card>
                        </div>
                        {/*=======================================================================================================*/}
                        {/*==================================== student regidtration form ends here ==============================*/}
                        {/*=======================================================================================================*/}




                        {/*=======================================================================================================*/}
                        {/*==================================== Client regidtration form start here ==============================*/}
                        {/*=======================================================================================================*/}
                        <div style={{ display: this.state.RegisterClientStates == true ? 'block' : 'none'}}>
                            <Card className="col-sm shadow" style={{ marginTop:'20px'}}>
                                <form onSubmit={(e) => this.onFormSubmitClient(e)}>

                                    {/* Basic details section start here */}
                                    <div className='row' style={{marginTop:'20px', paddingLeft:'20px', paddingRight:'20px'}}>

                                        <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Enter Client Basic Details<br></br>
                                        <span className="text-muted small">Fill the relevant feilds to complete basic details </span></h6>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Initials *'}
                                                        placeholder={"Enter initials"}
                                                        value={this.state.Cinitials}
                                                        name="Cinitials"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.Cinitials && errors.Cinitials.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.Cinitials}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'First Name *'}
                                                        placeholder={"Enter first Name"}
                                                        value={this.state.CfirstName}
                                                        name="CfirstName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.CfirstName && errors.CfirstName.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.CfirstName}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Last Name *'}
                                                        placeholder={"Enter last Email"}
                                                        value={this.state.ClastName}
                                                        name="ClastName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.ClastName && errors.ClastName.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.ClastName}</h4>}
                                                </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'10px'}}>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormSelect 
                                                        label={'Gender *'}
                                                        options={SPECIALIZATION}
                                                        selected={this.state.Cgender}
                                                        onChange={this.formValueChange}
                                                        name="Cgender"
                                                    />
                                                    {errors.Cgender && errors.Cgender.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.Cgender}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Date of Birth *'}
                                                        type='Date'
                                                        placeholder={"Enter Birthday"}
                                                        value={this.state.Cdob}
                                                        name="Cdob"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.Cdob && errors.Cdob.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.Cdob}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Contact Number *'}
                                                        type='Number'
                                                        placeholder={"Enter contact number"}
                                                        value={this.state.CphoneNo}
                                                        name="CphoneNo"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.CphoneNo && errors.CphoneNo.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.CphoneNo}</h4>}
                                                </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'10px'}}>
                                        <div className="row">
                                            <div className="col-sm-12 mt-1 mb-1" >
                                                <FormInput 
                                                    label={'Address *'}
                                                    placeholder={"Enter address"}
                                                    value={this.state.Caddress}
                                                    name="Caddress"
                                                    onChange={this.formValueChange}
                                                />
                                                {errors.Caddress && errors.Caddress.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.Caddress}</h4>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company details section */}
                                    <div className='row' style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px'}}>

                                        <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Enter Company Details<br></br>
                                        <span className="text-muted small">Fill the relevant feilds to complete Company details </span></h6>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Company Name *'}
                                                        placeholder={"Enter company name"}
                                                        value={this.state.CcompanyName}
                                                        name="CcompanyName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.CcompanyName && errors.CcompanyName.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.CcompanyName}</h4>}
                                                </div>
                                        </div>
                                    </div>

                                  
                                    {/* login details sectionstart here */}
                                    <div className='row' style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px'}}>

                                        <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Enter Login Details<br></br>
                                        <span className="text-muted small">Fill the relevant feilds to complete Login details </span></h6>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Email *'}
                                                        placeholder={"Enter your valid email"}
                                                        type="email"
                                                        value={this.state.Cemail}
                                                        name="Cemail"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.Cemail && errors.Cemail.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.Cemail}</h4>}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Password *'}
                                                        type="password"
                                                        placeholder={"Enter password"}
                                                        value={this.state.Cpassword}
                                                        name="Cpassword"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {errors.Cpassword && errors.Cpassword.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.Cpassword}</h4>}
                                                </div>
                                        </div>
                                    </div>


                                    <div className="row" style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px'}}> 
                                        <div className="col-6 mt-3 mb-1" >
                                        <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Submit</button>
                                        <button type="button" style={{backgroundColor:"red",marginLeft:"10px", color:"#FFFFFF", cursor: 'pointer'}} onClick={() => this.clearClient()} className="btn mt-2 btn btn-sm px-5">Cancel</button>
                                        </div>
                                    </div>

                                    
                                </form>
                            </Card>
                        </div>
                        {/*=======================================================================================================*/}
                        {/*==================================== Client regidtration form ends here ===============================*/}
                        {/*=======================================================================================================*/}





                        {/* ------------------------------ error message-------------------------- */}
                        <div className=" shadow-sm rounded bg-white mb-3 pt-2 pb-3" style={{ display: this.state.RehisterState == false ? 'block' : 'none',  marginTop:"20px"}} >
                            <h6 className="text-header text-warning pt-2 pb-2 ml-4 font-weight-bold line-hight-1">
                                <FontAwesomeIcon icon={faExclamationTriangle}  className="mr-2"/>
                                Conflict Found !
                            </h6>
                            <h6 className="text-header mb-0 ml-4 line-hight-1">
                            <span className="text-muted small font-weight-bold">Please Select a role to Signup</span></h6>
                        </div>





                    </div>
                    {/* ===============================register Setion ends here ============================*/}
                </div>
            </div>
        )
    }

    validateStudent = () => {
        let { errors, firstName,initials, lastName, phoneNo, dob , gender, address, studentId,
             currentYear, currentSemester, facultyGroup, email, password, gpa, specialization} = this.state;
        let count = 0;

        if (firstName.length === 0) {
            errors.firstName =  'Firstname can not be empty !'
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

        if (address.length === 0) {
            errors.address =  'Address can not be empty !'
            count++
        } else {
            errors.address = ''
        }

        if (gender.length === 0) {
            errors.gender =  'Gender can not be empty !'
            count++
        } else {
            errors.gender = ''
        }

        if (studentId.length === 0) {
            errors.studentId =  'Student ID can not be empty !'
            count++
        } else {
            errors.studentId = ''
        }

        if (currentYear.length === 0) {
            errors.currentYear =  'Current year can not be empty !'
            count++
        } else {
            errors.currentYear = ''
        }

        if (currentSemester.length === 0) {
            errors.currentSemester =  'Current semester ID can not be empty !'
            count++
        } else {
            errors.currentSemester = ''
        }

        if (facultyGroup.length === 0) {
            errors.facultyGroup =  'Faculty Group can not be empty !'
            count++
        } else {
            errors.facultyGroup = ''
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

        if (gpa.length === 0) {
            errors.gpa =  'GPA can not be empty !'
            count++
        } else {
            errors.gpa = ''
        }

        if (specialization.length === 0) {
            errors.specialization =  'Specialization can not be empty !'
            count++
        } else {
            errors.specialization = ''
        }

        this.setState({ errors });
        return count == 0;
    }

    validateClient = () => {
        let { errors, CfirstName, ClastName, Cinitials, Cdob, CphoneNo, Cgender, Caddress, Cemail, Cpassword, CcompanyName} = this.state;
        let count = 0;

        if (CfirstName.length === 0) {
            errors.CfirstName =  'Firstname can not be empty !'
            count++
        } else {
            errors.CfirstName = ''
        }

        if (ClastName.length === 0) {
            errors.ClastName =  'Lastname can not be empty !'
            count++
        } else {
            errors.ClastName = ''
        }

        if (Cinitials.length === 0) {
            errors.Cinitials =  'Initials can not be empty !'
            count++
        } else {
            errors.Cinitials = ''
        }

        if (Cdob.length === 0) {
            errors.Cdob =  'birthday can not be empty !'
            count++
        } else {
            errors.Cdob = ''
        }

        if (CphoneNo.length === 0) {
            errors.CphoneNo = "Contact Number can not be empty"
            count++
        } else {
            if(CphoneNo.length < 10){
                errors.CphoneNo = "Need 10 Digits for a number"
                count++
            }else{
                errors.CphoneNo = ""
            }
        }

        if (Caddress.length === 0) {
            errors.Caddress =  'Address can not be empty !'
            count++
        } else {
            errors.Caddress = ''
        }

        if (Cgender.length === 0) {
            errors.Cgender =  'Gender can not be empty !'
            count++
        } else {
            errors.Cgender = ''
        }

        if (Cemail.length === 0) {
            errors.Cemail =  'Email can not be empty !'
            count++
        } else {
            errors.Cemail = ''
        }

        if (Cpassword.length === 0) {
            errors.Cpassword =  'Password can not be empty !'
            count++
        } else {
            errors.Cpassword = ''
        }

        if (CcompanyName.length === 0) {
            errors.CcompanyName =  'Company name can not be empty !'
            count++
        } else {
            errors.CcompanyName = ''
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

const CURRENT_YEAR = [{ label : 'Select current year' ,value : 'NONE' } , 
...[1,2,3,4].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const CURRENT_SEMESTER = [{ label : 'Select current semester ' ,value : 'NONE' } , 
...[1,2].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const mapStateToProps = state => ({
    auth: state.auth || {},
  });
 
  
export default connect(mapStateToProps, null)(withRouter(SignUp));
// export default SignUp;