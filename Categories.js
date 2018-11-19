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
import { Header, Icon } from "react-native-elements";
import CategoryBox from "./CategoryBox";

export default class Categories extends React.Component {
  render() {
    let categories = [
      {
        title: "Books",
        image: "256x256bb.jpg"
      },
      {
        title: "Fitness",
        image: "256x256bb.jpg"
      },
      {
        title: "Electronics",
        image: "256x256bb.jpg"
      },
      {
        title: "Outdoors",
        image: "256x256bb.jpg"
      },
      {
        title: "Health & Beauty",
        image: "256x256bb.jpg"
      },
      {
        title: "Apparel",
        image: "256x256bb.jpg"
      }
    ];
    return <View style={styles.container}>
        <Header outerContainerStyles={styles.outerContainerStyles} innerContainerStyles={styles.innerContainerStyles} leftComponent={<Icon name="arrow-left" type="simple-line-icon" />} centerComponent={{ text: "Select Categories", style: { color: "#fff" } }} rightComponent={<Icon name="arrow-right" type="simple-line-icon" onPress={() => {
                this.props.navigation.navigate("Following");
              }} />} />
        <ScrollView >
        <View style={styles.ScrollView}>
            {categories.map((category, i) => {
              return <CategoryBox category={category} key={i} />;
            })}
          </View>
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
  },
  ScrollView: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
