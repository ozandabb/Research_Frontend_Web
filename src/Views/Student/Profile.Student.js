import React from "react";
import StudentNavbar from "./StudentComponents/Student.navbar";
import StudentSidebar from "./StudentComponents/StudentSidebar";
import ProfileLogo from '../../Asserts/Images/profileLogo.png'
import {FormInput ,FormSelect } from '../../Components/Form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class StudentProfile extends React.Component {

    render() {
        return (
            <div className="bg-light wd-wrapper">
            {/* <StudentNavbar /> */}
                {/* <div style={{marginTop:"80px"}}> */}
                <StudentSidebar activemenu={'ACCOUNT'} />
                    <div className="wrapper-wx">
                        <div className="container-fluid">

                        <div className="row">
                            <div className="col-sm-3">
                                {/* <div className="row"> */}
                                    <img src={ProfileLogo} style={{width:"100%", paddingTop:"40px", paddingLeft:"40px", paddingRight:"40px", paddingBottom:"0px"}} className="img-fluid" alt="..."/> 
                                {/* </div>
                                <div className="row" style={{padding:"20px"}}>
                                    <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Update Profile</button>
                                </div> */}
                            </div>
                            <div className="col-sm-9">

                                {/* ==================================================================================== */}
                                {/* ========================Account information section start here =====================*/}
                                {/* ==================================================================================== */}
                                <div className="row" style={{ fontFamily:"sans-serif", marginTop:"10px", marginBottom:"15px", marginLeft:"5px"}}>
                                    {/* <div className="col-sm-9"> */}
                                        <h6 style={{paddingTop:"10px", paddingLeft:"5px"}}>Account Information<br></br>
                                        <span className="text-muted small">Manage and Edit your userAccount details</span></h6>
                                    {/* </div>
                                    <div className="col-sm-3"> 
                                    </div> */}
                                </div>

                                <div style={{paddingLeft:"5px"}}>
                                    <form onSubmit={(e) => this.onFormSubmit(e)}>

                                    <div className="row">
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={'Initials *'}
                                                //value={this.state.initials}
                                                name="initials"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.initials && errors.initials.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.initials}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={'Firstname *'}
                                                //value={this.state.firstName}
                                                name="firstName"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.firstName && errors.firstName.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.firstName}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={"Lastname *"}
                                                //value={this.state.lastName}
                                                name="lastName"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.lastName && errors.lastName.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.lastName}</h4>} */}
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-sm" >
                                            <FormSelect 
                                                label={'Gender'}
                                                options={GENDER}
                                                //selected={this.state.gender}
                                                //onChange={this.formValueChange}
                                                name="gender"
                                            />
                                            {/* {errors.gender && errors.gender.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.gender}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={"Date of Birth *"}
                                                type="date"
                                                //value={this.state.dob}
                                                name="dob"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.dob && errors.dob.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.dob}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={"Contact Number *"}
                                                type="Number"
                                                //value={this.state.phoneNo}
                                                name="phoneNo"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.phoneNo && errors.phoneNo.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.phoneNo}</h4>} */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={'Address *'}
                                                //value={this.state.address}
                                                name="address"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.address && errors.address.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.address}</h4>} */}
                                        </div>
                                    </div>
                                    {/* ==================================================================================== */}
                                    {/* =======================Account information section ends here======================== */}
                                    {/* ==================================================================================== */}






                                    {/* ==================================================================================== */}
                                    {/* ========================Univercity details section start here =====================*/}
                                    {/* ==================================================================================== */}
                                    <div className="row" style={{ fontFamily:"sans-serif", marginBottom:"15px", marginTop:"15px"}}>
                                        <div className="col-sm-9">
                                            <h6 style={{paddingTop:"10px", paddingLeft:"5px"}}>Univercity Information<br></br>
                                            <span className="text-muted small">Manage and Edit your Univercity details</span></h6>
                                        </div>
                                        <div className="col-sm-3"> 
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={'Student ID *'}
                                                //value={this.state.studentId}
                                                name="studentId"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.studentId && errors.studentId.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.studentId}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={'Faculty Group *'}
                                                //value={this.state.facultyGroup}
                                                name="facultyGroup"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.facultyGroup && errors.facultyGroup.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.facultyGroup}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormSelect 
                                                label={'Specialization *'}
                                                options={SPECIALIZATION}
                                                //selected={this.state.specialization}
                                                //onChange={this.formValueChange}
                                                name="specialization"
                                            />
                                            {/* {errors.specialization && errors.specialization.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.specialization}</h4>} */}
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-sm" >
                                            <FormSelect 
                                                label={'Current Year *'}
                                                options={CURRENT_YEAR}
                                                //selected={this.state.currentYear}
                                                //onChange={this.formValueChange}
                                                name="currentYear"
                                            />
                                            {/* {errors.currentYear && errors.currentYear.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.currentYear}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormSelect 
                                                label={'Current Semester *'}
                                                options={CURRENT_SEMESTER}
                                                //selected={this.state.currentSemester}
                                                //onChange={this.formValueChange}
                                                name="currentSemester"
                                            />
                                            {/* {errors.currentSemester && errors.currentSemester.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.currentSemester}</h4>} */}
                                        </div>
                                        <div className="col-sm" >
                                            <FormInput 
                                                label={'GPA *'}
                                                //value={this.state.gpa}
                                                name="gpa"
                                                //onChange={this.formValueChange}
                                            />
                                            {/* {errors.gpa && errors.gpa.length > 0 &&
                                            <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.gpa}</h4>} */}
                                        </div>
                                    </div>

                                    {/* ==================================================================================== */}
                                    {/* =======================Univercity details  section ends here======================== */}
                                    {/* ==================================================================================== */}

                                    <div className="row" style={{paddingTop:'10px',  paddingRight:'20px', paddingBottom:'20px'}}> 
                                        <div className="col-6 mt-3 mb-1" >
                                        <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Submit</button>
                                        <button type="button" style={{backgroundColor:"red",marginLeft:"10px", color:"#FFFFFF", cursor: 'pointer'}} onClick={() => this.clearStudent()} className="btn mt-2 btn btn-sm px-5">Cancel</button>
                                        </div>
                                    </div>











                                    </form>
                                </div>




                                    
                            </div>
                        </div>

                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }

}
// export default StudentProfile;

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
 
  
export default connect(mapStateToProps, null)(withRouter(StudentProfile));