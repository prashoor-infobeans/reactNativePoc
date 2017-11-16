import React from 'react';

export default class LoginFormEntry extends React.Component {

    handleChange(e) {
        this.props.onChangeText(e.target.id, e.target.value);   
    }

    render() {
        return (
            <div>
                <div className="input-text-box-wp">
                    <div className="icon-login-user"></div>
                    <input placeholder="abc@xyz.com" type="text" name="log" id="user_login" className="input input-mid-box width-100" value={this.props.value.user_login} onChange={this.handleChange.bind(this)} />
                    <div className="clearfix"></div>
                </div>
                <div className="input-text-box-wp">
                    <div className="icon-login-password"></div>
                    <input placeholder="Password" type="password" name="pwd" id="user_pass" className="input input-mid-box width-100" value={this.props.value.user_pass} onChange={this.handleChange.bind(this)}/>
                    <div className="clearfix"></div>
                </div>
                <div className="forgetmenot">
                    <span className="defaultP"><input name="rememberme" type="checkbox" id="rememberme" value="true" className="ez-hide"/>
                        <label>Remember Me</label></span>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}