import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from '../../Components/NavigationBar';
export default class Dashboardmodule extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    statusBar={{style:'light-content'}}
                    title={'Dashboard'}
                    rightButton={null}
                    leftButton={null}/>
                {/*{imageSource: imageSource, handler: () => this._action()}*/}
                <View style={styles.content}>
                    <Text>Dashboard</Text>
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
        justifyContent: "center",
        alignItems: "center"
    }
})
