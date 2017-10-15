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
import ArtistBox from './ArtistBox';

const instructions = Platform.select({
  ios: 'hola juanfer Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'hola juanfer Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class ArtistList extends Component<{}> {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

   //const artists = Array(30).fill(artist);
    this.state = {
      dataSource: ds.cloneWithRows(props.artists),
    };
  }
  componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      //console.warn('cambio la lista');
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.artists)
      })
    }

  }
  render() {

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtistBox artist={artist}/>}
      />
      //<ArtistBox artist={artist}/>

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
