import React from "react";
// import PropType from 'prop-types';
import { connect } from 'react-redux';
import {  Button, Card , Form , Image ,FormFile, OverlayTrigger , Tooltip , Popover } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem, SubMenu  , SidebarContent  } from 'react-pro-sidebar';
import { faTable, faBars , faHandshake  , faAddressBook,faObjectGroup,faTruck,faSignOutAlt,faPeopleArrows,faEnvelope,faBackward,faDollarSign, faHome, faPen, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import "../../Asserts/commoncss/sidebar.css";
import { SignOut } from '../../Redux/Action/authAction';
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class HRSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side_bar_toggle: false,
    };
  }

  signoutuser = () => {
    const role = this.props.auth.user.loginRole;
    // const isadmin = (role && (role == 3 || role == 1 || role == 2 || role == 0)) ? true : false
    this.props.SignOut && this.props.SignOut();
    this.props.history.push( "/");
  };

  render() {
    const { side_bar_toggle } = this.state;
    const { activemenu, submenu } = this.props;
    return (
      <div>
        <nav className="navbar  py-0 shadow-sm  fixed-top" style={{ background: "#475466", height:"50px" }} >

          <span className="navbar-brand mb-0 h6 text-dark ml-2">
            <FontAwesomeIcon onClick={() => this.setState({ side_bar_toggle: !this.state.side_bar_toggle, }) }
              icon={faBars}
              style={{color:"#FFFFFF"}}
              className="ml-4 click show-icon"
            ></FontAwesomeIcon>
          </span>

          <div style={{justifyContent:"center"}} className="d-none d-lg-block">
            <h5 style={{color:"#FFFFFF"}}>Administrative Area</h5>
          </div>


          <div style={{justifyContent:"right"}}>

          </div>
        </nav>

        <div className={`sidebar_wrap sidebar-top ${ side_bar_toggle ? "sidebar_active" : "" } shadow`} >

          <ProSidebar>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem active={activemenu === 'DASHBOARD'} icon={<FontAwesomeIcon icon={faHome} />}>Dashboard<Link to="/AdminDashboard"/></MenuItem>
              <SubMenu defaultOpen={activemenu === 'STAFF'} title="Staff" icon={<FontAwesomeIcon icon={faHandshake} />}>
                <MenuItem active={submenu === 'REGISTRATION'}>Registration<Link to="/Admin/staffRegister"/></MenuItem>
                <MenuItem active={submenu === 'ALL_STAFF'}>All Staff<Link to="/Admin/AllStaff"></Link></MenuItem>
                {/* <MenuItem active={submenu === 'SALARY'}>Salary<Link to="/hr/Requests/SalaryAdavanced"/></MenuItem> */}
              </SubMenu>
              {/* <MenuItem active={activemenu === 'STAFF'} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Staff<Link to="/Admin/staffRegister"/></MenuItem> */}
              {/* <MenuItem active={activemenu === 'SUPPLIERS'} icon={<FontAwesomeIcon icon={faAddressBook} />}>Suppliers<Link to="/hr/supplier"/></MenuItem>
              <MenuItem active={activemenu === 'EMPLOYEES'} icon={<FontAwesomeIcon icon={faTable} />}>Employees<Link to="/hr/employees"/></MenuItem>
              <MenuItem active={activemenu === 'VEHICLES'} icon={<FontAwesomeIcon icon={faTruck} />}>Vehicles<Link to="/hr/vehicles"/></MenuItem>
              <MenuItem active={activemenu === 'DRIVERS'} icon={<FontAwesomeIcon icon={faObjectGroup} />}>Drivers<Link to="/hr/driver"/></MenuItem>
              <MenuItem active={activemenu === 'GOALS'} icon={<FontAwesomeIcon icon={faDollarSign} />}>Goals<Link to="/hr/Goals"/></MenuItem>
              <MenuItem active={activemenu === 'BENEFITS'} icon={<FontAwesomeIcon icon={faEnvelope} />}>Benefits<Link to="/hr/benefits"/></MenuItem>
              <MenuItem active={activemenu === 'Training'} icon={<FontAwesomeIcon icon={faPen} />}>Training<Link to="/hr/training"/></MenuItem>
              <MenuItem active={activemenu === 'RECRUITMENT'} icon={<FontAwesomeIcon icon={faBackward} />}>Recruitment<Link to="/hr/driver"/></MenuItem> */}
              
              {/* <SubMenu defaultOpen={activemenu === 'REQUEST'} title="Requests" icon={<FontAwesomeIcon icon={faHandshake} />}>
                <MenuItem active={submenu === 'LOAN'}>Loan<Link to="/hr/Requests/Loans"/></MenuItem>
                <MenuItem active={submenu === 'LEAVE'}>Leave<Link to="/hr/Requests/Leave"></Link></MenuItem>
                <MenuItem active={submenu === 'SALARY'}>Salary<Link to="/hr/Requests/SalaryAdavanced"/></MenuItem>
              </SubMenu>
               */}
              <MenuItem active={activemenu === 'gg'} onClick={() => this.signoutuser()} icon={<FontAwesomeIcon icon={faSignOutAlt}  />}>Logout</MenuItem>
           
        
            </Menu>
            </SidebarContent>
          </ProSidebar>

          <ul className="sidebar">

          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth || {},
});

const mapDispatchToProps = {
  SignOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HRSidebar));
