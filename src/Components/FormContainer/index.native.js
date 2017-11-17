import React from 'react';
import {View, Text} from 'react-native';
import Constant from '../../Constant';

export default class FormContainer extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: Constant.color.kThemeMainColor}}>
                <View style={{width: 300, backgroundColor: 'white', flex: 0.5, borderRadius: 3, overflow: 'hidden'}}>
                    <View style={{width: '100%', backgroundColor: 'white', alignItems: 'center', flex: 1, paddingTop: 5, paddingBottom: 5}}>
                        <Text style={{color: 'darkgray', fontSize: 19}}>{this.props.title}</Text>
                    </View>
                    <View style={{flex: 3}}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}

FormContainer.defaultProps = {
    title: ""
}