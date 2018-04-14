import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import Register from './app/screens/Register';
import Login from './app/screens/Login';
import HomePage from './app/screens/HomePage';

const AppStackNavigator = StackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    HomePage: {
        screen: HomePage
    }
})
export default () => < AppStackNavigator />;