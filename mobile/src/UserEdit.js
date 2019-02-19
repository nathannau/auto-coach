import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import Config from './Config';
import User from './Models/User';

export default class UserEdit extends Component {

    static navigationOptions = ({ navigation }) => {
        const user = navigation.getParam('user');
        return {
            title: user ? 'Modification' : 'Nouveau',
        };
    };

    constructor(props) {
        super(props);

        this.state = { user:new User(props.navigation.getParam('user')) };
    }

    _onSave = (()=>{
        const { navigation } = this.props
        navigation.state.params.setUser(this.state.user.export());
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
                    value={this.state.user.getLastname()} 
                    onChangeText={(value)=>{this.setState({user:this.state.user.setLastname(value)})}} 
                    style={ styles.field } />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>Prénom : </Text>
                <TextInput 
                    value={this.state.user.getFirstname()} 
                    onChangeText={(value)=>{this.setState({user:this.state.user.setFirstname(value)})}} 
                    style={ styles.field } />
            </View>
            <View style={ styles.row }>
                <Text style={ styles.label }>Email : </Text>
                <TextInput 
                    value={this.state.user.getEmail()} 
                    onChangeText={(value)=>{this.setState({user:this.state.user.setEmail(value)})}} 
                    keyboardType="email-address"
                    style={ styles.field } />
            </View>
            <View style={{ flexDirection:"row", justifyContent:"space-evenly", marginTop:20, marginLeft:"60%" }}>
                <Button title="Annuler" color="#ff0000" onPress={ this._onCancel } />
                <Button title="Enregistrer" onPress={ this._onSave } />
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
