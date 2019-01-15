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
            icons: this.resources.getAnnotations(),
            items: this.config.getAnnotations(),
        }

    } 

    _renderZone(index) {
        var iconNames = index==0 ? 
            Object.keys(this.state.icons).filter((_, i)=>i<3) : 
            this.state.items.filter(item=>item.position==index)
                .filter((_, i)=>i<3).map(item=>item.name);

        var nbIcon = iconNames.length;
        const len = 150;
        const iLen = len / 2;
        const step = len / (nbIcon+5);


        var images = iconNames.map((name, i)=>
            <Image source={{uri:this.state.icons[name]}} key={ `icon_${i}` }
                style={{ 
                    position:"absolute", 
                    width:iLen, height:iLen, zIndex:nbIcon-i+1,
                    top:step*(i+3)-iLen/2, left:step*(i+3)-iLen/2 
                }}
            />
        );

        return <TouchableOpacity key={`btn_${index}`} onPress={()=>{}} style={{ width:len, height:len, }}>
            { images }
        </TouchableOpacity>

    }
    _renderZones() {
        var max = Math.max(...this.state.items.map((item)=>{item.position}), 0);
        return range(0,max).map(index => this._renderZone(index) );
    }

    render() {
        return <View style={{ backgroundColor:"#008800", flex:1, flexDirection:"row", flexWrap:"wrap" }}>
            { this._renderZones() }
        </View>
    }


}

