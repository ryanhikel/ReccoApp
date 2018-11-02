import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase'
import {
  LoginManager,
  LoginButton,
  AccessToken
} from "react-native-fbsdk";

export default class Main extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="Log Out" onPress={this.handleLogOut} />
         {/* < LoginButton
         onLoginFinished = {
           (error, result) => {
             if (error) {
               console.log("login has error: " + result.error);
             } else if (result.isCancelled) {
               console.log("login is cancelled.");
             } else {
               AccessToken.getCurrentAccessToken()
                 .then(data => {
                   console.log(data.accessToken.toString());
                 })
                 .then(() =>
                   this.props.navigation.navigate("Main")
                 );
             }
           }
         }
         onLogoutFinished = {
           () => console.log("logout.")
         }
         /> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
