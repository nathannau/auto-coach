import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import Config from './Config';
import Resources from './Resources';


export default class AnnotationItem extends Component {

    constructor(props) {
        super(props);
    
//        this.config = new Config();
        this.resources = new Resources();

        this.state = {
            icons: this.resources.getAnnotations(),
            text: this.props.annotation.text
//            items: this.config.getAnnotations(),
//            currentList: -1,
        }
         
    }

    
    render() {
        return <View style={{ flexDirection:"row", alignItems:"center" }}>
            <Image source={{uri:this.state.icons[this.props.annotation.icon]}} width={50} height={50} style={{ width:50, height:50 }} />
            <TextInput 
                placeholder={this.props.annotation.text} 
                text={this.state.text}
                onChangeText={val=>this.setState({state:val})} 
                style={{flex:1, backgroundColor:"#ffffff", fontSize:30, height:30, marginLeft:15, marginRight:15, paddingTop:0, paddingBottom:0}} />
            <TouchableOpacity onPress={null}>
                <Image source={require('../assets/ui/plus.png')} />
            </TouchableOpacity>
        </View>
    }

}