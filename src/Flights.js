import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import _ from 'lodash';

export default class Flights extends React.Component {
    render() {
        let flights,
            timeFrom,
            timeTo,
            data = this.props.data;

        if(data) {
            // sort
            data = _.sortBy(this.props.data, ['price', 'dateTimeFrom']);

            flights = data.map((item, index) => {
                timeFrom = new Date(item.dateTimeFrom);
                timeTo = new Date(item.dateTimeTo);

                return (
                    <TouchableHighlight key={index}>
                        <View style={styles.container}>
                            <Text><Text style={styles.strong}>Откуда:</Text> {item.cityFrom}</Text>
                            <Text><Text style={styles.strong}>Куда:</Text> {item.cityTo}</Text>
                            <Text><Text style={styles.strong}>Время отбытия:</Text> {timeFrom.getHours()}:{timeFrom.getMinutes()}:{timeFrom.getSeconds()}</Text>
                            <Text><Text style={styles.strong}>Время прибытия:</Text> {timeTo.getHours()}:{timeTo.getMinutes()}:{timeTo.getSeconds()}</Text>
                            <Text><Text style={styles.strong}>Цена билета:</Text> {item.price} руб.</Text>
                        </View>
                    </TouchableHighlight>
                )
            })
        }

        return (
            <View>
                {flights}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#f19191',
        borderBottomWidth: 1
    },

    strong: {
        fontSize: 14,
        fontWeight: "900"
    }
});