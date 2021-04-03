import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HRSidebar from "./StudentComponents/StudentSidebar";
import { connect } from 'react-redux';

class StudentProjects extends Component {   
    render() {
        return (
            <div className="bg-light wd-wrapper">
                <HRSidebar activemenu={'DRIVERS'} />
                <div className="wrapper-wx" style={{height:"100hv"}}>
                    <div className="container-fluid">

                        

                    </div>
                </div>
            </div>
        );
    }
   
}

const mapStateToProps = state => ({
    auth: state.auth || {},
});
 
  
export default connect(mapStateToProps, null)(withRouter(StudentProjects));