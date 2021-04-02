import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {  Button, Card , Form , Image , OverlayTrigger , Tooltip , Tab } from 'react-bootstrap';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

class StudentSurvey extends React.Component {

    render() {
        return (
            <div class="container">
                <div style={{marginTop:'50px',marginBottom:'50px' }}>
                    <Card className="col-sm shadow" style={{ }}>
                        <div className='row' style={{ marginTop:'50px', marginLeft:'20px'}}>
                            <h4>Student Survey</h4>
                            <span className="text-muted small"><h6>Before you getting to your profile you have to fill this relevant information </h6></span>
                        </div>
                        <hr style={{}}></hr>

                        {/* ==================================Developing Side ========================================== */}
                        <div className= 'row' style={{ marginTop:'20px' , marginLeft:'20px'}}>
                            <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Developing Side </h6>

                            <div className= 'row' style={{ }}>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //defaultChecked
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Frontend
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Backend
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Fullstack
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        {/* ===============================Developing Criteria ========================================= */}
                        <div className= 'row' style={{ marginTop:'10px' , marginLeft:'20px'}}>
                            <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Developing Criteria </h6>

                            <div className= 'row' style={{ }}>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Web Application
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Mobile Application
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Desktop Application
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        {/* ===============================Programing Languages ========================================= */}
                        <div className= 'row' style={{ marginTop:'10px' , marginLeft:'20px'}}>
                            <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Programming Languages </h6>

                            <div className= 'row' style={{ }}>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Java
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Python
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Python
                                    </label>
                                </div>
                            </div>
                            <div className= 'row' style={{ }}>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; JavaScript
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; PHP
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    
                                </div>
                            </div>
                        </div>

                        {/* ===============================Programming Frameworks ========================================= */}
                        <div className= 'row' style={{ marginTop:'10px' , marginLeft:'20px'}}>
                            <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Programming Frameworks </h6>

                            <div className= 'row' style={{ }}>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Sprint Boot
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; DJango
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Laravel
                                    </label>
                                </div>
                            </div>
                            <div className= 'row' style={{ }}>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; .NET Core
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Express.js
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; React js
                                    </label>
                                </div>
                            </div>
                            <div className= 'row' style={{ }}>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Vue js
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    <label>
                                    <Checkbox
                                        //onChange={onChange}
                                        //disabled={this.state.disabled}
                                    />
                                    &nbsp; &nbsp; Angular
                                    </label>
                                </div>
                                <div className="col-sm" >
                                    
                                </div>
                            </div>

                        </div>
                    
                        {/* ==========================Add and clear button section start here ========================*/}
                        <div className="row" style={{ marginTop:'10px' , marginLeft:'20px', marginBottom:'20px'}}> 
                            <div className="col-6 mt-3 mb-1" >
                                <button type="submit" style={{backgroundColor:"#475466" , color:"#FFFFFF",  cursor: 'pointer'}} className="btn mt-2 btn btn-sm px-5">Submit</button>
                                <button type="button" style={{backgroundColor:"red",marginLeft:"10px", color:"#FFFFFF", cursor: 'pointer'}} onClick={() => this.clear()} className="btn mt-2 btn btn-sm px-5">Clear</button>
                            </div>
                        </div>
                        {/* ==========================Add and clear button section ends here =========================*/}

                    
                    
                    </Card>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth || {},
});
 
  
export default connect(mapStateToProps, null)(withRouter(StudentSurvey));