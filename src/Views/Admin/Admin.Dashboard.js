import React from "react";
import ADMINSidebar from "./sidebar.admin";

class AdminDash extends React.Component {

    render() {
        return (
            <div className="bg-light wd-wrapper">
                <ADMINSidebar activemenu={'DASHBOARD'} />
                    <div className="wrapper-wx" style={{height:"100hv"}}>
                        <div className="container-fluid">

                        </div>
                    </div>
            </div>
        )
    }

}
export default AdminDash;