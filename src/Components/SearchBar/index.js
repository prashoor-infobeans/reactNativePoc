import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
import Constant from '../../Constant';
var dismissKeyboard = require('IAS/dismissKeyboard');
import DeviceInfo from 'IAS/DeviceInfo';
import Touchable from 'IAS/views/components/Touchable';
/**
  * AndroidSearchBar <- Component
  *
  * Purpose :
  * - For generating a search field
  */

const searchStyle = StyleSheet.create({
  parent: {
    height: 42,
    paddingRight: 7,
    paddingLeft: 7,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor:'white'
  },
  baseFlex: {
    borderRadius: 5,
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    height: '100%',
    flexDirection:"row",
  },
  clearButton: {
    height: '100%',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5
  },
  inputStyle: {
    flex: 9,
    height: 38,
    marginLeft: 28,
    fontSize: Constant.dataCell.kSubTitleTextSize,
    color: 'black',
    backgroundColor: 'transparent',
    fontFamily: Constant.fontFamilyStyle.fontFamily
  },
  placeholder: {
    color: 'rgba(85, 85, 85, 0.75)',
    fontFamily: Constant.fontFamilyStyle.fontFamily,
    marginLeft: Platform.OS=="ios" ? 8:12
  },
  imageParent: {
    height: '100%',
    paddingLeft: 9,
    paddingRight: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorStyle: {
    position: 'absolute',
    color: 'red',
    fontSize: 10,
    height: 12,
    bottom: 3,
    right: 2
  },
  imageStyle: {
    width: 13,
    height: 13
  },
  cancel:
  {
    color: Constant.color.kThemeMainColor,
    fontFamily: Constant.fontFamilyStyle.fontFamily,
    fontSize:DeviceInfo.isTablet() ? 12 : (screenWidth>320) ? 15: 13
  }
});

export default class androidSearchBar extends Component {
  state = {
    editing: false,
    value: "",
    barWidth: 0,
    searchWidth: 0,
    isFocused:false
  }

  componentDidMount() {
    this.setState({isFocused:this.refs.inputField.isFocused()});
  }

  constructor(props) {
    super(props);
  }

  render (){
    var design = [searchStyle.imageParent];
    var showCancelClear = true;
    var borderRadius = false;
    if (typeof this.props.showCancelClearButton !== "undefined") {
      showCancelClear = this.props.showCancelClearButton;
    }

    if(typeof this.props.borderRadius !== "undefined"){
      borderRadius = this.props.borderRadius;
    }


    if (this.state.editing || this.state.value.length > 0) {
      design.push({
        left: 0,
        position: 'absolute'
      });
    }
    else {
      design.push({
        left: (this.state.barWidth - this.state.searchWidth) / 2,
        position: 'absolute'
      });
    }

    return (
      <View >
      <View style={[searchStyle.parent, {backgroundColor: this.props.barTintColor,flexDirection:'row'}]}>
        <View style={[searchStyle.baseFlex, {backgroundColor: this.props.textFieldBackgroundColor, borderRadius: (borderRadius)? 20 : 5, borderColor: (borderRadius)?'#CCCCCC': null, borderWidth: (borderRadius)? 1 : null}]} onLayout={(event) => this.onLayout(event)}>
          <View style={design} onLayout={(event) => this.searchLayout(event)}>
            <Image resizeMode="contain" style={searchStyle.imageStyle} source={require('IAS/images/search/search.png')}/>
            <Text  style={[searchStyle.placeholder,{fontSize:this.props.placeholder.length > 20 ? 12 : 15 }]}>{ (this.state.value.length > 0) ? "" : this.props.placeholder }</Text>
          </View>
          <View style={searchStyle.inputView}>
            <TextInput
                ref="inputField"
                autoCapitalize='none'
                allowFontScaling={false}
                clearButtonMode='always'
                autoCorrect={false}
                style={searchStyle.inputStyle}
                onChangeText={ (text) => {
                    this.setState({
                      value: text
                    })

                    if (this.props.onChangeText) {
                      this.props.onChangeText(text)
                    }

                    if (this.props.onClearField && text.length == 0) {
                      this.props.onClearField()
                    }
                  }
                }
                value={this.state.value}
                enablesReturnKeyAutomatically={true}
                returnKeyType="search"
                underlineColorAndroid="transparent"
                onFocus={this.focus.bind(this)}
                onBlur={this.blur.bind(this)}
                onSubmitEditing={() => this.props.onSearchButtonPress(this.state.value)}
                />
              {this.showClear()}
          </View>
        </View>
        {
          (showCancelClear) ? this.showCancelOnIos() : null
        }
      </View>
    </View>
    );
  }

   cancelPressed()
   {
     dismissKeyboard();
     this.blur();
     this.clearField();
   }

  onLayout(event) {
    this.setState({ barWidth: event.nativeEvent.layout.width});
  }

  searchLayout(event) {
    this.setState({ searchWidth: event.nativeEvent.layout.width});
  }

  focus() {
    this.setState({
      editing: true
    })

    if (this.props.onFocus)
    {
      this.props.onFocus()
    }
  }

  blur() {
    this.setState({
      editing: false
    })
    if (this.refs.inputField)
    {
        this.refs.inputField.blur();
    }
    if (this.props.onBlur)
    {
      this.props.onBlur()
    }
  }

  clearField() {
    this.refs.inputField.clear();
    this.setState({value:""});
    if (this.props.onClearField) {
      this.props.onClearField()
    }
  }

  showClear(){
    if (Platform.OS === 'android') {
      if (this.state.value.length>0) {
        return (
          <Touchable onPress={() => {this.clearField()}} style={searchStyle.clearButton}>
            <Image source={require('IAS/images/cancel/cancel.png')} style={{width: 18, height: 18}} resizeMode="contain"/>
          </Touchable>
        );
      }
    }
  }

  showCancelOnIos() {
    if (Platform.OS=="ios") {
        if (this.state.editing) {
            return (
              <Touchable onPress={() => {this.cancelPressed()}} style={{flex:1,justifyContent:"center",alignItems:"center",marginLeft:8}}>
                <Text style={searchStyle.cancel}>Cancel</Text>
              </Touchable>
            );
        }
    }
    return null;
  }
}
