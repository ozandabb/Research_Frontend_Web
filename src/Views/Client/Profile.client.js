import React from "react";
import ClientNavbar from "./ClientComponents/nabar.client";
import ClientSidebar from "./ClientComponents/sidebar.client";
import ProfileLogo from '../../Asserts/Images/profileLogo.png'
import {FormInput ,FormSelect } from '../../Components/Form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class ClientProfile extends React.Component {

    render() {
        return (
            <div >
            <ClientNavbar />
                <div style={{marginTop:"80px"}}>
                <ClientSidebar activemenu={'ACCOUNT'} />
                <div className="wrapper-wx">
                        <div className="container-fluid">

                        <div className="row">
                            <div className="col-sm-3">
                                <img src={ProfileLogo} style={{width:"100%", padding:"20px"}} className="img-fluid" alt="..."/> 
                            </div>
                            <div className="col-sm-9">
                                    {/* ========================Title and the button section start here =====================*/}
                                    <div className="row" style={{ fontFamily:"sans-serif", marginBottom:"15px"}}>
                                        <div className="col-sm-9">
                                            <h6 style={{paddingTop:"10px", paddingLeft:"5px"}}>Account Information<br></br>
                                            <span className="text-muted small">Manage and Edit your userAccount details</span></h6>
                                        </div>
                                        <div className="col-sm-3"> 
                                        </div>
                                    </div>
                                    {/* =======================Title and the button section ends here======================== */}

                                    <div className="row" style={{paddingLeft:"5px"}}>
                                        <form onSubmit={(e) => this.onFormSubmit(e)}>

                                        <div className="row">
                                            <div className="col-sm mt-1 mb-1" >
                                                <FormInput 
                                                    label={'Initials *'}
                                                    //value={this.state.initials}
                                                    name="initials"
                                                    //onChange={this.formValueChange}
                                                />
                                                {/* {errors.initials && errors.initials.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.initials}</h4>} */}
                                            </div>
                                            <div className="col-sm mt-1 mb-1" >
                                                <FormInput 
                                                    label={'Firstname *'}
                                                    //value={this.state.firstName}
                                                    name="firstName"
                                                    //onChange={this.formValueChange}
                                                />
                                                {/* {errors.firstName && errors.firstName.length > 0 &&
                                                <h4 className="small text-danger mt-2 font-weight-bold mb-0">{errors.firstName}</h4>} */}
                                            </div>
                                            <div className="col-sm mt-1 mb-1" >
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
                                            <div className="col-sm mt-1 mb-1" >
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
                                            <div className="col-sm mt-1 mb-1" >
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
                                            <div className="col-sm mt-1 mb-1" >
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
                                            <div className="col-sm mt-1 mb-1" >
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

                                        </form>
                                    </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
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


const mapStateToProps = state => ({
    auth: state.auth || {},
});
 
  
export default connect(mapStateToProps, null)(withRouter(ClientProfile));