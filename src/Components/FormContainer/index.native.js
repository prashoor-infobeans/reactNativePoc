import React from 'react';
import {} from 'react-native';

import Form from '../../Components/form';

class Loginmodule extends React.Component {
    render() {
        return (
            <Form>
                <View style={{borderBottomWidth: 1, paddingBottom: 5}}>
                    <TextInput style={{height: 35}} autoCapitalize='none' autoCorrect={false} placeholder="Name" onChangeText={this.update.bind(this, "uname")}/>
                </View>
                <View style={{borderBottomWidth: 1, paddingBottom: 5}}>
                    <TextInput secureTextEntry={true} style={{height: 35}} placeholder="Password" onChangeText={this.update.bind(this, "password")}/>
                </View>
            </Form>
        )
    }
}