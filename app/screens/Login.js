import React, { Component } from 'react';
import { StyleSheet, View, Button, KeyboardAvoidingView, TextInput, Text, TouchableOpacity } from 'react-native';

import Register from "./Register";
import HomePage from './HomePage';

import firebase from '../firebase';

export default class Login extends Component {

    constructor (props){
        super(props);

        this.state=({
            email: '',
            password: '',
            user: null
        })
    }
    LoginUser ( that) {
            status = firebase.auth().signInWithEmailAndPassword(that.state.email, that.state.password).then(function (user) {
                that.props.navigation.navigate('HomePage')
            }, function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            })
    }

    render() {
        //this.props.navigation
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput style={styles.input}
                           autoCorrect = { false }
                           autoCapitalize = "none"
                           placeholder="Email"
                           onChangeText={ (email) => this.setState({email})}
                />
                <TextInput style={styles.input}
                           autoCorrect = { false }
                           autoCapitalize = "none"
                           placeholder="Password"
                           secureTextEntry = { true }
                           onChangeText={ (password) => this.setState({password})}
                />
                <TouchableOpacity
                    onPress={ () => this.LoginUser ( this )}

                    //onPress={() => this.props.navigation.navigate('HomePage')}
                    title={"HomePage"}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                    <Button
                        onPress={() => this.props.navigation.navigate('Register')}
                        title={"Register"}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

Login.navigationOptions = {
    title: "Login"
};

const styles = StyleSheet.create({
   container : {
        flex: 1,
        backgroundColor: '#bdc3c7',
        alignItems: 'center',
        padding: 10,
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