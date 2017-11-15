import React from 'react';

export default class Base extends React.Component {
    render() {
        return (
            <div className="inner">
                <div className="flex flex-2">
                    {this.props.children}
                </div>
            </div>
        );
    }
}