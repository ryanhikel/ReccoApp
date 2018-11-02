import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'
import { LoginManager, LoginButton, AccessToken } from "react-native-fbsdk";
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const email = this.state.email;
    const password = this.state.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

//   handleFbLogin = () => {
//   LoginManager.logInWithReadPermissions(['public_profile', 'user_friends']).then(
//   function (result) {
//     if (result.isCancelled) {
//       console.log('Login cancelled');
//     } else {
//       console.log(this.props)
//        this.props.navigation.navigate("Main")

//       console.log('Login success with permissions: ' +
//         result.grantedPermissions.toString())
//     }
//   },
//   function (error) {
//     console.log('Login fail with error: ' + error);
//   }
// );
//   }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        {/* <Button title="Login W/ Facebook" onPress={thics.handleFbLogin} /> */}
        <LoginButton
          onLoginFinished={
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
          onLogoutFinished={() => console.log("logout.")} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
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
