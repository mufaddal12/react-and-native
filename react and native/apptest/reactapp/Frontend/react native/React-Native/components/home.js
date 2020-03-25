import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import url from "../global";
import Axios from "axios";

const myApiUrl = url + "data/";

class Home extends Component {
  constructor() {
    super();
    console.log("Constructor - Home");
  }

  state = {
    restaurants: []
  };

  render() {
    console.log("Render - Home");
    return (
      <React.Fragment>
        <View style={{ top: 10 }}>
          <FlatList
            data={this.state.restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("RestaurantDetail", item)
                }
              >
                <Text style={{ fontSize: 25 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("Mounted - Home");
    const token = this.props.screenProps["state"]["token"];
    console.log(token);

    const body = {
      headers: {
        Authorization: `Token ` + token
      }
    };

    Axios.get(myApiUrl, body)
      .then(response => {
        this.setState({ restaurants: response.data });
      })
      .catch(console.log);
  }
}

export default Home;
