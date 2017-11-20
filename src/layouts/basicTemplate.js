import React from 'react';
import DeviceStorage from 'react-device-storage';
import Basicheader from './basicTemplate/basicHeader';
import Navigation from './basicTemplate/navigationModule';
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
                        :<Navigation/>
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


