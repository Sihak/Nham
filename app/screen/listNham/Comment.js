//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Comment extends Component {
  

    dateTime(rate = 1) {
        return (
            <View style={styles.dateTime}>
                <Text style={{ color: '#929292' }}>May 06, 2018 </Text>
            </View>
        )
    }
    commentRender(profImg, name, comment, rate) {
        return (
            <View style={styles.commentContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        resizeMode={'cover'}
                        source={{ uri: this.state.illustration }}
                        style={styles.ImgProfile} />
                </View>
                <View style={styles.commentAndName}>
                    <View style={styles.nameAndRate}>
                        <Text style={styles.name}>Sihak Chau</Text>
                        {this.dateTime()}
                    </View>
                    <Text style={styles.comment}>This place is very nice, I highly recommend all of you visit there once in your life. </Text>
                </View>
            </View>
        )
    }

    renderComment(){
        return(
            <View>
            {this.renderMyComment()}
            {this.commentRender()}
            </View>
        )
    }

    renderMyComment(profImg, comment, rate) {
        return (
            <View style={styles.commentContainer}>
                <TouchableOpacity 
                activeOpacity = {0.8}
                style={styles.myCommentAndName}>
                    <View style={styles.nameAndRate}>
                        {this.dateTime()}
                        <Text style={styles.name}>me</Text>
                    </View>
                    <Text style={styles.comment}>This place is very nice, I highly recommend all of you visit there once in your life. </Text>
                </TouchableOpacity>
                <View style={[styles.profileContainer, { marginLeft: 5 }]}>
                    <Image
                        resizeMode={'cover'}
                        onLoad={() => this.setState({ loading: false })}
                        source={{ uri: this.state.illustration }}
                        style={styles.ImgProfile} />
                </View>

            </View>
        )
    }

    renderOnComment(){
        return(
            <View style={styles.commentContainer}>
            <View style={styles.myCommentAndName}>
                <View style={styles.nameAndRate}>
                    {this.dateTime()}
                    <Text style={styles.name}>me</Text>
                </View>
                <TextInput 
                multiline = {true}
                maxLength = {120}
                placeholder = {'say something...'}
                style={styles.comment}/>
            </View>
            <View style={[styles.profileContainer, { marginLeft: 5 }]}>
                <Image
                    resizeMode={'cover'}
                    onLoad={() => this.setState({ loading: false })}
                    source={{ uri: this.state.illustration }}
                    style={styles.ImgProfile} />
            </View>
        </View>
        )
    }
    render() {
        return (
            <View>
                {this.renderOnComment()}
                {this.renderComment()}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    commentContainer: {
        marginHorizontal: APPEARANCES.MARGIN,
        marginVertical: APPEARANCES.MARGIN - 10,
        flexDirection: 'row'
    },
    commentAndName: {
        width: DIMENSION(80),
        marginLeft: 5,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderColor: '#333',
        padding: APPEARANCES.MARGIN,
        backgroundColor: '#EFEFEF'
    },
    myCommentAndName: {
        width: DIMENSION(80),
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderColor: '#333',
        padding: APPEARANCES.MARGIN,
        backgroundColor: 'rgba(0,191,255,0.2)'
    },
    profileContainer: {
        width: DIMENSION(12),
        height: DIMENSION(12),
        overflow: 'hidden',
        borderRadius: 50,
    },
    ImgProfile: {
        width: '100%',
        height: '100%'
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: DIMENSION(1.5),
        letterSpacing: 0.5,
    },
    comment: {
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: 0.5,
        lineHeight: 18
    },
    nameAndRate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    dateTime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: DIMENSION(1.5)
    }
});

export default Comment;
