import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { COLORS, DIMENSION, APPEARANCES } from '../module';


export default class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={[styles.header]}>
                    <Text style={[styles.headerTittle,{color:this.props.color}]}>{this.props.tittle}</Text>
                    {
                        this.props.search &&
                        <TouchableOpacity
                        onPress = {() => this.props.searchPressed()}
                        >
                        <MaterialIcons style={[styles.notificationIcon,{color:this.props.color}]} name={'search'} />
                        </TouchableOpacity>
                    }
                    {
                        this.props.back &&
                        <TouchableOpacity
                        onPress = {() => this.props.backPressed()}
                        >
                        <Ionicons style={[styles.notificationIcon,{color:this.props.color}]} name={'md-close'} />
                        </TouchableOpacity>
                    }
                </View>
                <Text style={[styles.headerSubtittle,{color:this.props.color}]}>{this.props.subTittle}</Text>
            </View>
        );
    }
}

const styles = {
    headerSubtittle: {
        paddingHorizontal: DIMENSION(5.5),
        fontSize: 16,
        fontWeight: '900',
        color: '#fff',
    },
    header: {
        width: DIMENSION(100),
        height: DIMENSION(10),
        paddingHorizontal: DIMENSION(5.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomWidth: 0.2,
        // borderColor: '#333'
    },
    headerTittle: {
        fontSize: 28,
        fontWeight: '800',
        color: '#fff',
    },
    notificationIcon: {
        fontSize: 42,
        fontWeight: '800',
        color: '#fff',
    },
}
