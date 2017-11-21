import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Drawer from 'react-native-drawer';
import SideMenu from './sideMenu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
const screenSize = Dimensions.get('window');

class NavigationDrawer extends React.Component {
    // Navigation Drawer View
    sideMenu = null

    render(){
        const state = this.props.navigationState;
        // To access child scenes or screeens for rendering
        const children = state.children;
        const drawerWidth = screenSize.width - 50;

        if (!this.sideMenu) {
          this.sideMenu = ( <SideMenu ref="menu"/>);
        }
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="overlay"
                content={this.sideMenu}
                tapToClose={true}
                openDrawerOffset={screenSize.width - drawerWidth}
                negotiatePan={true}
                panCloseMask={screenSize.width - drawerWidth + 44}
                styles={{
                mainOverlay: { backgroundColor: 'black', opacity: 0}
              }}
              tweenHandler={(ratio) => ({
                mainOverlay: { opacity: ratio / 2}
              })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

export default NavigationDrawer;
