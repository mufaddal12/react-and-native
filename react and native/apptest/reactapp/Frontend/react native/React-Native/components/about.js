import React, { Component } from "react";
import { View, Text } from "react-native";

class About extends Component {
  constructor() {
    super();
    console.log("Constructor - About");
  }

  state = {};

  render() {
    console.log("Render - About");
    return (
      <React.Fragment>
        <View>
          <Text style={{ fontSize: 25 }}>About Page</Text>
        </View>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("Mounted - About");
  }
}

export default About;
