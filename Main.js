import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Dimensions, ScrollView } from 'react-native'
import firebase from 'react-native-firebase'
import { Header, Icon } from "react-native-elements";
import CategoryBox from './CategoryBox';

export default class Main extends React.Component {

  handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }



  render() {

    return (
      <View style={styles.container}>
      < Header
      outerContainerStyles = {styles.outerContainerStyles}
      innerContainerStyles = {styles.innerContainerStyles}
      leftComponent = {
       < Icon
       name = 'arrow-left'
       type = 'simple-line-icon'
        />

      }
      centerComponent = {
        {
          text: 'Select Categories',
          style: {
            color: '#fff'
          }
        }
      }
      rightComponent = {
                 < Icon
                 name = 'arrow-right'
                 type = 'simple-line-icon'
                  />
      }
      />

        <Button title="Log Out" onPress={this.handleLogOut} />

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  outerContainerStyles: {
    width: Dimensions.get('window').width,

  },
  innerContainerStyles:{
    alignItems: 'center'
  }
})
