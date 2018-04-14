import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Feed from '../TabNavigation/Feed';
import Upload from '../TabNavigation/Upload';
import Chat from '../TabNavigation/Chat';

import firebase from '../firebase';

export default class HomePage extends Component {

    static navigationOptions = {
        headerLeft:
        <TouchableOpacity>
            <Icon name={"ios-search"} style={{paddingLeft:10}}/>
        </TouchableOpacity>,
        title: "NumIS",
        headerRight:
        <TouchableOpacity/* onPress={() => this.props.navigation.navigate('Login')}*/>
            <Icon name={"ios-log-out-outline"} style={{paddingRight:10}}/>
        </TouchableOpacity>
    }
    render () {
        return (
            <AppTabNavigator />
        );
    }
}

const AppTabNavigator = TabNavigator({
    Feed: {
        screen: Feed
    },
    Upload: {
        screen: Upload
    },
    Chat: {
        screen: Chat
    }
})

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});