import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Signin from '../Pages/Signin'
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'
import Posts from '../Pages/Posts'

const Routes = (props) => {

    return (
        <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/signin' component={Signin} exact />
                <Route path='/posts' component={Posts} exact />
                <Route path='/signup' component={Signup} exact />
        </Switch>
    );
};

export default Routes;
