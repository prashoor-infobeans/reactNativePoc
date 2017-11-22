import React from 'react';
import DeviceStorage from 'react-device-storage';
import Basicheader from './basicTemplate/basicHeader';
import Menu from './basicTemplate/menu/menu';
import Basicsection from './basicTemplate/basicSection';
import Footermodule from '../Modules/Footer';

class Basetemplate extends React.Component {
    constructor() {
        super();
        this.storage = new DeviceStorage({
            cookieFallback: true,
            cookie: {
                secure: true
            }
        }).localStorage();
        this.state = {
            menu: [],
            isLoggedIn: this.storage.read('isLoggedIn')
        };
    }
    render() {
        return (
                <div className="baseContainer">
                    {!this.state.isLoggedIn ?
                        <Basicheader />
                        :<Menu />
                    }
                    <Basicsection {...this.props}/>
                    {!this.state.isLoggedIn ?
                        <Footermodule />
                        :null
                    }
                </div>
        )
    }
}
export default Basetemplate;


