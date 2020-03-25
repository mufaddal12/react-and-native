import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

class Settings extends Component {
  constructor() {
    super();
    console.log("Constructor - Settings");
  }

  state = {};
  render() {
    console.log("Render - Settings");
    return (
      <React.Fragment>
        <View style={{ top: 100 }}>
          <Text></Text>
          <Button onPress={this.props.screenProps["logout"]} title="Logout" />
        </View>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("Mounted - Settings");
  }
}

export default Settings;
