import React from 'react';
import DeviceStorage from 'react-device-storage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Basetemplate from './layouts/basicTemplate';
import Loginmodule from './Modules/login';

export default class Home extends React.Component {
    constructor() {
        super();
        //this.onSubmit = this.handleSubmit.bind(this);
        this.storage = new DeviceStorage({
            cookieFallback: true,
            cookie: {
                secure: true
            }
        }).localStorage();

        this.state = {
            isLoggedIn: this.storage.read('isLoggedIn')
        };
    }
    render() {
        return (
            <Router>
                <Switch>
                   <Route exact path='/' component={Loginmodule} />
                   <Route exact path='/demo' render={() => (!(this.state.isLoggedIn) ? (<Redirect to='/' />) : (<Basetemplate />))} />
                </Switch>
             </Router> 
        )
    }
}
