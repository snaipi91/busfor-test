import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import data from './data';

import Flights from './src/Flights';

export default class App extends React.Component {
    constructor() {
        super();
    }

    sortBy() {
        console.log('button')
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Button
                        onPress={this.sortBy}
                        title="По стоимости"
                        color="#f13131"
                    />
                    <Button
                        onPress={this.sortBy}
                        title="По времени"
                        color="#f13131"
                    />
                    <Flights data={data}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
