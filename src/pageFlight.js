import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

const PageFlight = (item) => {
    const month = ['Января', 'Февраля', 'Март', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    // без рефакторинга
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Билеты на автобус</Text>
            <Text style={styles.subTitle}>Рейс #{item.num}</Text>
            <View style={{marginTop: 15, marginBottom: 15}}>
                <Text><Text style={styles.strong}>Откуда:</Text> {item.item.cityFrom}</Text>
                <Text><Text style={styles.strong}>Куда:</Text> {item.item.cityTo}</Text>
                <Text><Text style={styles.strong}>Время отбытия:</Text> {new Date(item.item.dateTimeFrom).getDate()} {month[new Date(item.item.dateTimeFrom).getMonth()]} {new Date(item.item.dateTimeFrom).getHours()}:{new Date(item.item.dateTimeFrom).getMinutes()}:{new Date(item.item.dateTimeFrom).getSeconds()}</Text>
                <Text><Text style={styles.strong}>Время прибытия:</Text> {new Date(item.item.dateTimeTo).getDate()} {month[new Date(item.item.dateTimeTo).getMonth()]} {new Date(item.item.dateTimeTo).getHours()}:{new Date(item.item.dateTimeTo).getMinutes()}:{new Date(item.item.dateTimeTo).getSeconds()}</Text>
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