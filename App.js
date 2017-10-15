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
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ArtistBox from './ArtistBox';

const instructions = Platform.select({
  ios: 'hola juanfer Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'hola juanfer Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    const artist={
      imagen:'https://lastfm-img2.akamaized.net/i/u/300x300/84141376f72f1a6a43a9d8ea1c695ab1.jpg',
      name: 'Andy Shouf',
      like: 205,
      comment: 150
   }
    return (
      <ScrollView style={styles.container}>
      {
        array(6).fill(artist).map(artist => {
         return  <ArtistBox artist={artist}/>
        })
      }
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>

      </ScrollView>
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
