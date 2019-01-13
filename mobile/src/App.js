/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View /*, AsyncStorage*/ } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
// import Splash from './Splash'
// import Login from './Login'
// import CustomButton from './CustomButton'
import AppContainer from './Navigation'
import Config from './Config'
import Resources from './Resources'

export default class App extends Component {

    constructor() {
        super();

        this.state = { 
            // currentScreen: screens.splash,
        };

        this.config = new Config();
        this.resources = new Resources();
    }

    _navigateTo(route, replace=true) {
        this.navigator && this.navigator.dispatch(
            replace ? 
                StackActions.replace({ routeName : route}) :
                NavigationActions.navigate({routeName : route})
        );
    }

    render() {
        return (
            <AppContainer ref={nav => this.navigator = nav} />
        );
    }


    componentDidMount() {
        var counter = 0;
        navToNext = ()=>{counter++; if (counter==3) this._navigateTo('Menu'); }
        setTimeout(navToNext, 2000);        
        this.config.load(navToNext);
        this.resources.load().then(navToNext);
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FFFFFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
