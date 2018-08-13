/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppRouting from './app/config/appRouting';
import { Provider } from 'mobx-react';
import { store } from './app/store';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Class RCTCxxModule', 'Method `jumpToIndex`', 'Module RCTImageLoader']);

class App extends Component {
  render() {
    return (
      <Provider {...store} >
        <AppRouting
        />
      </Provider>
    );
  }
}

export default App;


