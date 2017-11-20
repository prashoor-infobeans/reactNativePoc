import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DeviceStorage from 'react-device-storage';

import Basicfooter from '../../layouts/basicTemplate/basicFooter';

export default class Footermodule extends React.Component
{
    constructor() {
        super();
        this.state = {
            menu: []
        };
    }
    componentDidMount() {
        let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/menuroutes/footermenu";
        fetch(dataURL)
          .then(res => res.json())
          .then(res => {
            this.setState({
              menu: res
            })
        })
    }
    render(){
        let menu = this.state.menu.map((menu_item, index) => {
            var pageUrl = '/'+(menu_item.title).replace(/\s+/g, '-').toLowerCase();
            return (
                <li key={index} id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                    <Link to={{
                        pathname: pageUrl,
                        state: { id: menu_item.object_id }
                    }}>{menu_item.title}</Link>
                </li>
            )
        });
        return (
            <Basicfooter>
                <div className="grid col-940">
                    <span className="pull-left">
                        <ul id="menu-footer-menu" className="footer-menu">
                            {menu}
                        </ul>
                    </span> 
                </div>
            </Basicfooter>
        );
    }
}