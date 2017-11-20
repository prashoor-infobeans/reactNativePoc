import React from 'react';
import Basicheader from './basicTemplate/basicHeader';
import Basicsection from './basicTemplate/basicSection';
import Footermodule from '../Modules/Footer';

class Basetemplate extends React.Component {
    render() {
        return (
                <div className="baseContainer">
                    <Basicheader />
                    <Basicsection {...this.props}/>
                    <Footermodule />
                </div>
        )
    }
}
export default Basetemplate;


