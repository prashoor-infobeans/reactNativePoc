import React from 'react';

import { Actions } from 'react-native-router-flux';
import Login from './index';

class Loginmodule extends React.Component {
    constructor() {
        super();
    }

    handleSubmit() {
        if (this.refs.login) {
            this.refs.login.loginCall(response => {
                Actions.dashboard();
            }, err => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <Login ref="login" handleSubmit={this.handleSubmit.bind(this)} submitText={'Login'} />
        )
    }
}
export default Loginmodule;


