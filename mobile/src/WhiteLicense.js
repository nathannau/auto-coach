import React, {Component} from 'react'
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native'
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
            <AnnotationMenu></AnnotationMenu>
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
