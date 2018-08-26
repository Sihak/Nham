//import liraries
import React, { Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity , SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Locations from './PlaceStore.js';
import PrimaryHeader from '../../component/primaryHeader/index.js';
class FilterScreen extends Component {
    onSelectData = (forShow,name) => {
        this.props.navigation.state.params.returnData(forShow,name);
        this.props.navigation.goBack()
    }
    render() {
        // console.log('PLACE', PlaceStore.places)
        return (
            <SafeAreaView style={styles.container}>
                <View style = {{ paddingLeft: 25 }} >
                <PrimaryHeader 
                 color = '#333'
                 tittle={'back'}
                 onBackPressed={() => this.props.navigation.goBack()}
                />
                </View>
                <FlatList 
                data = {Locations}
                keyExtractor={(item, index) => index.toString()}
                renderItem = { ({item}) => 
                    <TouchableOpacity
                     onPress = {() => this.onSelectData(item.forShow,item.name)}
                     style ={ styles.itemContainer} > 
                    <Ionicons name='md-pin' style={{ fontSize: 16, color: '#32D6FA', marginRight:5 }} />                                            
                    <Text style = { styles.item } > {item.forShow} </Text>
                     </TouchableOpacity> }
                 />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        height: 50,
        flex:1,
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        flexDirection: 'row',
        borderBottomWidth:0.2
    }
});

export default FilterScreen;

