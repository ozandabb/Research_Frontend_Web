import React from 'react';
import login from './Views/SignIn/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class RootRouter extends React.Component {

    render(){
        return(
            <Router >
                <Route path="/" component={login} />
            </Router>
        );
    }

}

export default RootRouter;