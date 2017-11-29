import React from 'react';

import Login from './index';

class Loginmodule extends React.Component {
    constructor() {
        super();
    }

    handleSubmit() {
        this.props.navigation.navigate("Drawer");
        return;
        if (this.refs.login) {
            this.refs.login.loginCall(response => {
                this.props.navigation.navigate("Drawer");
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


