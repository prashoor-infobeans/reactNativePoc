import React from 'react';
import {StyleSheet} from 'react-native';
// import { Router, ActionConst, Scene } from 'react-native-router-flux';
import Loginmodule from '../Modules/login/login';
import Menu from '../layouts/basicTemplate/menu/menu';
import Dashboardmodule from '../Modules/Dashboard';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Constant from '../Constant';

const Drawer = DrawerNavigator(
    {
        dashboard: {
            screen: Dashboardmodule,
        }
    },
    {
        contentComponent: Menu
    }
);

const Home = StackNavigator(
    {
        loginScreen: {
            screen: Loginmodule
        },
        Drawer: {
            screen: Drawer
        }
    },
    {
        headerMode: 'none'
    }
);

export default Home;

const styles = StyleSheet.create({
    navBar: {
      backgroundColor: Constant.color.kThemeMainColor
    },
    navBarTitle:{
      color:'white'
    }
});
  