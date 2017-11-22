import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	DeviceEventEmitter,
	FlatList,
	Alert,
	Dimensions
} from 'react-native';

import Drawer from 'react-native-drawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import NavigationDrawer from '../../../Components/navigation';
import Constant from '../../../Constant';

const screenSize = Dimensions.get('window');

export default class Menu extends Component {

	currentIndex = '0';
	shownList = [];

	constructor(props) {
	    super(props);
		this.emitter = null;
	}

	componentDidMount() {
		Actions.refresh({key: 'dashboard'});
		this.emitter = DeviceEventEmitter.addListener('setSideMenuIndex', this.setSideMenuIndex.bind(this));
	}

	componentWillUnmount() {
		this.emitter.remove();
	}

	setSideMenuIndex(data){
		this.currentIndex = data.index;
		this.setState({});
	}

	menuItems = [
        {
            title: 'Dashboard',
            nav: 'dashboard'
        },
        {
            title: 'All posts',
            nav: 'posts'
        },
        {
            title: 'All pages',
            nav: 'pages'
        }
	];
	
	// NavigationDrawer Menu ListView
	render() {
		// const state = this.props.navigation.state.params;
		console.log(this.props);
        const drawerWidth = screenSize.width - 50;
        if (!this.sideMenu) {
          this.sideMenu = (
			  <NavigationDrawer menu={this.menuItems} _pressRow={this._pressRow.bind(this)} footerConfig={{
					style: "logout",
					title: 'Logout',
					click: this.handelClick.bind(this)
				}}/>
			);
        }

        return (
            <Drawer
                ref="navigation"
                open={false}
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
				{this.props.children}
            </Drawer>
		);
	}

	handelClick() {
		Actions.refresh({key: 'drawer', open:false});
		Alert.alert(
			'Logout',
			'Are you sure you want to logout?',
			[
				{
					text: "Ok",
					onPress: () => {
						
					}
				},
				{
					text: 'Cancel',
					onPress: () => {
				 		//console.log('Cancel Pressed!');
					}
				},
			]
		);
	}

	// listview data source and delegate
   	_pressRow(rowID, rowData) {
		Actions.refresh({key: 'drawer', open: false});
			// Updating the currentIndex
		var index = rowID;
		this.currentIndex = index;
		this.setState({});
	 	switch (rowData) {
			case "n":
				break;
			default:
		}
	}
}
