import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationBar} from '../../Components/NavigationBar';
import { Actions } from 'react-native-router-flux';
export default class Dashboardmodule extends React.Component {

    componentWillMount() {
        console.log(this.props)
        Actions.refresh({key: 'drawer', open: true});
    }

    render() {
        return (
            <View style={styles.container}>
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        justifyContent: "center",
        alignItems: "center"
    }
})
