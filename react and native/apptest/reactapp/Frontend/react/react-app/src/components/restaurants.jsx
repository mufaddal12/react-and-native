import React, { Component } from "react";
import Restaurant from "./restaurant";
import Axios from "axios";
import url from "../global";

const myApi = url + "data/";

class Restaurants extends Component {
  state = {
    restaurants: []
  };

  constructor() {
    super();
    console.log("Restaurants - constructor");
  }

  render() {
    console.log("App - render");
    return (
      <div>
        {this.state.restaurants.map(restaurant => (
          <div>
            <h1></h1>
            <Restaurant restaurant={restaurant} />
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    console.log("Restaurants - mounted");

    //this for api with token auth
    const body = {
      headers: {
        Authorization: `Token ` + this.props.state.token
      }
    };

    Axios.get(myApi, body)
      .then(response => {
        this.setState({ restaurants: response.data });
      })
      .catch(console.log);

    //this for api with no token auth
    /*Axios.get(myApi)
      .then(response => {
        this.setState({ restaurants: response.data });
      })
      .catch(console.log);*/
  }
}
export default Restaurants;
