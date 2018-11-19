import React from "react";
import {
  StyleSheet,
  Dimensions,
} from "react-native";
import { ListItem, CheckBox } from "react-native-elements";
// import Video from "react-native-video";
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
          onPress={(e) => {
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
                this.setState({ checked: !this.state.checked })
              }}
            />
          }
          leftAvatar={{ source: { uri: this.props.followers.avatar_url } }}
          title={this.props.followers.name}
          subtitle={this.props.followers.subtitle}
        />

        // <Video source={{ uri: "oculus" }}   // Can be a URL or a local file.
        //   ref={(ref) => {
        //     this.player = ref
        //   }}                                      // Store reference
        //   onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //   onEnd={this.onEnd}                      // Callback when playback finishes
        //   onError={this.videoError}               // Callback when video cannot be loaded
        //   style={styles.backgroundVideo} />

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
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
