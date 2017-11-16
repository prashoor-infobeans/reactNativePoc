import React from 'react';
import { Redirect } from 'react-router-dom';
import Basetemplate from '../../layouts/basicTemplate';
import DeviceStorage from 'react-device-storage';

class Loginmodule extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.handleSubmit.bind(this);
        this.storage = new DeviceStorage({
            cookieFallback: true,
            cookie: {
                secure: true
            }
        }).localStorage();

        this.state = {
            user_login: "", user_pass: "",
            isLoggedIn: this.storage.read('isLoggedIn')
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch(
            'http://rohit.corporatesitepoc.com/index.php/wp-json/dummyForm/update',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_login: this.state.user_login,
                    user_pass: this.state.user_pass
                })
            }).then(resp => {
            let copyRes = resp.clone();

            resp.json().then(rp => {
                let response = JSON.parse(rp);
                if (response.permission) {
                    this.setName(response.permission);
                    this.props.history.push('/demo')
                }
            }).catch(err => {

                copyRes.text().then(rp => {
                    console.log(rp);
                });

            });
        }).catch(err => {
            console.log(err);
        });
    }
    setName(premission) {
        this.storage.save('isLoggedIn', premission);
        this.setState({
          premission
        });
    }
    render() {
        
        return (
                <Basetemplate className="bannerContent">
                    <div className="loginForm">
                        <div className="loginFormHeading">
                            <h1>Sign In</h1>
                        </div>
                        <div className="loginFormModule">
                            <form name="loginform" id="loginform"  method="post" onSubmit={this.onSubmit}>
                                <div className="input-text-box-wp">
                                    <div className="icon-login-user"></div>
                                    <input placeholder="abc@xyz.com" type="text" name="log" id="user_login" className="input input-mid-box width-100" value={this.state.user_login} onChange={this.handleChange.bind(this)} />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="input-text-box-wp">
                                    <div className="icon-login-password"></div>
                                    <input placeholder="Password" type="password" name="pwd" id="user_pass" className="input input-mid-box width-100" value={this.state.user_pass} onChange={this.handleChange.bind(this)}/>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="forgetmenot">
                                    <span className="defaultP"><input name="rememberme" type="checkbox" id="rememberme" value="true" className="ez-hide"/>
                                        <label>Remember Me</label></span>
                                </div>
                                <div className="clearfix"></div>
                                <p className="submit">
                                    <input type="submit" name="wp-submit" className="btn btn-primary btn-large-custom margin-zero width-100" id="wp-submit" value="Login"/>
                                </p>
                            </form>
                        </div>
                    </div>
                </Basetemplate>
                )
    }
}
export default Loginmodule;


