import React from "react";
import ADMINSidebar from "../sidebar.admin";

class AllStaff extends React.Component {

    render() {
        return (
            <div className="bg-light wd-wrapper">
                <ADMINSidebar activemenu={'STAFF'} submenu={'ALL_STAFF'} />
                    <div className="wrapper-wx" style={{height:"100hv"}}>
                        <div className="container-fluid">
                            <h1>All Staff</h1>

                        </div>
                    </div>
            </div>
        )
    }

}
export default AllStaff;