import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

import Time from './Time';

const PageFlight = (item) => {

    // без рефакторинга
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Билеты на автобус</Text>
            <Text style={styles.subTitle}>Рейс #{item.num}</Text>
            <View style={{marginTop: 15, marginBottom: 15}}>
                <Text><Text style={styles.strong}>Откуда:</Text> {item.item.cityFrom}</Text>
                <Text><Text style={styles.strong}>Куда:</Text> {item.item.cityTo}</Text>
                <Text>
                    <Text style={styles.strong}>Время отбытия:</Text>
                    <Time ms={item.item.dateTimeFrom}/>
                </Text>
                <Text>
                    <Text style={styles.strong}>Время прибытия:</Text>
                    <Time ms={item.item.dateTimeTo}/>
                </Text>
                <Text><Text style={styles.strong}>Цена билета:</Text> {item.item.price} руб.</Text>
            </View>
            <Button
                onPress={Actions.main}
                title="На главную"
                color="#f13131"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 24
    },

    subTitle: {
        fontSize: 20
    },

    strong: {
        fontSize: 14,
        fontWeight: "900"
    }
});

export default PageFlight;