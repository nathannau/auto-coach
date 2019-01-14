import React, {Component} from 'react'
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native'
import MapView from 'react-native-maps'
import Config from './Config'
import AnnotationMenu from './AnnotationMenu'

export default class WhiteLicense extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     user: null,            
        // };
    }

    // _onPressItem = (()=>{
    //     this.props.onSelect && this.props.onSelect(this.props.user)
    // }).bind(this)

    // _onEdit = (()=>{
    //     this.props.onEdit && this.props.onEdit(this.props.user)
    // }).bind(this);

    // _onStartClass = (()=>{
    //     this.props.onStartClass && this.props.onStartClass(this.props.user)
    // }).bind(this);

    // _onStartWhiteLicense = (()=>{
    //     this.props.onStartWhiteLicense && this.props.onStartWhiteLicense(this.props.user)
    // }).bind(this);

    // _onRemove = (()=>{
    //     this.props.onRemove && this.props.onRemove(this.props.user)
    // }).bind(this);

    render() {
        var props = this.props;
        var user = props.user;
        //console.log(props);
        return <View style={{ flex:1 }}>
            <MapView initialRegion={{
                latitude: 46.664308,
                longitude: 0.31466309999996156,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} style={{ flex:1 }} ></MapView>
            <View pointerEvents={'box-none'} style={{ position:"absolute", flex:1, width:200, height:200, backgroundColor:"#00880033" }}>
                <View style={{ width:100, height:100, backgroundColor:"#88000033" }}></View>
                <TouchableOpacity onPress={ ()=>{ console.log('prout !'); } } style={{ width:100, height:100, backgroundColor:"#ff000033" }}></TouchableOpacity>
  
                <AnnotationMenu></AnnotationMenu>
            </View>
        </View>;
    }


}

// const styles = StyleSheet.create({
//     name: {
//         fontSize: 20,
//     },
//     row: {
//         flexDirection:"row", 
//         alignItems:"center", 
//         marginBottom:5,
//     },
//     label: {
//         width:100,
//     },
//     field: { 
//         borderWidth:1, 
//         flex:1, 
//         paddingHorizontal:5, 
//         paddingVertical:0 
//     },
// });
