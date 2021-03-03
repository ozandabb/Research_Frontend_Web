import React from "react";
import {FormInput  } from '../../Components/Form';
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
            specialization:this.state.specialization, 
        }

        const resultStudent = await STUDENT_CONTROLLER.addStudent( dataStudent ,this.props.auth.token );

        console.log("student", resultStudent);

    }

    //Update form submit
    onFormSubmitClient = async (e) => {
        e.preventDefault();

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
                        {/* =====================================student and client buttons */}
                        <div className='row' style={{marginTop:'50px'}}>
                            <div className='col-sm'>
                                <button type="button" onClick={() => this.change_student_toggle()} class="btn btn-primary" style={{paddingLeft:'50px', paddingRight:'50px'}}>Student</button>
                                <button type="button" onClick={() => this.change_client_toggle()} class="btn btn-info" style={{marginLeft:'20px',paddingLeft:'50px', paddingRight:'50px'}}>Clients</button>
                            </div>
                        </div>


                        {/*==================================== student regidtration form start here ==============================*/}
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
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'First Name *'}
                                                        placeholder={"Enter first Name"}
                                                        value={this.state.firstName}
                                                        name="firstName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Last Name *'}
                                                        placeholder={"Enter last Email"}
                                                        value={this.state.lastName}
                                                        name="lastName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.email && errors.email.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>} */}
                                                </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'10px'}}>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Gender *'}
                                                        placeholder={"Enter gender"}
                                                        value={this.state.gender}
                                                        name="gender"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
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
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
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
                                                    {/* {errors.email && errors.email.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>} */}
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
                                                {/* {errors.name && errors.name.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
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
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Faculty Group *'}
                                                        placeholder={"Enter faculty group"}
                                                        value={this.state.facultyGroup}
                                                        name="facultyGroup"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Specialization *'}
                                                        placeholder={"Enter last Email"}
                                                        value={this.state.specialization}
                                                        name="specialization"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.email && errors.email.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>} */}
                                                </div>
                                        </div>
                                    </div>

                                    <div className='row' style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px'}}>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Current Year *'}
                                                        placeholder={"Enter current year"}
                                                        value={this.state.currentYear}
                                                        name="currentYear"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Current Semester *'}
                                                        placeholder={"Enter current semester"}
                                                        value={this.state.currentSemester}
                                                        name="currentSemester"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'GPA *'}
                                                        placeholder={"Enter gpa "}
                                                        value={this.state.gpa}
                                                        name="gpa"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.email && errors.email.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>} */}
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
                                                        //value={this.state.email}
                                                        name="email"
                                                        //onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Password *'}
                                                        placeholder={"Enter password"}
                                                        //value={this.state.password}
                                                        name="password"
                                                        //onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                        </div>
                                    </div>


                                    <div className="row" style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px'}}> 
                                        <div className="col-6 mt-3 mb-1" >
                                        <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Submit</button>
                                        <button type="button" style={{backgroundColor:"red",marginLeft:"10px", color:"#FFFFFF", cursor: 'pointer'}} onClick={() => this.clear()} className="btn mt-2 btn btn-sm px-5">Cancel</button>
                                        </div>
                                    </div>

                                    
                                </form>
                            </Card>
                        </div>
                        {/*==================================== student regidtration form ends here ==============================*/}



                        {/*==================================== Client regidtration form start here ==============================*/}
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
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'First Name *'}
                                                        placeholder={"Enter first Name"}
                                                        value={this.state.CfirstName}
                                                        name="CfirstName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Last Name *'}
                                                        placeholder={"Enter last Email"}
                                                        value={this.state.ClastName}
                                                        name="ClastName"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.email && errors.email.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>} */}
                                                </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'10px'}}>

                                            <div className="row">
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Gender *'}
                                                        placeholder={"Enter gender"}
                                                        value={this.state.Cgender}
                                                        name="Cgender"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
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
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
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
                                                    {/* {errors.email && errors.email.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.email}</h4>} */}
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
                                                {/* {errors.name && errors.name.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
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
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
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
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                                <div className="col-sm mt-1 mb-1" >
                                                    <FormInput 
                                                        label={'Password *'}
                                                        placeholder={"Enter password"}
                                                        value={this.state.Cpassword}
                                                        name="Cpassword"
                                                        onChange={this.formValueChange}
                                                    />
                                                    {/* {errors.name && errors.name.length > 0 &&
                                                    <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.name}</h4>} */}
                                                </div>
                                        </div>
                                    </div>


                                    <div className="row" style={{paddingTop:'10px', paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px'}}> 
                                        <div className="col-6 mt-3 mb-1" >
                                        <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Submit</button>
                                        <button type="button" style={{backgroundColor:"red",marginLeft:"10px", color:"#FFFFFF", cursor: 'pointer'}} onClick={() => this.clear()} className="btn mt-2 btn btn-sm px-5">Cancel</button>
                                        </div>
                                    </div>

                                    
                                </form>
                            </Card>
                        </div>
                        {/*==================================== Client regidtration form ends here ==============================*/}





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

}

const mapStateToProps = state => ({
    auth: state.auth || {},
  });
 
  
export default connect(mapStateToProps, null)(withRouter(SignUp));
// export default SignUp;