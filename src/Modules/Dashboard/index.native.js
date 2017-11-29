import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {NavigationBar} from '../../Components/NavigationHelpers';
debugger
export default class Dashboardmodule extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar />
                <View style={styles.content}>
                    <Text>Dashboard</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        justifyContent: "center",
        alignItems: "center"
    }
})
