//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, Dimensions, TextInput, TouchableOpacity, Picker } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../component/searchInput';
import Carousel from '../../component/subCarousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SafariCard from './SafariCard';
import testingData from '../../asset/testingData';
import MainHeader from '../../component/header';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class ListNham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tittle: this.props.navigation.state.params,
            selectedProvinceForShow: '',
            selectedPrvinceName: '',
            tittlePage: this.props.navigation.state.params.tittle,
        }
    }

    itemSeperator() {
        return (
            <View style={{ height: DIMENSION(5) }} ></View>
        )
    }

    returnData(forShow, name) {
        this.setState({
            selectedProvinceForShow: forShow,
            selectedPrvinceName: name
        })
    }

    render() {
        return (
            <View style = {{flex:1}}>
            <Image style = {{position:'absolute'}} source = {require('../../asset/img/bg.jpg')} />
            <SafeAreaView style={[{ flex: 1, alignItems: 'center' }]}>
                <View style={[styles.header]}>
                    <MainHeader 
                    color = {'#fff'}
                    back = {true}
                    tittle = {this.state.tittlePage}
                    backPressed = {() => this.props.navigation.goBack()}
                     />
                    <SearchInput
                        placeholder={'Where do you want to go?'}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Filter', { returnData: this.returnData.bind(this) })}
                        style={[{ marginTop: 10, backgroundColor: '#fff', height: 33, width: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 8, flexDirection: 'row', marginHorizontal: DIMENSION(4), }, APPEARANCES.SHADOW]} >
                        <Ionicons name='md-pin' style={{ fontSize: 16, color: '#32D6FA', marginRight: 5 }} />
                        <Text> {(this.state.selectedProvinceForShow != '' ? this.state.selectedProvinceForShow : 'All').toUpperCase()} </Text>
                    </TouchableOpacity>
                </View>
                <FlatList style={styles.body}
                    ItemSeparatorComponent={() => this.itemSeperator()}
                    data={testingData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <SafariCard
                            cardPressed={ () => this.props.navigation.navigate('ViewNham',{
                                illustration:item.illustration,
                                tittle: item.title
                            }) }
                            cover={item.illustration}
                            tittle={item.title}
                        />
                    }
                />
            </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: DIMENSION(41),
        width: DIMENSION(100),
    },

    body: {
        flex: 1,
    }
});

export default ListNham;
