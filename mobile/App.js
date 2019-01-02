/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import Splash from './Splash'
import Login from './Login'
import CustomButton from './CustomButton'
import {Cache} from "react-native-cache";
import AppContainer from './Navigation'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const screens = { splash:"SPLASH", login:"LOGIN", map:"MAP" };
// type Props = {};
export default class App extends Component /*<Props>*/ {

    constructor() {
    super();

    this.state = { 
        // currentScreen: screens.splash,
    };

    this.cache = new Cache({
        // namespace: "myapp",
        backend: AsyncStorage
    });

    }

    loginConnect = ((info) => {
        this.cache.setItem("login", info.login, ()=>{});
        this.cache.setItem("config", info.config, ()=>{});
        this.cache.setItem("token", info.token, (err, value) => {      
            // this.setState({currentScreen : screens.map});
        });
    }).bind(this)

    _navigateTo(route, replace=true) {
        this.navigator && this.navigator.dispatch(
            replace ? 
                StackActions.replace({ routeName : route}) :
                NavigationActions.navigate({routeName : route})
        );
    }

    render() {
        //var state = this.state;
        // <Text style={styles.welcome}>Welcome to React Native!</Text>
        // <Text style={styles.instructions}>To get started, edit App.js</Text>
        // <Text style={styles.instructions}>{instructions}</Text>
        // <Text>Hello React World ! !</Text>
        // <CustomButton/>
        // console.info("render Screen : ", state.currentScreen)
        /*
        return (
            <View style={styles.container}>
            { state.currentScreen==screens.splash && <Splash />}
            { state.currentScreen==screens.login && <Login onConnect={this.loginConnect} />}
            </View>
        );
        */
        return (
            <AppContainer ref={nav => this.navigator = nav} />
        );
    }


    componentDidMount() {
        // this.cache.clearAll()
        this.cache.getItem("token", (err, value) => {
            console.log("token : ", value)
            setTimeout(
                ()=>{
                    console.log(this.props);
                    this._navigateTo('Menu');
                }, 
                5000);

            // var isLogged = value | false;
            // this.setState({ currentScreen: isLogged ? screens.map : screens.login });
            // this.cache.setItem("key3", key1, (err)=>{});
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
