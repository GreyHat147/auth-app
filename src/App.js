import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {
    state = { loggedIn: null, fireApp: null };
    componentWillMount() {

        fireApp = !firebase.apps.length ? firebase.initializeApp({
            apiKey: "AIzaSyBVh-BPu-V_6PtAalMZClXnMiYHgC-L1b4",
            authDomain: "authentication-43726.firebaseapp.com",
            databaseURL: "https://authentication-43726.firebaseio.com",
            projectId: "authentication-43726",
            storageBucket: "authentication-43726.appspot.com",
            messagingSenderId: "696532355234"
        }) : firebase.app();

        fireApp.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn : true });
            } else {
                this.setState({ loggedIn : false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.buttonLogout}>
                        <Button onPress={() => fireApp.auth().signOut()}>
                            Log out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>
        }   
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                { this.renderContent() }
            </View>
        );
    }
}

const styles = {
    buttonLogout: {
        margin: 10,
        height: 30
    }
};
export default App;