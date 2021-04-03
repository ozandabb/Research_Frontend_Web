import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu  , SidebarContent  } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars , faHandshake  , faAddressBook,faObjectGroup,faTruck,faSignOutAlt,faPeopleArrows,faEnvelope,faBackward,faDollarSign, faHome, faPen, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from "react-router-dom";

class ClientSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          side_bar_toggle: false,
        };
      }

    render() {
        const { side_bar_toggle } = this.state;

        const { activemenu, submenu } = this.props;

        return (
            <div className={`sidebar_wrap sidebar-top ${ side_bar_toggle ? "sidebar_active" : "" } shadow`} style={{marginTop:"100px"}} >
                <ProSidebar>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem active={activemenu === 'ACCOUNT'} icon={<FontAwesomeIcon icon={faHome} />}>Account<Link to="/Student/Profile"/></MenuItem>
              {/* <MenuItem active={activemenu === 'PROJECTS'} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Projects<Link to="/Admin/staffRegister"/></MenuItem> */}
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
              {/* <MenuItem active={activemenu === 'gg'} onClick={() => this.signoutuser()} icon={<FontAwesomeIcon icon={faSignOutAlt}  />}>Logout</MenuItem> */}
           
        
            </Menu>
            </SidebarContent>
          </ProSidebar>
            </div>
        )
    }

}
export default ClientSidebar;