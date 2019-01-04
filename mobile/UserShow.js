import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import Config from './Config';

export default class UserShow extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     user: null,            
        // };
    }

    _onPressItem = (()=>{
        this.props.onSelect && this.props.onSelect(this.props.user)
    }).bind(this)

    render() {
        var props = this.props;
        var user = props.user;
        console.log(props);
        return <View style={{ margin:10, }}>
            <TouchableOpacity onPress={ this._onPressItem }>
                <Text style={ styles.name }>{ user.firstname } { user.lastname }</Text>
                { props.selected && <Text>Selected</Text> }
            </TouchableOpacity>
        </View>;
    }

}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
    },
    row: {
        flexDirection:"row", 
        alignItems:"center", 
        marginBottom:5,
    },
    label: {
        width:100,
    },
    field: { 
        borderWidth:1, 
        flex:1, 
        paddingHorizontal:5, 
        paddingVertical:0 
    },
});
