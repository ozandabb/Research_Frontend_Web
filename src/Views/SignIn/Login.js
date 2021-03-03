import React from "react";
// import { Container , Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {setCurrentUser}  from "../../Redux/Action/authAction";
import { Link,withRouter } from "react-router-dom";
// import img_1 from '../../Asserts/Images/home_banner.png'
import img_2 from '../../Asserts/LoginAsserts/images/bg-01.jpg'

import CommonController from '../../Controllers/Common.controller';
import '../../Asserts/LoginAsserts/css/util.css';
import '../../Asserts/LoginAsserts/css/main.css'
import '../../Asserts/LoginAsserts/vendor/bootstrap/css/bootstrap.min.css'
import '../../Asserts/LoginAsserts/vendor/animate/animate.css'
import '../../Asserts/LoginAsserts/vendor/css-hamburgers/hamburgers.min.css';
import '../../Asserts/LoginAsserts/vendor/animsition/css/animsition.min.css';
import '../../Asserts/LoginAsserts/vendor/select2/select2.min.css';
import '../../Asserts/LoginAsserts/vendor/daterangepicker/daterangepicker.css';





class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error : false , 

        };
    }

    // Email
    onChangeuEmail(e) {
        this.setState({
        username: e.target.value,
        });
    }

    // Password  
    onChangeuPass(e) {
        this.setState({
        password: e.target.value,
        });
    }

    // Login Function
    async onLogin(e) {
        e.preventDefault();

        var status = await CommonController.common_sign(this.state.username, this.state.password);

        console.log("menns status", status);
        
        if(status.status === 200){
            this.props.setCurrentUser(status.data );
            this.clear();

            if(status.data.loginRole === 1 ){
                this.props.history.push("/AdminDashboard");
            }else if(status.data.loginRole === 2 ){
                this.props.history.push("/StudentDashboard");
            }else if(status.data.loginRole === 3 ){
                this.props.history.push("/StaffDashboard");
            }else if(status.data.loginRole === 4 ){
                this.props.history.push("/ClientDashboard");
            }else{
                this.props.history.push("/");
            } 

        }else{
            this.setState({
                error: true,
            })
            this.props.history.push("/");
            this.clear();
        }
    }

    clear = ()=>{
        this.setState({
            username:'',
            password:'',
        })
    }

    render() {
        return (

            <div className="limiter">
		        <div className="container-login100">
			        <div className="wrap-login100">
                        <form className="login100-form validate-form" onSubmit={e => {this.onLogin(e);}} style={{justifyContent:"center"}}>
                            <span className="login100-form-title font-weight-bold">
                                Welcome!<br></br>
                                <span className="text-muted small"><h6>Login Portal</h6></span>
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="username" 
                                    value={this.state.username}
                                    placeholder="Username" 
                                    name="username"
                                    onChange={e => this.onChangeuEmail(e)}
                                    required />
                                    <span class="focus-input100">Username</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" 
                                    placeholder="Password" 
                                    value={this.state.password} 
                                    placeholder="Enter Password" 
                                    name="password"
                                    onChange={e => this.onChangeuPass(e)}
                                    required/>
                                    <span class="focus-input100">Password</span>

                            </div>

                            {/* ------------------------------ error message-------------------------- */}
                            { 
                            this.state.error &&
                                 <h4 className="small text-danger mt-2 font-weight-bold mb-0">Invalid Username or Password</h4>
                            }

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>

                            <div className="text-center p-t-46 p-b-20">
						        <span class="txt2">
                                    or <Link to="/SignUp">sign up</Link>
                                </span>
                            </div>
                        </form>
                    
                        <div className='login100-more' style={{backgroundColor:'#000080',}}>
                        </div>

                	</div>
		        </div>
	        </div>

        );
    }
}



export default connect(null, { setCurrentUser })(
    withRouter(Login)
);


// export default Login;