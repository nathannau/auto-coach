import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import Config from './Config';
//import UserEdit from './UserEdit';
import UserShow from './UserShow';



export default class Menu extends Component {

    constructor() {
        super();
        this.config = new Config();
        this.states = {
            users: this.config.getUsers(),
            currentUser: null,
        }
        console.log("Menu.constructor");
    }

    // static navigationOptions = {
    //     header: null,
    // }

    _addUser = (() => {
        this.props.navigation.navigate( 'AddUser', {
            setUser:(user)=>{ 
                this.setState({ users:this.config.setUser(user) }); 
            }
        });
    }).bind(this)

    render() {
        console.log("Menu.render", this.states);
        var users = Object.values(this.states.users);
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
                    selected={this.states.currentUser===user} 
                    onSelect={(user)=>{this.setState({ currentUser: user}); }}
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
