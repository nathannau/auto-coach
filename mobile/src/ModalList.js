import React, {Component} from 'react';
import {StyleSheet, Button, Image, TouchableOpacity, Text, View, TextInput, ListView, FlatList} from 'react-native';
import AnnotationItem from './AnnotationItem'

export default class ModalList extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        // var data = [...this.props.data,...this.props.data,...this.props.data,...this.props.data,...this.props.data]
        var data = [...this.props.data,...this.props.data]
        return <View style={{ backgroundColor:"#008800", position:"absolute", flexDirection:"row", left:0, right:0, padding:15, top:0, bottom:0 }}>
            <FlatList style={{backgroundColor:"#880000"}}
                data={data}
                keyExtractor={(item, index) => /*item.id*/ index.toString() }
                renderItem={({item}) => <AnnotationItem annotation={item} />}
            />
        </View>

// data={this.props.data}
// selected={this.state.currentUser===user} 
// onSelect={(user)=>{this.setState({ currentUser: user}); } }
// onEdit={this._editUser}
// onStartClass={null}
// onStartWhiteLicense={this._startWhiteLicense}
// onRemove={this._removeUser}

    }

}