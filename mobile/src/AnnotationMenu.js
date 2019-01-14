import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import MapView from 'react-native-maps'
import Config from './Config';
import Resources from './Resources';
import range from 'fill-range'

export default class AnnotationMenu extends Component {

    constructor(props) {
        super(props);

        this.config = new Config();
        this.resources = new Resources();

        this.state = {
            icones: this.resources.getAnnotations(),
            items: this.config.getAnnotations(),
        }

    } 

    _renderZone(index) {
        //console.log("_renderZone : ", index); 
//        if ()
        return <TouchableOpacity key={`btn_${index}`} onPress={()=>{}} style={{ width:100, height:100, backgroundColor:"#880000" }}>
        
        </TouchableOpacity>

    }
    _renderZones() {
        console.log("_renderZones");
        var max = Math.max(...this.state.items.map((item)=>{item.position}), 0);
        return range(0,max).map(index => this._renderZone(index) );
    }

    render() {
        return <View style={{ backgroundColor:"#008800", flex:1, flexDirection:"row", flexWrap:"wrap" }}>
            { this._renderZones() }
        </View>
    }


}

