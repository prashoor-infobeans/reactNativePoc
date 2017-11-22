import React from 'react';
import { Redirect } from 'react-router-dom';
import DeviceStorage from 'react-device-storage';
import NavigationDrawer from '../../../Components/navigation';

export default class Menu extends React.Component{
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

    menuItems = [
        {
            title: 'Dashboard',
            icon: 'fa-home',
            link: "/dashboard",
        },
        {
            title: 'All posts',
            icon: 'fa-laptop',
            link: "/posts"
        },
        {
            title: 'All pages',
            icon: 'fa-list',
            link: "/pages"
        }
    ];

    render() {
        return(
            <NavigationDrawer menu={this.menuItems} footerConfig={{
                style: "logout",
                title: 'Logout',
                click: this.handelClick.bind(this)
            }}/>
        );
    }
}