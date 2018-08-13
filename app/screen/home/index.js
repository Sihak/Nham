//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import Carousel from '../../component/carousel';
import MainHeader from '../../component/header';

const testingData = [{
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://largebannerprinting.com/wp-content/uploads/2017/06/RB27-AA-demo.png'
},
{
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1601/mikalaimanyshau160100083/50304057-colourful-shopping-vector-flat-banner-for-your-business-web-sites-etc-quality-design-illustrations-e.jpg'
},
{
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://previews.123rf.com/images/ylivdesign/ylivdesign1705/ylivdesign170502813/78258025-online-shopping-banner-horizontal-cartoon-style.jpg'
},
]

class HomeScreen extends Component {

    render() {

        return (
            <SafeAreaView
                style={styles.container}>
                <View
                    style={styles.container}>
                    <MainHeader
                        search={true}
                        tittle={'Nham'}
                        subTittle={'Be patient, Scroll, Enjoy !!!'}
                    />
                    <View style={[styles.gridButton, APPEARANCES.SHADOW]}>
                        <View style={styles.gridRow}>
                            <TouchableOpacity
                                onPress ={() => this.props.navigation.navigate('ListNham')}
                                style={styles.button}>
                                <Image style={styles.buttonIcon} source={require('../../asset/img/drink.png')} />
                                <Text style={styles.buttonText}>Drinks</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.buttonIcon} source={require('../../asset/img/food.png')} />
                                <Text style={styles.buttonText}>Foods</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.gridRow}>
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.buttonIcon} source={require('../../asset/img/shop.png')} />
                                <Text style={styles.buttonText}>Shops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.buttonIcon} source={require('../../asset/img/street.png')} />
                                <Text style={styles.buttonText}>Street Food</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.slideTittle}>Hot Promotion</Text>
                        <Carousel data={testingData} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const buttonIcon = DIMENSION(22)
const styles = StyleSheet.create({

    buttonIcon: {
        width: buttonIcon,
        height: buttonIcon,
        marginBottom: 10,
    },

    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(0,0,0,.5)'
    },

    button: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    gridButton: {
        padding: 30,
        marginHorizontal: DIMENSION(5.5),
        marginVertical: DIMENSION(5),
        borderRadius: 12,
        backgroundColor: '#fff'
    },

    slideTittle: {
        paddingHorizontal: DIMENSION(5.5),
        fontSize: 18,
        fontWeight: '900',
        color: 'rgba(0,0,0,0.5)',
    },


    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },

    body: {
        flex: 1,
    },
});
export default HomeScreen;
