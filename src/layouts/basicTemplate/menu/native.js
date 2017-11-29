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
        const drawerWidth = screenSize.width - 50;
        return (
			<NavigationDrawer menu={this.menuItems} _pressRow={this._pressRow.bind(this)} footerConfig={{
				style: "logout",
				title: 'Logout',
				click: this.handelClick.bind(this)
			}}/>
		);
	}

	handelClick() {
		this.props.navigation.navigate("DrawerToggle");
		Alert.alert(
			'Logout',
			'Are you sure you want to logout?',
			[
				{
					text: "Ok",
					onPress: () => {}
				},
				{
					text: 'Cancel',
					onPress: () => {}
				},
			]
		);
	}

	// listview data source and delegate
   	_pressRow(rowID, rowData) {
		// Updating the currentIndex
		var index = rowID;
		this.currentIndex = index;
		this.setState({});
		switch (rowData.nav) {
			case "dashboard":
				this.props.navigation.navigate("dashboard");
				break;
			case "pages":
			case "posts":
			default:
				this.props.navigation.navigate("DrawerToggle");
		}
	}
}
