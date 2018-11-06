import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'
import {
  LoginManager,
  LoginButton,
  AccessToken
} from "react-native-fbsdk";

export default class SignUp extends React.Component {

  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
         < LoginButton
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
                   this.props.navigation.navigate("Categories")
                 );
             }
           }
         }
         onLogoutFinished = {
           () => {
             console.log("logout.")
             this.props.navigation.navigate('Login')
           }
         }
         />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
