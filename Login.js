import React from "react";
import {StyleSheet, Text, TextInput, View, Dimensions} from "react-native";
import firebase from "react-native-firebase";
import { LoginManager, LoginButton, AccessToken } from "react-native-fbsdk";
import {Button, Icon} from 'react-native-elements'
export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
    fbUser: "",
    loggedIn: false
  };
  handleLogin = () => {
    const email = this.state.email;
    const password = this.state.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error =>
        this.setState({
          errorMessage: error.message
        })
      );
  };

  handleFbLogin = () => {
    LoginManager.logInWithReadPermissions([
      "public_profile",
      "user_friends",
      "user_age_range",
      "user_birthday",
      "user_likes"
    ]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
          console.log(result);
         return result

        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    ).then(result => {
    if (!result.isCancelled){
      this.props.navigation.navigate('Main')
    }})

  };
  render() {
    return <View style={styles.container}>
        <Text> Login </Text>
        {this.state.errorMessage && <Text style={{ color: "red" }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput style={styles.textInput} autoCapitalize="none" placeholder="Email" onChangeText={email => this.setState(
              {
                email
              }
            )} value={this.state.email} />
        <TextInput secureTextEntry style={styles.textInput} autoCapitalize="none" placeholder="Password" onChangeText={password => this.setState(
              {
                password
              }
            )} value={this.state.password} />
      <Button title="LOGIN" icon={{ type: 'material-community', name: "email", size: 20, color: "white" }} onPress={this.handleLogin} buttonStyle = {{backgroundColor: 'turquoise', width: Dimensions.get('window').width/2, borderRadius: 5,}} />
      <Button icon={{ type: 'material-community', name: "facebook-box", size: 20, color: "white" }} title="LOGIN" onPress={this.handleFbLogin} buttonStyle = {styles.buttonStyle} />

        {/* <LoginButton
                      onLoginFinished={
                        (error, result) => {
                          if (error) {
                            console.log("login has error: " + result.error);
                          } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                          } else {
                            AccessToken.getCurrentAccessToken()
                              .then(data => {
                                this.setState({fbUser: data});
                                console.log(this.state.fbUser)
                              })
                              .then(() =>
                                this.props.navigation.navigate("Main")
                              );
                          }
                        }
                      }
                      onLogoutFinished={() => console.log("logout.")} /> */}
      <Button title="SIGN UP" onPress={() => this.props.navigation.navigate("SignUp")} buttonStyle={{ backgroundColor: 'turquoise', width: Dimensions.get('window').width / 2, borderRadius: 5, }} />
      </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  },
  buttonStyle: {
    backgroundColor: "#3b5998",
    borderRadius: 5,
    marginVertical: 10,
    width: Dimensions.get('window').width / 2,
    fontSize: 8
  }
});
