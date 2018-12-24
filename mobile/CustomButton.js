import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'



export default class CustomButton extends Component {

    static defaultProps = {
        label: "Hello World",
        icon: require('./assets/icons/stop.png'),
        // label: "Button Text"
    }
    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.any,
        // content: PropTypes.array,
        // onPress: PropTypes.func,
        // icon: PropTypes.number,
        // styles: PropTypes.object,
        // isReady: PropTypes.bool,
    }

    constructor(props) { 
        super(props)
    
        // Ici on va créer les propriétés de notre component custom Search
    
    }
    _onPress() {
        console.log('prout');
        console.log('prout !');
        console.log(this.props);
    }
    _onLongPress() {
        console.log('prout 2');

    }


    render() {
        var props = this.props;
        console.log(props)
        // return <TouchableOpacity onPress={this._onPress}>
        return <TouchableOpacity onPress={()=>this._onPress()} onLongPress={()=>this._onLongPress()}>
            { props.icon && <Image source={ props.icon } />}
            { props.label && <Text>{ props.label }</Text>}
        </TouchableOpacity>
    }




}