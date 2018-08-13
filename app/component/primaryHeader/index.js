import React, { Component } from 'react';
import { COLORS, APPEARANCES } from '../../module';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, StyleSheet, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class PrimaryHeader extends Component {

    onSearchPressed() {
        this.props.searchPressed()
    }
    onNotificationPressed() {
        this.props.notificationPressed()
    }
    onFilterPressed() {
        this.props.filterPressed()
    }
    
    onBackPressed(){
        if(this.props.isHome){
            return
        }
        else{
            console.log('Pressed')
            this.props.onBackPressed()
            console.log(this.props)
        }
    }
    render() {
        return (
            <View animation={'slideInDown'} duration={3000} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                   <TouchableOpacity onPress = {() => this.onBackPressed()}  style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {!this.props.isHome && 
                    <Ionicons style={[{ fontSize: 36, color: this.props.color?this.props.color:'#fff',marginTop: 7 }]} name={'ios-arrow-back'} /> }   
                    <Text style={[styles.subHearderTittle, { color: this.props.color?this.props.color:'#fff' } ]}> {this.props.tittle} </Text>
                  </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {this.props.showSearch && <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.onSearchPressed()} >
                        <FontAwesome style={[APPEARANCES.SHADOW, { fontSize: 28, marginRight: 12, color: COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }]} name='search' />
                    </TouchableOpacity>
                    }

                    {this.props.showNotification && <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.onNotificationPressed()} >
                        <Ionicons style={[APPEARANCES.SHADOW, { fontSize: 34, marginRight: 12, marginTop: 5, color: COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }]} name='ios-notifications' />
                    </TouchableOpacity>}
                    {this.props.isMap && <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.onNotificationPressed()} >
                        <Ionicons style={[APPEARANCES.SHADOW, { fontSize: 34, marginRight: 12, marginTop: 5, color: COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }]} name='md-pin' />
                    </TouchableOpacity>}
                    {this.props.isFilter && <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.onFilterPressed()} >
                        <Ionicons style={[APPEARANCES.SHADOW, { fontSize: 34, marginRight: 12, marginTop: 5, color: COLORS.SUB_HEADER_TITTLE, fontWeight: '300' }]} name='ios-options' />
                    </TouchableOpacity>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subHearderTittle: {
        fontSize: 28,
        fontWeight: '900',
        color: '#333'
    },
});

export default PrimaryHeader;