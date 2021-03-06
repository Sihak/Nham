//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


class MeScreen extends Component {

    itemSeperator() {
        return (
            <View style={{ height: DIMENSION(5) }} ></View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{ position: 'absolute' }} source={require('../../asset/img/bg.jpg')} />
                <SafeAreaView
                    style={styles.container}>
                    <FlatList style={styles.body}
                        ItemSeparatorComponent={() => this.itemSeperator()}
                        ListHeaderComponent={() => {
                            return (
                                <View style = {{marginVertical:DIMENSION(5)}}>
                                    <View style={styles.userProfile}>
                                        <Image style={styles.imgProfile} source={require('../../asset/img/user.png')} />
                                        <View style={styles.userInfo}>
                                            <Text style={[styles.userInfoText, { fontSize: 32 }]}>Sihak</Text>
                                            <Text style={styles.userInfoText}>chau.sihak@gmail.com</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('AddPost')}
                                        style={[styles.post, APPEARANCES.SHADOW]}>
                                        <MaterialIcons name={'add-circle'} style={styles.addIcon} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        data={[1, 2, 3]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('AddPost')}
                                    style={[styles.post, APPEARANCES.SHADOW,{borderRightColor:'#E32557',borderRightWidth:5,borderLeftWidth:5,borderLeftColor:'#5EB6EE'}]}>
                                    <View style={styles.logoContainer} >
                                        <Image style={styles.logo} source={require('../../asset/img/store.png')} />
                                    </View>
                                    <View style = {styles.postDetails}>
                                            <Text style = {styles.shopName}>T-Shop</Text>
                                            <Text style = {styles.shopType}>Street Food</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}

                    />
                </SafeAreaView>
            </View>
        );
    }
}

const userIMG = DIMENSION(42)
const logo = DIMENSION(20)
const styles = StyleSheet.create({

    postDetails:{
        flex:1,
        marginLeft: 15,
        borderLeftWidth:2,
        paddingVertical:35,
        borderColor:'rgba(0,0,0,0.2)',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    shopName:{
        fontSize:22,
        fontWeight:'900',
        marginBottom: 5,
        color:'#333'
    },

    shopType:{
        fontSize:18,
        fontWeight:'300',
        color:'rgba(0,0,0,.5)',
    },

    logoContainer: {
        width: logo,
        height: logo,
        borderRadius: 50,
    },

    logo: {
        width: logo,
        height: logo
    },

    postsContainer: {
        flex: 2,
        marginTop: 15,
    },
    post: {
        flexDirection: 'row',
        height: DIMENSION(40),
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15
    },
    addIcon: {
        fontSize: 65,
        color: '#333'
    },
    userInfoText: {
        color: '#fff',
        fontSize: 22,
        marginRight: 5,
        fontWeight: '900',
    },
    userInfo: {
        marginTop: 15,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userProfile: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    userInfor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgProfile: {
        width: userIMG,
        height: userIMG
    },
    container: {
        flex: 1,
        // backgroundColor: COLORS.BACKGROUND,
    },

    body: {
        flex: 1,
    },
});
export default MeScreen;
