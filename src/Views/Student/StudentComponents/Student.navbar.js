import React from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import logoImage from '../../../Asserts/Images/logo.png'
import ProfileLogo from '../../../Asserts/Images/profileLogo.png'
import {  Dropdown, Card , Form , Image ,FormFile, OverlayTrigger , Toggle , Popover } from 'react-bootstrap';
import { SignOut } from '../../../Redux/Action/authAction';

class StudentNavbar extends React.Component {

    constructor(props) {
        super(props);
    }

    signoutuser = () => {
        const role = this.props.auth.user.loginRole;
        // const isadmin = (role && (role == 3 || role == 1 || role == 2 || role == 0)) ? true : false
        this.props.SignOut && this.props.SignOut();
        this.props.history.push( "/");
    };

    render() {

        return (

            <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" style= {{background:"#000000"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/StudentDashboard">
                    <img src={logoImage} alt="" width="100"  class="d-inline-block align-text-top"/>
                    </a> 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/StudentDashboard">Dashboard</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>

                    <Dropdown>
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                        <img src={ProfileLogo} alt="" width="25"  class="d-inline-block align-text-top"/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/Student/Profile">Account</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.signoutuser()}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>

                    
           
                    
                </div>
            </nav>

            // <nav className="navbar navbar-light bg-light">
            //     <div className="container-fluid">
                // <a class="navbar-brand" href="#">
                //     <img src={logoImage} alt="" width="150"  class="d-inline-block align-text-top"/>
                //     </a>       
                    
                    // <li class="nav-item dropdown">
                    //     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    //         Dropdown link
                    //     </a>
                    //     <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    //         <li><a class="dropdown-item" href="#">Action</a></li>
                    //         <li><a class="dropdown-item" href="#">Another action</a></li>
                    //         <li><a class="dropdown-item" href="#">Something else here</a></li>
                    //     </ul>
                    // </li>
            //     </div>
            // </nav>
        );
    }


}

// export default StudentNavbar;
const mapStateToProps = (state) => ({
    auth: state.auth || {},
  });
  
  const mapDispatchToProps = {
    SignOut,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentNavbar));