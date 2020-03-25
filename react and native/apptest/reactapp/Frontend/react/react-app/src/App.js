import React, { Component } from "react";
import "./App.css";
import Restaurants from "./components/restaurants";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestDetail from "./components/RestDetail";
import Axios from "axios";
import url from "./global";

window.token = "";
window.username = "";

const myApi = url + "login/";

const Home = () => (
  <div>
    <p>Home</p>
  </div>
);

const About = () => (
  <div>
    <p>About</p>
  </div>
);

class App extends Component {
  state = {
    restaurants: [],
    todos: [],
    isLoggedIn: false,
    username: "mufa_ddal",
    password: "logmein123",
    token: ""
  };

  constructor() {
    super();
    console.log("App - constructor");
  }

  authenticate = () => {
    const username = this.state.username;
    const password = this.state.password;

    const parse = {
      username: username,
      password: password
    };

    Axios.post(myApi, parse).then(res => {
      const data = res.data;
      console.log(data);
      if (data["authenticate"]) {
        console.log("Authenticated");
        window.token = data["token"];
        window.username = username;
        this.setState({ token: data["token"] });
      } else {
        console.log("Not Authenticated");
      }
    });
  };

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  logout = () => {
    this.setState({ token: "", username: "", password: "" });
  };

  render() {
    console.log("App - render");
    if (this.state.token) {
      return (
        <React.Fragment>
          <Router>
            <div>
              <NavBar logout={this.logout} />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Restaurants state={this.state} />}
                />
                <Route path="/about" render={() => <About />} />
                <Route path="/:id" component={RestDetail} />
              </Switch>
            </div>
          </Router>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div style={{ top: 50 }}>
            <p style={{ fontSize: 27 }}>Login</p>
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsername}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={this.handlePassword}
              value={this.state.password}
            />
            <button onClick={this.authenticate} value="Submit">
              Submit
            </button>
          </div>
        </React.Fragment>
      );
    }
  }

  componentDidMount() {
    console.log("App - mounted");
    //fetching api from my api
  }
}

export default App;
