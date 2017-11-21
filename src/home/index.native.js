import React from 'react';
import {StyleSheet} from 'react-native';
import { Router, ActionConst, Scene } from 'react-native-router-flux';
import Loginmodule from '../Modules/login';
import Dashboardmodule from '../Modules/Dashboard';
import Constant from '../Constant';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
                <Scene key="root">
                    <Scene
                        key="loginScreen"
                        initial
                        hideNavBar
                        component={Loginmodule}
                        type={ActionConst.RESET}/>
                    <Scene
                        key="dashboard"
                        hideNavBar
                        component={Dashboardmodule}
                        type={ActionConst.RESET}/>
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
      backgroundColor: Constant.color.kThemeMainColor
    },
    navBarTitle:{
      color:'white'
    }
  });
  