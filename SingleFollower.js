import React from "react";
import {
  StyleSheet,
  Dimensions,
} from "react-native";
import { ListItem, CheckBox } from "react-native-elements";
export default class SingleFollower extends React.Component {
  state = {
    checked: true
  };

  render() {

      return (
        <ListItem
          containerStyle={{
            width: Dimensions.get("window").width
          }}
          onPress={() => {
            this.setState({checked: !this.state.checked});
          }}
          rightIcon={
            <CheckBox
              containerStyle={{
                borderColor: "#fff",
                backgroundColor: "#fff"
              }}
              checked={this.state.checked}
              onPress={() => {
                this.setState({ checked: !this.state.checked });
              }}
            />
          }
          leftAvatar={{ source: { uri: this.props.followers.avatar_url } }}
          title={this.props.followers.name}
          subtitle={this.props.followers.subtitle}
        />
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
