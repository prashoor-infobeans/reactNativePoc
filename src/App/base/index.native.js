import React from 'react';

import {View, ScrollView, Platform} from 'react-native';


export default class Base extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }
}