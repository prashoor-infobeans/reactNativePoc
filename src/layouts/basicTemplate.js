import React from 'react';
import Basicheader from './basicTemplate/basicHeader';
import Basicsection from './basicTemplate/basicSection';
import Basicfooter from './basicTemplate/basicFooter';

class Basetemplate extends React.Component {
    render() {
        return (
                <div>
                    <Basicheader/>
                    <Basicsection {...this.props}/>
                    <Basicfooter/>
                </div>
        )
    }
}
export default Basetemplate;


