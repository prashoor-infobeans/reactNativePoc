import React from 'react';
import { Redirect } from 'react-router-dom';
import Basetemplate from '../../layouts/basicTemplate';
import DeviceStorage from 'react-device-storage';
import Platform from '../../Platform';
import Login from './index';

class Loginmodule extends React.Component {
    constructor() {
        super();
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

    handleSubmit() {
        if (this.refs.login) {
            this.refs.login.loginCall(response => {
                this.setName(response.permission);
                window.location.reload();
            }, err => {
                console.log(err);
            });
        }
    }

    setName(premission) {
        this.storage.save('isLoggedIn', premission);
        this.setState({
          premission
        });
    }

    render() {
        return (
            <Login ref="login" handleSubmit={this.handleSubmit.bind(this)} submitText={'Login'} />
        )
    }
}
export default Loginmodule;


