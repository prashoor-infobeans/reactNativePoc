import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	TouchableHighlight,
	Image
} from 'react-native';

import Constant from '../../Constant';

export default class Navigation extends React.Component {
	// Navigation View
	_keyExtractor = (data, index) => index

    render() {
		const {title, click} = this.props.footerConfig || {title: "Footer", click: () => {}}	
		return (
            <View style={styles.flex}>
                {/* Menu List options */}
                <View style={styles.menuListContainer}>
                  <FlatList
                    data={this.props.menu}
                    renderItem={this._renderMenuRow.bind(this)}
                    keyExtractor={this._keyExtractor}
                    removeClippedSubviews={false}
                    />
                </View>
                {/* Logout button */}
                <TouchableHighlight
                  style={styles.footerContainer}
                  onPress={click}
                  underlayColor = '#F4F4F4'>
                  <View style={styles.flex}>
                    <View
                      style={styles.seperator}
                    />
                    <View style={styles.centerContent}>
                      {/*<Image style={styles.logoutIcon} source={require()}/>*/}
                      <View style={styles.row}>
                        <Text style={[styles.footerTitle, Constant.fontFamilyStyle]}>
                          {title}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
            </View>
        );
    }

    // NavigationDrawer Menu ListItem View
    _renderMenuRow({item: rowData, index: rowID}) {
      return (
        <TouchableHighlight underlayColor = { ( rowID == 0 ) ? '#F4F4F4' : 'transparent' } onPress={() => {
            if (typeof this.props._pressRow == "function") {
							this.props._pressRow(rowID, rowData);
						}
          }}>
          <View style={{backgroundColor: (parseInt(this.currentIndex) == parseInt(rowID)) ? '#F4F4F4' : 'transparent'}}>
            <View style={styles.centerContentNoFlex}>
              {/*<Image style={styles.rowIcon} source={source}/>*/}
              <View style={styles.row}>
                <Text style={[styles.rowText, Constant.fontFamilyStyle]}>
                  {rowData.title}
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      );
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
	 backgroundColor: Constant.color.kThemeMainColor,
	 paddingTop: 20,
	 paddingBottom: 10,
	 justifyContent: 'center',
 },
 profileTop: {
	 marginTop: 15,
	 marginLeft: 15,
	 marginRight: 15,
	 marginBottom: 15,
	 flexDirection: 'row',
	 alignItems: 'center',
 },
 userImage: {
	 flexDirection: 'row',
	 alignItems: 'center',
	 justifyContent:'center',
	 borderRadius: 20,
	 height: 40,
	 width: 40,
	 backgroundColor: Constant.color.kButtonColor
 },
 userInitials: {
	 color: 'white',
	 fontSize: 24,
 },
 userName: {
	 color: 'white',
	 fontSize: 18,
	 marginLeft: 10
 },
 seperator: {
	 height: 1,
	 backgroundColor: '#CCCCCCCC'
 },
 otherDetails: {
	 marginBottom: 5,
	 marginLeft: 15,
	 marginRight: 15,
	 color: 'white',
	 fontSize: 12
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
	 height: 50,
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
	 width: 22,
	 height: 22,
	 resizeMode: 'contain',
	 marginLeft: 18,
	 marginRight: 15
 },
 logoutIcon: {
	 width: 19,
	 height: 19,
	 resizeMode: 'contain',
	 marginLeft: 21,
	 marginRight: 15
 },
 footerContainer: {
	 height: 50,
	 backgroundColor: 'white'
 },
 footerTitle: {
	 color: 'black',
	 fontSize: 17,
	 fontWeight: '500'
 }
});
