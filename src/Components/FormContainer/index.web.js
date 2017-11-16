import React from 'react';
import Basetemplate from '../../layouts/basicTemplate';

export default class FormContainer extends React.Component {
    render() {
        return (
            <Basetemplate className="bannerContent">
                <div className="loginForm">
                    <div className="loginFormHeading">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="loginFormModule">
                        {this.props.children}
                    </div>
                </div>
            </Basetemplate>
        );
    }
}

FormContainer.defaultProps = {
    title: ""
}