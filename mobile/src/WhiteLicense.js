import React, {Component} from 'react'
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native'
import { withNavigation, HeaderBackButton } from 'react-navigation';
import Config from './Config'
import AnnotationMenu from './AnnotationMenu'

export default class WhiteLicense extends Component {

    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        return {
            headerLeft : (
                <HeaderBackButton onPress={()=>{
                    
                    console.log(navigation, params)
                }

                } />
            // <TouchableOpacity onPress={() => { navigation.goBack() }}>
            //     <View style={{ justifyContent: 'center', headerLayoutPreset: 'center', marginLeft: 15, width: 40, height: 40 }}>
            //           <Image source={ require('../image/navBack.png') }/>
            //     </View>
            // </TouchableOpacity>
            // <Text>toto</Text>
            ),
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            listIsOpen: false,            
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({
            handleThis: "truc"
        });
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
