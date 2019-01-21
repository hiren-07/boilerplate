/**
 * @providesModule Routers
 */
import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import SplashScreen from './container/AuthContainer/SplashScreen';


export default () => {
    return <Router>
        <Scene key="root">
            <Scene type="replace" key="splash" component={SplashScreen} hideNavBar={true} panHandlers={null} initial={true} />
        </Scene>
    </Router>;
};