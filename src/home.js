import React from 'react';
import Basetemplate from './layouts/basicTemplate';

class Hometemplate extends React.Component {
    render() {
        return (
            <Basetemplate className="bannerContent">
                <div className="loginForm">
                    <div className="loginFormHeading">
                        <h1>Sign In</h1>
                    </div>
                    <div className="loginFormModule">
                        <form name="loginform" id="loginform"  method="post">
                            <div className="input-text-box-wp">
                                <div className="icon-login-user"></div>
                                <input placeholder="abc@xyz.com" type="text" name="log" id="user_login" className="input input-mid-box width-100" value=""/>
                                <div className="clearfix"></div>
                            </div>
                            <div className="input-text-box-wp">
                                <div className="icon-login-password"></div>
                                <input placeholder="Password" type="password" name="pwd" id="user_pass" className="input input-mid-box width-100" value=""/>
                                <div className="clearfix"></div>
                            </div>
                            <div className="forgetmenot">
                                <span className="defaultP"><input name="rememberme" type="checkbox" id="rememberme" value="forever" className="ez-hide"/>
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
export default Hometemplate;


