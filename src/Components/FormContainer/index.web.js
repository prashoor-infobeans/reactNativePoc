import React from 'react';
import Basetemplate from '../../layouts/basicTemplate';
class Loginmodule extends React.Component {
    render() {
        return (
            <Basetemplate className="bannerContent">
                <div className="loginForm">
                    <div className="loginFormHeading">
                        <h1>Sign In</h1>
                    </div>
                    <div className="loginFormModule">
                        {this.props.children}
                    </div>
                </div>
            </Basetemplate>
        );
    }
}
export default Loginmodule;