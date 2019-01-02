import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default class Menu extends Component {

    // static navigationOptions = {
    //     header: null,
    // }

    render() {
        return <View style={styles.toto}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Le menu</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    toto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#888888',
        margin: 10,
    },
});