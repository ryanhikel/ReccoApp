import React from 'react'
import {
  StyleSheet,
  View,
  Button,
  Dimensions
} from "react-native";
import {Card
} from "react-native-elements";

export default class CategoryBox extends React.Component {



  render() {
    let categories = [{ title: "Books", image: '256x256bb.jpg' }, { title: "Fitness", image: '256x256bb.jpg' }, { title: "Electronics", image: '256x256bb.jpg' }, { title: "Outdoors", image: '256x256bb.jpg' }, { title: "Health & Beauty", image: '256x256bb.jpg' }, { title: "Apparel", image: '256x256bb.jpg' }]
    return (
    <View style = {styles.container} >
      {categories.map((category, i) => {
          return <Card key = {i} image={require(`./img/256x256bb.jpg`)} containerStyle={{ height: 150, width: 175, paddingTop: 0 }} featuredTitle={category.title} onPress = {()=>{
            Text.style.color = 'yellow'
          }} />
      })}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
