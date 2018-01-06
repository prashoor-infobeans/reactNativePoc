import React from 'react';
import DeviceStorage from 'react-device-storage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Basetemplate from '../layouts/basicTemplate';
import Loginmodule from '../Modules/login/login';
import Dashboardmodule from '../Modules/Dashboard';
import Postsmodule from '../Post/post';

import Privacypolicypage from '../Modules/Pages/privacy_policy';
//import Post from '../Modules/Posts/post';

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
                    <Route exact path='/' render={() => ((this.state.isLoggedIn) ? (<Redirect to='/dashboard' />): (<Loginmodule />))}/>
                    <Route exact path='/dashboard' render={() => (!(this.state.isLoggedIn) ? (<Redirect to='/' />) : (<Dashboardmodule />))} />       
                    <Route exact path='/posts' render={() => (!(this.state.isLoggedIn) ? (<Redirect to='/' />) : (<Postsmodule type="list"/>))} />
                    <Route path='/posts/:name' render={(props) => (!(this.state.isLoggedIn) ? (<Redirect to='/' />) : (<Postsmodule type="data" {...props}/>))} />
                            
                    <Route exact path='/privacy-policy' component={Privacypolicypage}/>
                </Switch>
             </Router> 
        )
    }
}
