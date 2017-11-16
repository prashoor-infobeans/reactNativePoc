import React from 'react';

class Basicheader extends React.Component{
    render() {
        return (
                <header className="bannerHeader" {...this.props}/>
        )
    }
}

export default Basicheader;