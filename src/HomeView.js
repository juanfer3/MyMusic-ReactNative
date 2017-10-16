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
import ArtistList from './ArtistList';
import { getArtists } from './api-Client'

const instructions = Platform.select({
  ios: 'hola juanfer Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'hola juanfer Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeView extends Component<{}> {

  state = {
    artists:[]
  }

  componentDidMount(){
    getArtists()
      .then(data => this.setState({artists: data}))
  }

  render() {

   const artists = this.state.artists
   console.warn('artists', artists);
    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
      </View>
      //<ArtistBox artist={artist}/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
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
