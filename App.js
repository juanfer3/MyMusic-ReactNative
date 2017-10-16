/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Modal,
  Alert,
  Image,
  ScrollView,
  ListView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Scene, Router} from 'react-native-router-flux';
import HomeView from './src/HomeView';
import ArtistDetailView from './src/ArtistDetailView';

export default class App extends Component<{}> {


  render() {
    return <Router>
      <Scene key='root'>
        <Scene key='home' component={HomeView} hideNavBar/>
        <Scene key='artistDetail' component={ArtistDetailView}/>
      </Scene>
    </Router>
  }

}

const styles = StyleSheet.create({


});
