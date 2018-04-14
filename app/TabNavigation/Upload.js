import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
//import RNFetchBlob from 'react-native-fetch-blob';

export default class Upload extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name={"ios-add"} style={{ color: tintColor }} />
        )
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>UPLOAD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#95a5a6',
        paddingVertical: 15,
        width: 200,
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
});