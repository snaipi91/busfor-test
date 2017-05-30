import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import data from './data';

import Flights from './src/Flights';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            price: true,
            time: true
        }
    }

    sortByTime() {
        this.setState({
            price: false,
            time: true
        })
    }

    sortByPrice() {
        this.setState({
            price: true,
            time: false
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Button
                        onPress={this.sortByPrice.bind(this)}
                        title="По стоимости"
                        color="#f13131"
                    />
                    <Button
                        onPress={this.sortByTime.bind(this)}
                        title="По времени"
                        color="#f13131"
                    />
                    <Flights data={data} sort={this.state}/>
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
