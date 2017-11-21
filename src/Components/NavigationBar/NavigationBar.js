import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  StatusBar,
  Text,
  View,
  Platform,
  Image,
  StyleSheet
} from 'react-native';

import Constant from '../../Constant';
import NavbarButton from './NavbarButton';

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;

const ButtonShape = {
  title: PropTypes.string,
  imageSource: Image.propTypes.source,
  style: View.propTypes.style,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
};

const TitleShape = {
  title: PropTypes.string.isRequired,
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default']),
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
  hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none']),
  showAnimation: PropTypes.oneOf(['fade', 'slide', 'none']),
};

function getButtonElement(data, style, hasNotif = false) {

  return (
    <View style={styles.navBarButtonContainer}>
      {(!data || data.props) ? data : (
        <NavbarButton
          title={data.title}
          showBadge={hasNotif}
          style={[data.style, style]}
          imageSource={data.imageSource}
          tintColor={data.tintColor}
          handler={data.handler}
        />
      )}
    </View>
  );
}


function subTitle(subTitle) {
  if (subTitle) {
    return (
      <Text style={[styles.navBarSubTitleText, Constant.fontFamilyStyle]}>
      {subTitle}
      </Text>
    );
  }
}

function getTitleElement(data) {
  if (!data || data.props) {
    return <View style={styles.customTitle}>{data}</View>;
  }

  const colorStyle = data.tintColor ? { color: data.tintColor } : null;

  return (
    <View style={styles.navBarTitleContainer}>
      <Text style={[styles.navBarTitleText, data.style, colorStyle, Constant.fontFamilyStyle]}>
        {data.title}
      </Text>
      {subTitle(data.subTitle)}
    </View>
  );
}

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    tintColor: PropTypes.string,
    statusBar: PropTypes.shape(StatusBarShape),
    leftButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
      PropTypes.oneOf([null]),
    ]),
    rightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
      PropTypes.oneOf([null]),
    ]),
    secondRightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
      PropTypes.oneOf([null]),
    ]),
    title: PropTypes.oneOfType([
      PropTypes.shape(TitleShape),
      PropTypes.element,
      PropTypes.oneOf([null]),
    ]),
    containerStyle: View.propTypes.style,
  };

  static defaultProps = {
    style: {},
    tintColor: '',
    leftButton: null,
    rightButton: null,
    secondRightButton:null,
    title: null,
    statusBar: {
      style: 'default',
      hidden: false,
      hideAnimation: 'slide',
      showAnimation: 'slide',
    },
    containerStyle: {},
  };

  componentDidMount() {
    this.customizeStatusBar();
  }

  componentWillReceiveProps() {
    this.customizeStatusBar();
  }

  customizeStatusBar() {
    const { statusBar } = this.props;
    if (Platform.OS === 'ios') {
      if (statusBar.style) {
        StatusBar.setBarStyle(statusBar.style);
      }

      const animation = statusBar.hidden ?
        statusBar.hideAnimation : statusBar.showAnimation;

      StatusBar.showHideTransition = animation;
      StatusBar.hidden = statusBar.hidden;
    }
  }

  render() {
    const {
      containerStyle,
      tintColor,
      title,
      leftButton,
      rightButton,
      secondRightButton,
      rightButtonShowBadge,
      style,
    } = this.props;
    const customTintColor = tintColor ? { backgroundColor: tintColor } : null;

    const customStatusBarTintColor = this.props.statusBar.tintColor ?
      { backgroundColor: this.props.statusBar.tintColor } : null;

    let statusBar = null;

    if (Platform.OS === 'ios') {
      statusBar = !this.props.statusBar.hidden ?
        <View style={[styles.statusBar, customStatusBarTintColor]} /> : null;
    }

    return (
      <View style={[styles.navBarContainer, containerStyle, customTintColor]}>
        {statusBar}
        <View style={[styles.navBar, style]}>
          {getTitleElement(title)}
          {getButtonElement(leftButton, {marginLeft:0})}
          <View style={styles.rightButtonsView}>
          {getButtonElement(secondRightButton, { marginRight: 3 })}
          {getButtonElement(rightButton, { marginRight: 8 }, ( (typeof rightButtonShowBadge == "undefined") ? false : rightButtonShowBadge) )}
          </View>
        </View>
        <View style={styles.divider}></View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    navBarContainer: {
      backgroundColor: Constant.color.kThemeMainColor,
    },
    statusBar: {
      height: STATUS_BAR_HEIGHT,
    },
    rightButtonsView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    navBar: {
      height: NAV_BAR_HEIGHT,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    customTitle: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 7,
      alignItems: 'center',
    },
    navBarButtonContainer: {
      width: 44,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    navBarTitleContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navBarTitleText: {
      fontSize: 17,
      letterSpacing: 0.5,
      color: 'white',
      fontWeight: '500',
    },
    navBarSubTitleText: {
      fontSize: 10,
      letterSpacing: 0.5,
      color: 'white',
      fontWeight: '500',
    },

    badgeText: {
      color: 'white',
      fontSize: 6,
      fontWeight: '700',
      backgroundColor: 'transparent',
      marginTop: -1,
      textAlign: 'center'
    }
});
