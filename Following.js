import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView
} from "react-native";
import firebase from "react-native-firebase";
import { Header, Icon, ListItem, CheckBox } from "react-native-elements";
import SingleFollower from "./SingleFollower"
// import {AccessToken, GraphRequest} from 'react-native-fbsdk'
export default class Following extends React.Component {

  state = {
    checked: false
  }

  render() {
    // let token;
    // ${AccessToken.getCurrentAccessToken().then(data => console.log(data.accessToken))}
    // console.log(token)
    fetch(`https://graph.facebook.com/me/friends?access_token=EAARiqxMhPEYBAJZBCaNBUbfAj7Thh4fhSLV5cEOFDmUPMypg8Tv0WD9xhzACbSX4ZC9YXLakdP2ym5a3ZACmOY9ZBOMX4faAjloCcYfemCnfNKUIAE9rrL6r264GNONp7jgNwD1REiXqi2OY99Km46LvcG9VVsHeM6sNvFHv5G55yWRQXlaYSfNFvp2IJ7WZASbZBWOXBg8hZAdvgJuWAitCtZAyA0NcMUpmJmLZC47tEZAgZDZD`)
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(data => {
        console.log(data);
      });
    const list = [
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
    ];

    return (
      <View style={styles.container}>
        <Header
          outerContainerStyles={styles.outerContainerStyles}
          innerContainerStyles={styles.innerContainerStyles}
          leftComponent={<Icon name="arrow-left" type="simple-line-icon" />}
          centerComponent={{
            text: "Select People to Follow",
            style: {
              color: "#fff"
            }
          }}
          rightComponent={
            <Icon
              name="arrow-right"
              type="simple-line-icon"
              onPress={() => {this.props.navigation.navigate("Following")}}
            />
          }
        />

        <ScrollView>
          {
            list.map((l, i) => { return <SingleFollower followers = {l} key = {i} />
            })
          }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  outerContainerStyles: {
    width: Dimensions.get("window").width
  },
  innerContainerStyles: {
    alignItems: "center"
  }
});
