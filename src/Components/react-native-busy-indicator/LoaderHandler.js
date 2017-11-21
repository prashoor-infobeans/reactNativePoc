import { DeviceEventEmitter } from 'react-native';
var dismissKeyboard = require('IAS/dismissKeyboard');
const loaderHandler = {
  hideLoader () {
    DeviceEventEmitter.emit('changeLoadingEffect', {isVisible: false});
  },
  showLoader (title) {
    dismissKeyboard();
    DeviceEventEmitter.emit('changeLoadingEffect', {title, isVisible: true});
  }
};

module.exports = loaderHandler;
