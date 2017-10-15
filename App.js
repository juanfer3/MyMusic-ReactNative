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
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const instructions = Platform.select({
  ios: 'hola juanfer Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'hola juanfer Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {

    const imagen='https://lastfm-img2.akamaized.net/i/u/300x300/84141376f72f1a6a43a9d8ea1c695ab1.jpg'
    const name = 'Andy Shouf'
    const like = 200
    const comment = 150
    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri:imagen}} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconsContent}>
                <Icon name="favorite-border" size={30} color="ligthgray"/>
                <Text style={styles.count}>{like}</Text>
              </View>
              <View style={styles.iconsContent}>
                <Icon name="forum" size={30} color="ligthgray"/>
                <Text style={styles.count}>{comment}</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    paddingTop: 50
  },
  artistBox: {
    backgroundColor: '#b2dfdb',
    flexDirection: 'row',

  },
  image: {
    height:150,
    width: 150,
  },
  name: {

    fontSize: 20,
    marginTop: 10,

  },
  info:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },
  iconsContent:{
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: '#424242'
  }

});
