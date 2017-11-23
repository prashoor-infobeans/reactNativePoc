import React from 'react';

import {View, Platform} from 'react-native';


export default class Base extends React.Component {
    render() {
        return (
            <View style={{maxWidth: 75, margin: 0}}>
                <View style={{flexWrap: 'wrap', "justifyContent": "space-between"}}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}