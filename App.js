import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import data from './data';

import Flights from './src/Flights';

export default class App extends React.Component {
  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <Flights data={data}/>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
