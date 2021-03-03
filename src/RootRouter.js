import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect} from 'react-redux';

import indexRoutes from './Routes/index.routes';
import AdminRoutes from './Routes/Admin.routes';
import ClientRoutes from './Routes/Client.routes';
import StaffRoutes from './Routes/Staff.routes';
import StudentRoutes from './Routes/Student.routes';


class RootRouter extends React.Component {

    router = () => {
        let routes = indexRoutes;

        let checkSignedIn =  this.props.auth.isAuthenticated;
        let role = (checkSignedIn) ? this.props.auth.user.loginRole : "";
        console.log("login role? ", role);

        if(checkSignedIn === true ){
            routes = [ ...routes ];
        }
        if(checkSignedIn === true && role === 1){
            routes = [ ...AdminRoutes, ...routes ];
        }
        if(checkSignedIn === true && role === 2){
            routes = [ ...StudentRoutes, ...routes ];
        }
        if(checkSignedIn === true && role === 3){
            routes = [ ...StaffRoutes, ...routes ];
        }
        if(checkSignedIn === true && role === 4){
            routes = [ ...ClientRoutes, ...routes ];
        }

        return routes;
    } 

    render(){
        return(
            <Router >
                <Switch>
                { this.router().map((prop, key) => {
                    return (
                    <Route
                        path={prop.path}
                        key={key}
                        component={(props) => <prop.component    {...props} />}
                        exact={prop.exact ? true : false}

                    />
                    );
                })}
                </Switch>
            </Router>
            // <Router >
            //     <Route path="/" component={login} />
            // </Router>
        );
    }

}

const mapStateToProps = state => ({
    auth : state.auth || {} ,
  });

export default connect(mapStateToProps)(RootRouter);

// export default RootRouter;