import React, { Component } from "react";
import { Text, View } from "react-native";

class RestaurantDetail extends Component {
  constructor() {
    super();
    console.log("Constructor - Detail");
  }

  state = {};

  render() {
    console.log("Render - Detail");
    return (
      <React.Fragment>
        <View style={{ top: 10 }}>
          <Text>{this.props.navigation.getParam("name")}</Text>
          <Text>{this.props.navigation.getParam("address")}</Text>
          <Text>{this.props.navigation.getParam("menu")}</Text>
        </View>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("Mounted - Detail");
  }
}

export default RestaurantDetail;
