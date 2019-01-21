/**
 * @providesModule App
 */
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import Store from 'ReduxStore';
import Routers from 'Routers';
import MainContainer from 'MainContainer';
import MainContainerStyle from 'MainContainerStyle';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={Store}>
              <View style={MainContainerStyle.container}>
                <Routers/>
                <MainContainer/>
              </View>
            </Provider>
        );
    }
}
