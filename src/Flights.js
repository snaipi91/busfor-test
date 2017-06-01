import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Time from './Time';

import _ from 'lodash';

class Flights extends React.Component {
    constructor() {
        super();
        this.state = {
            byKey: ['price', 'dateTimeFrom']
        }
    }

    sortByTime = () => {
        this.setState({
            byKey: ['dateTimeFrom']
        })
    };

    sortByPrice = () => {
        this.setState({
            byKey: ['price']
        })
    };

    render() {
        let flights,
            data;

        if(this.props.data) {
            // sort change state
            data =  _.sortBy(this.props.data, this.state.byKey);

            flights = data.map((item, index) => {

                return (
                    <TouchableOpacity onPress={() => {Actions.page({item: item, num: index+1})}} key={_.uniqueId()}>
                        <View style={styles.containerItem}>
                            <Text><Text style={styles.strong}>Откуда:</Text> {item.cityFrom}</Text>
                            <Text><Text style={styles.strong}>Куда:</Text> {item.cityTo}</Text>
                            <Text>
                                <Text style={styles.strong}>Время отбытия:</Text>
                                <Time ms={item.dateTimeFrom}/>
                            </Text>
                            <Text>
                                <Text style={styles.strong}>Время прибытия:</Text>
                                <Time ms={item.dateTimeTo}/>
                            </Text>
                            <Text><Text style={styles.strong}>Цена билета:</Text> {item.price} руб.</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        }

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Button
                        onPress={this.sortByPrice}
                        title="По стоимости"
                        color="#f13131"
                    />
                    <Button
                        onPress={this.sortByTime}
                        title="По времени"
                        color="#f13131"
                    />
                    {flights}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerItem: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 18,
        borderBottomColor: '#f19191',
        borderBottomWidth: 1
    },

    strong: {
        fontSize: 14,
        fontWeight: "900"
    }
});

export default Flights;