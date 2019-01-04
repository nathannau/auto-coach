import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import Config from './Config';

export default class UserEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname:"",
            lastname:"",
            email:"",
        };
    }

    _onSave = (()=>{
        const { navigation } = this.props
        navigation.state.params.setUser({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            id: this.state.firstname.substr(0,5) + this.state.firstname.substr(0,5) + "-" +  Date.now().toString(36),
        });
        navigation.goBack();
    }).bind(this);

    _onCancel = (()=>{
        this.props.navigation.goBack();
    }).bind(this);

    render() {
        
        return <View style={{ margin:5, flex:1 }}>
            <View style={ styles.row }>
                <Text style={ styles.label }>Nom : </Text>
                <TextInput 
                    value={this.state.lastname} 
                    onChangeText={(value)=>{this.setState({lastname:value})}} 
                    style={ styles.field } />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>Prénom : </Text>
                <TextInput 
                    value={this.state.firstname} 
                    onChangeText={(value)=>{this.setState({firstname:value})}} 
                    style={ styles.field } />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>Email : </Text>
                <TextInput 
                    value={this.state.email} 
                    onChangeText={(value)=>{this.setState({email:value})}} 
                    keyboardType="email-address"
                    style={ styles.field } />
            </View>
            <View style={{ flexDirection:"row-reverse" }}>
                <Button title="Enregistrer" onPress={ this._onSave } />
                <Button title="Annuler" onPress={ this._onCancel } />
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
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
