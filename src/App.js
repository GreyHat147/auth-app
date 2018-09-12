import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBVh-BPu-V_6PtAalMZClXnMiYHgC-L1b4",
            authDomain: "authentication-43726.firebaseapp.com",
            databaseURL: "https://authentication-43726.firebaseio.com",
            projectId: "authentication-43726",
            storageBucket: "authentication-43726.appspot.com",
            messagingSenderId: "696532355234"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;