import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Flights from './src/Flights';
import PageFlight from './src/PageFlight';

import data from './data';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="main" component={Flights} data={data} title="Главная"/>
                    <Scene key="page" component={PageFlight} data={data} title="Информация рейса"/>
                </Scene>
            </Router>
        );
    }
}
