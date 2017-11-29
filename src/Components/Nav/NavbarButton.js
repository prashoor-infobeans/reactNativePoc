import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';

export default function NavbarButton(props) {
  const { imageSource, style, tintColor, title, handler, disabled, showBadge } = props;

  /**
    * Badge Showed, but text needs to be implemented
    */

  function shwBadge() {
    if (showBadge) {
      return (
        <View style={styles.badge}/>
      );
    }
  }

  return (
    <TouchableOpacity
      style={styles.navBarButton}
      onPress={handler}
      disabled={disabled}>
      <View style={style}>
          <Image resizeMode='contain' source={imageSource}/>
      </View>
      {shwBadge()}
    </TouchableOpacity>
  );
}

NavbarButton.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  tintColor: PropTypes.string,
  title: PropTypes.string,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
};

NavbarButton.defaultProps = {
  style: {},
  title: '',
  tintColor: '#0076FF',
  disabled: false,
  handler: () => ({}),
};

var styles = StyleSheet.create({
      navBarButtonText: {
        fontSize: 17,
        letterSpacing: 0.5,
        color: '#333',
        fontWeight: '500',
      },
      badge : {
        backgroundColor: "#EB5757",
        height: 12,
        minWidth: 12,
        paddingRight: 3,
        borderRadius: 6,
        position: 'absolute',
        right: 14,
        top: 7,
        zIndex: 110,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      navBarButton: {
        height:44,
        width:44,
        alignItems:'center',
        justifyContent:'center'
      }
});
