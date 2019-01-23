import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import { BackHandler } from "react-native";
import { withNavigation } from 'react-navigation';
import range from 'fill-range'
import MapView from 'react-native-maps'
import Config from './Config';
import Resources from './Resources';
import ModalList from './ModalList';


class AnnotationMenu extends Component {

    constructor(props) {
        super(props);

        this.config = new Config();
        this.resources = new Resources();

        this.state = {
            icons: this.resources.getAnnotations(),
            items: this.config.getAnnotations(),
            currentList: -1,
        }

        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
      );
    }
    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }
    onBackButtonPressAndroid = () => {
        console.log("onBackButtonPressAndroid");
        // if (this.isSelectionModeEnabled()) {
            // this.disableSelectionMode();
            return true;
        // } else {
            // return false;
        // }
    };
    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }
    
    _clickIcon = (()=>{}).bind(this);

    _renderZone(index) {
        var iconNames = index==0 ? 
            Object.keys(this.state.icons).filter((_, i)=>i<3) : 
            this.state.items.filter(item=>item.position==index)
                .filter((_, i)=>i<3).map(item=>item.icon);

        var nbIcon = iconNames.length;
        const len = 150;
        const iLen = len / 2;
        const step = len / (nbIcon+5);


        var images = iconNames.map((name, i)=>
            <Image source={{uri:this.state.icons[name]}} key={ `icon_${i}` }
                style={{ 
                    position:"absolute", 
                    width:iLen, height:iLen, zIndex:nbIcon-i+1,
                    top:step*(i+3)-iLen/2, left:step*(i+3)-iLen/2 
                }}
            />
        );

        return <TouchableOpacity key={`btn_${index}`} 
            onPress={()=>{if (nbIcon>1) this.setState({currentList:index}); else this._clickIcon() }} 
            style={{ width:len, height:len, }}>
            { images }
        </TouchableOpacity>

    }
    _renderZones() {
        var max = Math.max(...this.state.items.map((item)=>{item.position}), 0);
        return range(0,max).map(index => this._renderZone(index) );
    }
    _renderList() {
        var currentList = this.state.currentList;
        if (currentList<0) return null;
        var items = currentList == 0 ?
            Object.keys(this.state.icons).map((name, index)=>({position:0, icon:name, text:"", id:index.toString()})):
            this.state.items.filter(item=>item.position==currentList);
        console.log(items);
        return <ModalList data={items} />
    }

    render() {
        return <View style={{ backgroundColor:"#008800", flex:1, flexDirection:"row", flexWrap:"wrap" }}>
            { this._renderZones() }
            { this._renderList() }
        </View>
    }


}

export default withNavigation(AnnotationMenu)

