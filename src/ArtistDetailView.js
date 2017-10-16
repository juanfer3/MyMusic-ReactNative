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


import ArtistBox from './ArtistBox';
import { getArtists } from './api-Client'


export default class ArtistDetailView extends Component<{}> {
  render() {
   const artist = this.props.artist
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
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
  }
});
