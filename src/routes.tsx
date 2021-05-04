import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Consultations from './Pages/Consultations';
import Lessons from './Pages/Lessons';
import Notices from './Pages/Notices';

// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import ForgotPassword from './Pages/ForgotPassword';
import Users from './Pages/Users';

import { isAuthenticated } from './services/auth';


const PrivateRoute = ({...rest}) => {
    return isAuthenticated() ? <Route {...rest}/> : <Redirect to="/login"/>
}


function Routes() {
    return (
        <Switch>
            {/* <Route path="/" exact component={Home}/> */}
            {/* <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword}/> */}
            <PrivateRoute path="/users" component={Users}/>
            <PrivateRoute path="/consultations" component={Consultations}/>
            <PrivateRoute path="/lessons" component={Lessons}/>
            <PrivateRoute path="/news" component={Notices}/>
            <PrivateRoute path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default Routes;