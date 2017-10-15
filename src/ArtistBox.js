/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


import {
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

export default class ArtistBox extends Component<{}> {
  render() {
    //console.warn('el artista', this.props.artist.name);

    const{name,like,comment,imagen}=this.props.artist
    return (

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

    );
  }
}

const styles = StyleSheet.create({

  artistBox: {
    margin: 5,
    elevation: 2,
    backgroundColor: '#b2dfdb',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowOffset:{
      height:1,
      width:-2,
    },


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
