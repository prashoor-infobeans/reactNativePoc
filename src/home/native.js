import React from 'react';
import {StyleSheet} from 'react-native';
import { Router, ActionConst, Scene } from 'react-native-router-flux';
import Loginmodule from '../Modules/login/login';
import Menu from '../layouts/basicTemplate/menu/menu';
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
                    {/* Drawer Scene*/}

                    <Menu key="drawer" hideNavBar open={false} >
                        {/* Extra Scene to wrap up all the drawer tab views*/}
                        <Scene key="wrapper">
                            <Scene
                                key="dashboard"
                                initial
                                headerTintColor="#fff"
                                backButtonTextStyle={{color: '#fff'}}
                                title="Dashboard"
                                back
                                backTitle="Back"
                                component={Dashboardmodule}
                                type={ActionConst.RESET}/>
                        </Scene>
                    </Menu>
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
  