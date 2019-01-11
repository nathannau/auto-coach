import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import MapView from 'react-native-maps'
import Config from './Config';

export default class AnnotationMenu extends Component {

    constructor(props) {
        super(props);

        this.config = new Config();

        this.state = {
            annotations: this.config.getAnnotations()
        }

    } 


    render() {
        return <View style={{ backgroundColor:"#00880088", flex:1 }}>

        </View>
    }


}

