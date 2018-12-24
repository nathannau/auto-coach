import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button, Linking, 
    TextInput, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types'
import Api from './Api'



export default class Login extends Component {

    static defaultProps = {
        onConnect: ()=>{},
    }
    static propTypes = {
        onConnect: PropTypes.func,
    }

    constructor(props)
    {
        super(props);
        this.state = {
            login: "",
            password: "",
            loading: false,
        };
    }

    _onSubmit = (()=> {
        this.setState({ loading : true });
        Api.Login(this.state.login, this.state.password, 
            (result)=>{
                if (this.props.onConnect) 
                    this.props.onConnect({...result, login:this.state.login });
            },
            ()=>{
                this.setState({loading:false})
            });
    }).bind(this)

    _onGoToSite = (() => {
        Linking.openURL("http://www.google.fr");
    }).bind(this)

    render() {
        state = this.state;

        return <View style={{ borderColor:"#888888", borderWidth:1, padding:20 }}>
            <Text style={styles.h1}>Connexion</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.label}>Identifiant</Text>
                <TextInput value={ state.login } style={styles.input} 
                    onChangeText={(text)=>{this.setState({login:text}) } } />
            </View> 
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput secureTextEntry value={ state.password } style={styles.input}  
                    onChangeText={(text)=>{this.setState({password:text}) } } />
            </View> 
            <Button title="Valider" onPress={ this._onSubmit } style={{marginTop:5}} />
            <TouchableOpacity onPress={ this._onGoToSite } style={{ alignSelf: 'flex-end', marginTop:5 }}>
                <Text style={styles.link}>Voir le site</Text>
            </TouchableOpacity>
            { state.loading && <ActivityIndicator size="large" />}
        </View>
    }

}

const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        textAlign: 'center',
        margin: 10,
        padding: 1,
    },
    label: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        padding: 1,
        width: 150,
    },
    input: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        borderColor:"#888888", 
        borderWidth: 1, 
        padding: 1,
        width: 150,
    },
    link: {
        fontSize: 20,
        textAlign: 'right',
        margin: 5,
    },
  });
  