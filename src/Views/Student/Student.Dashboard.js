import React from "react";
import StudentNavbar from "./StudentComponents/Student.navbar";

class StudentDash extends React.Component {

    render() {
        return (
            <div style={{width:"100%"}}>
            <StudentNavbar />
                <div className="d-none d-lg-block" style={{width:"25%",paddingTop:"100px",display: "table-cell", paddingLeft:"40px",height:"100hv", paddingRight:"20px", float:"left",  position:"fixed"}}>
                    <div className="row">
                        <div className="col-sm-8" style={{top:"5px"}}>
                            <h6>Your Projects</h6>
                        </div>
                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-success">New</button>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft:"15px",marginRight:"20px" ,marginTop:"10px"}}>
                        <input type="text" class="form-control" placeholder="Search projects" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="row" style={{paddingLeft:"15px",marginRight:"10px", marginTop:"10px"}}>
                        <ul class="list-group">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                        </ul>
                        </div>
                </div>
                <div style={{width:"75%", paddingTop:"80px",height:"1000px",background:"#f6f8fa",borderLeft:"2px", float:"right"}}>
                 gergerg
                </div>
            </div>
        )
    }

}
export default StudentDash;