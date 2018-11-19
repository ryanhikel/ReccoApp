import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  Dimensions,
  ScrollView
} from "react-native";
import firebase from "react-native-firebase";
import { Header, Icon, ListItem, CheckBox, Button } from "react-native-elements";
import SingleFollower from "./SingleFollower"
import {AccessToken, GraphRequest} from 'react-native-fbsdk'
export default class Following extends React.Component {
                 state = { checked: true, title: "DESELECT ALL" };
                 componentDidMount() {
                   fetchFriends = async () => {
                     let token = await AccessToken.getCurrentAccessToken().then(data => data.accessToken);
                     console.log(token);
                     let data = await fetch(`https://graph.facebook.com/me/friends?access_token=${token}`);
                     let response = await data.json();
                     console.log(data);
                     console.log(response);
                   };
                   fetchFriends();
                 }

                 render() {
                   const list = [{ name: "Amy Farha", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", subtitle: "Vice President" }, { name: "Chris Jackson", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", subtitle: "Vice Chairman" }, { name: "Amy Farha", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", subtitle: "Vice President" }, { name: "Chris Jackson", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", subtitle: "Vice Chairman" }, { name: "Amy Farha", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", subtitle: "Vice President" }, { name: "Chris Jackson", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", subtitle: "Vice Chairman" }, { name: "Amy Farha", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", subtitle: "Vice President" }, { name: "Chris Jackson", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", subtitle: "Vice Chairman" }, { name: "Amy Farha", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", subtitle: "Vice President" }, { name: "Chris Jackson", avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", subtitle: "Vice Chairman" }];

                   return <View style={styles.container}>
                       <Header outerContainerStyles={styles.outerContainerStyles} innerContainerStyles={styles.innerContainerStyles} leftComponent={<Icon name="arrow-left" type="simple-line-icon" />} centerComponent={{ text: "Select People to Follow", style: { color: "#fff" } }} rightComponent={<Icon name="arrow-right" type="simple-line-icon" onPress={() => {
                               this.props.navigation.navigate("Following");
                             }} />} />

                       <ScrollView>
                         <Button title={this.state.title} onPress={() => {
                             if (this.state.title === "DESELECT ALL") {
                               console.log("sanity check");
                               this.setState({
                                 checked: !this.state.checked,
                                 title: "SELECT ALL"
                               });
                             } else if (this.state.title === "SELECT ALL") {
                               this.setState({
                                 checked: !this.state.checked,
                                 title: "DESELECT ALL"
                               });
                             }
                           }} />
                         {list.map((l, i) => {
                           return <SingleFollower followers={l} checked={this.state.checked} key={i} />;
                         })}
                       </ScrollView>
                     </View>;
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
