import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';

import CustomCount from './Count.js'

export default class App extends React.Component {
	
	constructor(props) {
    super(props)
    this.state = {
      showCounter: false,
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      {<CustomCount />}
      </View>
    );
  }
}

const screen = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
	  justifyContent: 'center',
    backgroundColor: 'purple'
  }
});
