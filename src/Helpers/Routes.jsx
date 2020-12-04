import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import Landing from '../Pages/Landing'
import Home from '../Pages/Home'

const Routes = (props) => {

    return (
        <Switch>
                <Route path='/' component={Landing} exact />
                <Route path='/home' component={Home} exact />
                <Route path='/signin' component={Signin} exact />
                <Route path='/signup' component={Signup} exact />
        </Switch>
    );
};

export default Routes;
