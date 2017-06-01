import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import dataFlight from '../data';

import _ from 'lodash';

class Flights extends React.Component {
    constructor() {
        super();
        this.state = {
            price: true,
            time: true
        }
    }

    sortByTime = () => {
        this.setState({
            price: false,
            time: true
        })
    };

    sortByPrice = () => {
        this.setState({
            price: true,
            time: false
        })
    };

    render() {
        let flights,
            timeFrom,
            timeTo,
            month = ['Января', 'Февраля', 'Март', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
            data = dataFlight;

        if(data) {
            // sort change state
            if(this.state.time == false) {
                data =  _.sortBy(data, ['price']);
            } else if (this.state.price == false) {
                data =  _.sortBy(data, ['dateTimeFrom']);
            } else {
                data = _.sortBy(data, ['price', 'dateTimeFrom']);
            }

            flights = data.map((item, index) => {
                timeFrom = new Date(item.dateTimeFrom);
                timeTo = new Date(item.dateTimeTo);

                return (
                    <TouchableOpacity onPress={() => {Actions.page({item: item, num: index+1})}} key={_.uniqueId()}>
                        <View style={styles.containerItem}>
                            <Text><Text style={styles.strong}>Откуда:</Text> {item.cityFrom}</Text>
                            <Text><Text style={styles.strong}>Куда:</Text> {item.cityTo}</Text>
                            <Text><Text style={styles.strong}>Время отбытия:</Text> {timeFrom.getDate()} {month[timeFrom.getMonth()]} {timeFrom.getHours()}:{timeFrom.getMinutes()}:{timeFrom.getSeconds()}</Text>
                            <Text><Text style={styles.strong}>Время прибытия:</Text> {timeTo.getDate()} {month[timeTo.getMonth()]} {timeTo.getHours()}:{timeTo.getMinutes()}:{timeTo.getSeconds()}</Text>
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