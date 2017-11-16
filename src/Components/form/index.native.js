import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Form extends React.Component {
    render() {
        return (
            <View style={{padding: 10, paddingLeft: 30, paddingRight: 30, backgroundColor: '#fff', flex: 1}}>
                {this.props.children}
                <TouchableHighlight style={{marginTop: 20}} onPress={this.props.onSubmit}>
                    <View style={{backgroundColor: '#13a495', borderRadius: 2, height: 38, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>{this.props.submitText}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

Form.defaultProps = {
    onSubmit: () => {},
    submitText: "Submit"
}