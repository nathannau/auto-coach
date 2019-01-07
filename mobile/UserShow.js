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

    _onEdit = (()=>{
        this.props.onEdit && this.props.onEdit(this.props.user)
    }).bind(this);

    _onStartClass = (()=>{
        this.props.onStartClass && this.props.onStartClass(this.props.user)
    }).bind(this);

    _onStartWhiteLicense = (()=>{
        this.props.onStartWhiteLicense && this.props.onStartWhiteLicense(this.props.user)
    }).bind(this);

    _onRemove = (()=>{
        this.props.onRemove && this.props.onRemove(this.props.user)
    }).bind(this);

    render() {
        var props = this.props;
        var user = props.user;
        //console.log(props);
        return <View style={{ margin:10, }}>
            <TouchableOpacity onPress={ this._onPressItem }> 
                <Text style={ styles.name }>{ user.firstname } { user.lastname }</Text>
            </TouchableOpacity>
            { props.selected && this._renderDetail() }
        </View>;
    }

    _renderDetail() 
    {
        var props = this.props;
        var user = props.user;
        
        return <View>
            <Text>Email : { user.email }</Text>
            <Text>Données en attente de synchronisation : { (user.data || []).length }</Text>
            <View style={{ flexDirection:"row", justifyContent:"space-evenly", flex:1, marginTop:20 }}>
                <Button title="Cours" onPress={this._onStartClass} disabled={true} />
                <Button title="Permis blanc" onPress={this._onStartWhiteLicense} />
                <Button title="Modifier" onPress={this._onEdit} />
                <Button title="Supprimer" onPress={this._onRemove} color="#ff0000" />
            </View>
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
