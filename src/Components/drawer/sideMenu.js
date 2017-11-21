import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	DeviceEventEmitter,
	TouchableHighlight,
	ListView,
	Alert,
	Image
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Constant from 'Test1/constants';

export default class SideMenu extends Component {

	currentIndex = '0';
	shownList = [];
	menuListDatasource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

	constructor(props) {
	    super(props);
		this.emitter = null;
		this.userDetail = UserDetails.getUserDetails();

		if (this.userDetail.user_type == UserTypes.kStaff) {
			this.shownList = Constant.navigationDrawerConstants.kNavigationDrawerStaffListItems;
		}
		else {
			this.shownList = Constant.navigationDrawerConstants.kNavigationDrawerAssessorListItems;
		}
		//Intializing ListView and DataSource for Navigation Drawer Menu List
	    this.state = {
			dataSource: this.menuListDatasource.cloneWithRows(this.shownList)
		};
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
	}

	// NavigationDrawer Menu ListView
	render() {
		return (
			<View style={styles.flex}>
				{/* Menu header */}
				<View style={styles.profileContainer}>
					<View style={styles.profileTop}>
						<View style={styles.userImage}>
							<Text style={[styles.userInitials, Constant.fontFamilyStyle]}>{ (this.state.displayName) ? this.state.displayName.substr(0,1) : ""}</Text>
						</View>
						<View style={{flexDirection: 'column'}}>
							<Text style={[styles.userName, Constant.fontFamilyStyle]}>{this.state.displayName}</Text>
							<Text style={[styles.userName, Constant.fontFamilyStyle, {color: '#7EBFAB', marginTop: 5, fontWeight: '600', fontSize: DeviceInfo.isTablet() ? 15 : 14}]}>{(this.userDetail.user_type == UserTypes.kStaff) ? "Staff" : "Assessor" }</Text>
						</View>
					</View>
					<Text style={[styles.otherDetails, Constant.fontFamilyStyle]}>{this.state.email}</Text>
				</View>
				{/* Menu List options */}
				<View style={styles.menuListContainer}>
					<ListView
						dataSource={this.state.dataSource}
						enableEmptySections={true}
						renderRow={ this._renderMenuRow.bind(this) }
						/>
				</View>
				{/* Logout button */}
				<TouchableHighlight
					style={styles.footerContainer}
					onPress={this._footerPressed.bind(this)}
					underlayColor = '#F4F4F4'>
					<View style={styles.flex}>
						<View
							style={styles.seperator}
						/>
						<View style={styles.centerContent}>
							<Image style={styles.logoutIcon} source={require('IAS/images/drawer-menu-icons/logout-icon/logout-icon.png')}/>
							<View style={styles.row}>
								<Text style={[styles.footerTitle, Constant.fontFamilyStyle]}>
									{Constant.dashboardDrawer.kDrawerLogoutTitle}
								</Text>
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
	// NavigationDrawer Menu ListItem View
	_renderMenuRow(rowData: string, sectionID: number, rowID: number) {
		return (
			<TouchableHighlight underlayColor = { ( rowID == 0 ) ? '#F4F4F4' : 'transparent' } onPress={() => {
					this._pressRow(rowData);
				}}>
				<View style={{backgroundColor: (parseInt(this.currentIndex) == parseInt(rowID)) ? '#F4F4F4' : 'transparent'}}>
					<View style={styles.centerContentNoFlex}>
						{/*<Image style={styles.rowIcon} source={source}/>*/}
						<View style={styles.row}>
							<Text style={[styles.rowText, Constant.fontFamilyStyle]}>
								{rowData}
							</Text>
						</View>
				  </View>
				</View>
			</TouchableHighlight>
		);
	}

	_footerPressed() {
		Actions.refresh({key: 'drawer', open:false});
		Alert.alert(
			Constant.logoutConstants.kLogoutAlertTitle,
			Constant.logoutConstants.kLogoutConfirmationMessage,
			[
				 {text:Constant.logoutConstants.kLogoutAlertOK, onPress: () => {
					 
				 }},
				 {text:Constant.logoutConstants.kLogoutAlertCancel, onPress: () => {
				 	//console.log('Cancel Pressed!');
				 }},
			]
		);
	}

	setIndex(index) {
		this.currentIndex = index;
		this.setState({
			dataSource: this.menuListDatasource.cloneWithRows(this.shownList)
		});
	}

	// listview data source and delegate
   	_pressRow(rowData) {
		Actions.refresh({key: 'drawer', open:false});
			// Updating the currentIndex
		var index = this.shownList.indexOf(rowData);
		this.currentIndex = index;
		this.setState({
			dataSource: this.menuListDatasource.cloneWithRows(this.shownList)
		});
	 	switch (rowData) {
			case Constant.strings.kDashboard:
				Actions.dashboardScreen();
				break;
			case Constant.strings.kApplications:
				Actions.applicationNav();
				this.setPrefs('applicationsStore');
				break;
			case Constant.strings.kIASDocuments:
				Actions.iasDocumentsScreen();
				break;
			case Constant.strings.kAssessor:
				Actions.assessorsNav();
				break;
			case Constant.strings.kCertificates:
				if (ApplicationStore['certificatesStore'].dataSearched) {
					ApplicationStore['certificatesStore'].dataSearched = false;
					ApplicationStore['certificatesStore'].resetList();
				}
				Actions.certificatesNav();
				break;
			case Constant.strings.kInvoices:
				Actions.invoiceNav();
				break;
			case Constant.strings.kQuotationRequests:
				this.setPrefs('quotationStore');
				Actions.quotationNav();
				break;
			case Constant.strings.kCompanies:
				this.setPrefs('companyStore');
				Actions.companyNav();
				break;
			case Constant.strings.kMyProfile:
				Actions.myProfile();
				break;
			case Constant.strings.kContacts:
				this.setPrefs('contactStore');
				Actions.contactNav();
				break;
			case Constant.strings.kPaymentListing:
				Actions.paymentNav();
				break;
			case Constant.strings.kAssessments:
				this.setPrefs('assessmentsStore');
				Actions.assessmentsNav();
				break;
			default:
		}
	}

	setPrefs(key) {
      if (ApplicationStore[key].filterWasSet) {
      	ApplicationStore[key].filterSet = false;
        ApplicationStore[key].resetFilter();
        ApplicationStore[key].resetList();
      }
    }
}

const styles = StyleSheet.create({
	container: {
	 flex: 1,
	 justifyContent: 'center',
	 alignItems: 'center',
	 backgroundColor: 'white'
 },
 profileContainer: {
	 backgroundColor: Constant.dashboardDrawer.kProfileBackgroundColor,
	 paddingTop: DeviceInfo.isTablet() ? 18 : 20,
	 paddingBottom: DeviceInfo.isTablet() ? 8 : 10,
	 justifyContent: 'center',
 },
 profileTop: {
	 marginTop: DeviceInfo.isTablet() ? 10 : 15,
	 marginLeft: DeviceInfo.isTablet() ? 10 : 15,
	 marginRight: DeviceInfo.isTablet() ? 10 : 15,
	 marginBottom: DeviceInfo.isTablet() ? 7 : 15,
	 flexDirection: 'row',
	 alignItems: 'center',
 },
 userImage: {
	 flexDirection: 'row',
	 alignItems: 'center',
	 justifyContent:'center',
	 borderRadius: DeviceInfo.isTablet() ? 19 : 20,
	 height: DeviceInfo.isTablet() ? 38 : 40,
	 width: DeviceInfo.isTablet() ? 38 : 40,
	 backgroundColor: Constant.dashboardDrawer.kProfileImageButtonColor
 },
 userInitials: {
	 color: 'white',
	 fontSize: 24,
 },
 userName: {
	 color: 'white',
	 fontSize: DeviceInfo.isTablet() ? 14 : 18,
	 marginLeft: 10
 },
 seperator: {
	 height: 1,
	 backgroundColor: '#CCCCCCCC'
 },
 otherDetails: {
	 marginBottom: DeviceInfo.isTablet() ? 4 : 5,
	 marginLeft: DeviceInfo.isTablet() ? 11 : 15,
	 marginRight: DeviceInfo.isTablet() ? 11 : 15,
	 color: 'white',
	 fontSize: DeviceInfo.isTablet() ? 10 : 12
 },
 menuListContainer: {
	 flex: 1,
	 backgroundColor: 'white'
 },
 flex: {
	 flex: 1
 },
 row:{
	 flex: 1,
	 height: DeviceInfo.isTablet() ? 45 : 50,
	 justifyContent:'center'
 },
 rowText: {
	 color: '#333333',
	 fontSize: 16,
	 fontWeight: '500'
 },
 centerContent: {
	 flex: 1,
	 flexDirection: 'row',
	 justifyContent: 'center',
	 alignItems: 'center',
 },
 centerContentNoFlex: {
	 flexDirection: 'row',
	 justifyContent: 'center',
	 alignItems: 'center'
 },
 rowIcon: {
	 width: DeviceInfo.isTablet() ? 20 : 22,
	 height: DeviceInfo.isTablet() ? 20 : 22,
	 resizeMode: 'contain',
	 marginLeft: 18,
	 marginRight: 15
 },
 logoutIcon: {
	 width: DeviceInfo.isTablet() ? 17 : 19,
	 height: DeviceInfo.isTablet() ? 17 : 19,
	 resizeMode: 'contain',
	 marginLeft: 21,
	 marginRight: 15
 },
 footerContainer: {
	 height: DeviceInfo.isTablet() ? 45 : 50,
	 backgroundColor: 'white'
 },
 footerTitle: {
	 color: 'black',
	 fontSize: 17,
	 fontWeight: '500'
 }
});
