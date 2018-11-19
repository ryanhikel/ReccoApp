import React from "react";
import { StyleSheet, View, Button, Dimensions } from "react-native";
import { Tile } from "react-native-elements";

export default class CategoryBox extends React.Component {
  state = {
    icon: undefined
  };

  render() {
    console.log(this.state.icon)

    return (
      <View style={styles.container}>
            <Tile
              featured
              imageSrc={require(`./img/256x256bb.jpg`)}
              containerStyle={{
                height: 150,
                width: 175,
                paddingTop: 0,
                margin: 5
              }}
              imageContainerStyle={{
                height: 150,
                width: 175,
                paddingTop: 0
              }}
              title={this.props.category.title}
              onPress={() => {
                console.log("clicked");
                if(this.state.icon === undefined){
                return this.setState({icon: { name: "check-circle", type: "font-awesome", color: 'green' }});
              }
              else {
                this.setState({icon: undefined})
              }
            }}

              icon={this.state.icon}
            />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
  }
});
