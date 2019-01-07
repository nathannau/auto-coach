import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList, Alert} from 'react-native';
import Config from './Config';
//import UserEdit from './UserEdit';
import UserShow from './UserShow';



export default class Menu extends Component {

    constructor() {
        super();
        this.config = new Config();
        this.state = {
            users: this.config.getUsers() || {},
            currentUser: null,
        }
        //console.log("Menu.constructor");
    }

    // static navigationOptions = {
    //     header: null,
    // }

    _addUser = (() => {
        this.props.navigation.navigate( 'EditUser', {
            setUser:(user)=>{ 
                this.setState({ 
                    users:this.config.setUser(user),
                    currentUser: user,
                }); 
            },
        });
    }).bind(this)

    _editUser = ((user) => {
        this.props.navigation.navigate( 'EditUser', {
            user: user,
            setUser:(user)=>{ 
                this.setState({ users:this.config.setUser(user) }); 
            }
        });
    }).bind(this)

    _removeUser = ((user) => {
        Alert.alert(
            "Confirmation",
            `Voulez-vous supprimer toutes les informations sur ${user.firstname} ${user.lastname}`,
            [
                { text: "Oui", onPress:()=>{
                    this.setState({ users:this.config.removeUser(user) });
                } },
                { text: "Non", onPress:()=>{} },
            ]
        );
    }).bind(this)

    _startWhiteLicense = ((user) => {
        // this.setState({ users:this.config.removeUser(user) });
        this.props.navigation.navigate( 'WhiteLicense', {
        //     user: user,
        //     setUser:(user)=>{ 
        //         this.setState({ users:this.config.setUser(user) }); 
        //     }
        });
    }).bind(this)

    render() {
        //console.log("Menu.render", this.state);
        //var states = this.state 
        var users = Object.values(this.state.users);
        return <View style={{ flex:1 }} >
            <View style={{ flexDirection:"row", alignContent:"center", alignItems:"center"}}>
                <TextInput placeholder="Filtre" style={{ marginRight:5, marginLeft:5, height:40, borderWidth:1, flex:1 }} />
                <TouchableOpacity onPress={this._addUser} style={{ width:40, marginRight:5 }}>
                    <Image source={require('./assets/ui/plus.png')} style={{ height:40, width:40 }} />
                </TouchableOpacity>
            </View>
            <FlatList 
                data={users}
                keyExtractor={(user) => user.id }
                renderItem={({item:user}) => <UserShow 
                    user={user} 
                    selected={this.state.currentUser===user} 
                    onSelect={(user)=>{this.setState({ currentUser: user}); } }
                    onEdit={this._editUser}
                    onStartClass={null}
                    onStartWhiteLicense={this._startWhiteLicense}
                    onRemove={this._removeUser}
                />}
            /> 
        </View>
    }

    // componentDidMount() {
    //     this.props.navigation.addListener('willFocus', truc=>{
    //         console.log("willFocus : ", truc)
    //     });
    // }

}

// const styles = StyleSheet.create({
//     toto: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#888888',
//         margin: 10,
//     },
// });
