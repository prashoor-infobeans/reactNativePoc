import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import NavigationBar from '../../Components/Nav/NavigationBar';
const menuImageSource = require('../../images/menu-icon/menu-icon.png');

export default class Dashboardmodule extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar 
                    title={{title: "Dashboard"}}
                    leftButton={{imageSource: menuImageSource, handler: () => this.props.navigation.navigate('DrawerToggle')}} />
                <View style={styles.content}>
                    <Text>Content</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
