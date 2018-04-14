import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Text, Button, TouchableOpacity, } from 'react-native';
import firebase from '../firebase';

import Login from '../screens/Login';

export default class Register extends Component {

    constructor (props){
        super(props)

        this.state=({
            firstName: '',
            email: '',
            password: '',
            verifyPassword: ''
        })
    }

    RegisterUser(email, password) {
        if (this.state.password.length < 6) {
            alert("Please enter at least 6 characters")
            return;
        }
        if (this.state.password == this.state.verifyPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
    })
            alert ("Successful registered!");
            this.props.navigation.navigate('Login')
        }
        else {
            alert("Passwords do not match")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput style={styles.input}
                           autoCorrect = { false }
                           autoCapitalize = "none"
                           placeholder="First name"
                           returnKeyType="next"
                           onChangeText={ (String) => this.setState({firstName: String})}
                />
                <TextInput style={styles.input}
                           autoCorrect = { false }
                           autoCapitalize = "none"
                           placeholder="Email"
                           onChangeText={ (text) => this.setState({email: text})}
                />
                <TextInput style={styles.input}
                           autoCorrect = { false }
                           autoCapitalize = "none"
                           placeholder="Password"
                           secureTextEntry = { true }
                           onChangeText={ (text) => this.setState({password: text})}
                />
                <TextInput style={styles.input}
                           autoCorrect = { false }
                           autoCapitalize = "none"
                           placeholder="Confirm password"
                           secureTextEntry = { true }
                           onChangeText={ (text) => this.setState({verifyPassword: text})}
                 />
                <TouchableOpacity
                    onPress={ () => this.RegisterUser ( this.state.email, this.state.password )}
                    style={styles.buttonContainer}>
                   <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

Register.navigationOptions = {
    title: "Register"
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#bdc3c7',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'flex-end'
    },
    input: {
        height: 40,
        backgroundColor: '#ecf0f1',
        paddingHorizontal: 16,
        marginBottom: 30,
        width: 300,
        borderRadius: 20
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