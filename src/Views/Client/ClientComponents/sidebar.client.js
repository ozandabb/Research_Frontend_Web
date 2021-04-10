import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu  , SidebarContent  } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faBars  , faAddressBook,faObjectGroup,faTruck,faSignOutAlt,faPeopleArrows,faEnvelope,faBackward,faDollarSign, faHome, faPen, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from "react-router-dom";
import "../../../Asserts/commoncss/sidebar.css";
import { SignOut } from '../../../Redux/Action/authAction';

class ClientSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side_bar_toggle: false,
    };
  }

  signoutuser = () => {
    const role = this.props.auth.user.user_details.role;
    // const isadmin = (role && (role == 3 || role == 1 || role == 2 || role == 0)) ? true : false
    this.props.SignOut && this.props.SignOut();
    this.props.history.push( "/");
  };

  render() {
    const { side_bar_toggle } = this.state;
    const { activemenu, submenu } = this.props;
    return (
      <div>
        <nav className="navbar  py-0 shadow-sm  fixed-top" style={{ background: "#000000", height:"50px" }} >

          <span className="navbar-brand mb-0 h6 text-dark ml-2">
            <FontAwesomeIcon onClick={() => this.setState({ side_bar_toggle: !this.state.side_bar_toggle, }) }
              icon={faBars}
              style={{color:"#FFFFFF"}}
              className="ml-4 click show-icon"
            ></FontAwesomeIcon>
          </span>

          <div style={{justifyContent:"center"}} className="d-none d-lg-block">
            {/* <h5 style={{color:"#FFFFFF"}}>Human Resources Management Executive </h5> */}
          </div>


          <div style={{justifyContent:"right"}}>
            <div className="row">
             
            </div>
          </div>
        </nav>

        <div className={`sidebar_wrap sidebar-top ${ side_bar_toggle ? "sidebar_active" : "" } shadow`} >

          <ProSidebar>
          <SidebarContent>
            <Menu iconShape="circle">
            <MenuItem active={activemenu === 'DASHBOARD'} icon={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}>Go Dashboard<Link to="/ClientDashboard"/></MenuItem>
            <MenuItem active={activemenu === 'ACCOUNT'} icon={<FontAwesomeIcon icon={faHome} />}>Account<Link to="/Student/Profile"/></MenuItem>
            <MenuItem active={activemenu === 'PROJECTS'} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Projects<Link to="/Admin/staffRegister"/></MenuItem>
              
        
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
export default ClientSidebar;