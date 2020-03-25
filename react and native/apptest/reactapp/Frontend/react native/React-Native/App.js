import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import TabNavigator from "./navigation/tabnavigation";
import url from "./global";
import Axios from "axios";

const myApiUrl = url + "login/";

class Start extends Component {
  constructor() {
    super();
    console.log("Constructor - Start");
  }

  state = {
    username: "mufa_ddal",
    password: "logmein123",
    token: ""
  };

  //<Navigator logOut={() => this.setState({ isLoggedIn: false })} />

  render() {
    console.log("Render - Start");

    if (this.state.token) {
      console.log("Render - Start - Logged in");
      return (
        <React.Fragment>
          <TabNavigator
            screenProps={{
              logout: () => {
                this.setState({ token: "", username: "", password: "" });
              },
              state: this.state
            }}
          />
        </React.Fragment>
      );
    } else {
      console.log("Render - Start - not Logged in");
      return (
        <React.Fragment>
          <View style={{ top: 50 }}>
            <Text style={{ fontSize: 27 }}>Login</Text>
            <Input
              placeholder="Username"
              onChangeText={username => this.setState({ username: username })}
              value={this.state.username}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password: password })}
              value={this.state.password}
            />
            <View style={{ margin: 7 }} />
            <Button onPress={this.authenticate} title="Submit" />
          </View>
        </React.Fragment>
      );
    }
  }

  authenticate = () => {
    const username = this.state.username;
    const password = this.state.password;

    const parse = {
      username: username,
      password: password
    };

    Axios.post(myApiUrl, parse).then(res => {
      const data = res.data;
      console.log(data);
      if (data["authenticate"]) {
        console.log("Authenticated");
        this.setState({ token: data["token"] });
      } else {
        console.log("Not Authenticated");
      }
    });
  };

  componentDidMount() {
    console.log("Mounted - Start");
  }
}

export default Start;
//export default Hello;
