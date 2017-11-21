import React from 'react';
import { Redirect } from 'react-router-dom';
import DeviceStorage from 'react-device-storage';

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.storage = new DeviceStorage({
            cookieFallback: true,
            cookie: {
                secure: true
            }
        }).localStorage();
        this.state = {
            isLoggedIn: this.storage.read('isLoggedIn')
        };
        console.log(this);
    }
    handelClick(){
        this.storage.delete('isLoggedIn');
        window.location.reload();
    }
    render(){
        return(
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="/dashboard"><i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">Dashboard</span>
                        </a>  
                    </li> 

                    <li className="has-subnav">
                        <a href="/posts"><i className="fa fa-laptop fa-2x"></i>
                            <span className="nav-text">All posts</span>
                        </a>
                    </li> 

                    <li className="has-subnav">
                        <a href="/pages"><i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">All pages</span>
                        </a>
                    </li> 
                </ul>

                <ul className="logout">
                    <li>
                        <a href="#" onClick={this.handelClick.bind(this)}>
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>  
                </ul>
            </nav>
            );
    }
}
export default Navigation;