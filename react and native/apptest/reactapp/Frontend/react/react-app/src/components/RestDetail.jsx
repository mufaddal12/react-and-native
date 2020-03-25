import React, { Component } from "react";
import Axios from "axios";
import url from "../global";

const myApi = url + "data/";

class RestDetail extends Component {
  state = {
    id: 0,
    restaurant: {}
  };

  render() {
    const rest = this.state.restaurant;
    return (
      <React.Fragment>
        <div class="alert alert-primary" role="alert">
          <p class="mb-0">Name : {rest.name}</p>
          <p class="mb-0">Address : {rest.address}</p>
          <p class="mb-0">
            Menu : {rest.menu}
            <ul>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
            </ul>
          </p>
        </div>
      </React.Fragment>
    );
  }

  /* componentDidMount() {
    let id = this.props.match.params.id;
    console.log("Item " + id + " Detail Mounted");

    Axios.get(myApi + id)
      .then(response => {
        this.setState({ restaurant: response.data });
      })
      .catch(console.log);
  }*/

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.id;
    console.log("Item " + id + " Detail Mounted");

    //this for api with token auth
    const body = {
      headers: {
        Authorization: `Token ` + window.token
      }
    };

    Axios.get(myApi + id, body)
      .then(response => {
        this.setState({ restaurant: response.data });
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

export default RestDetail;
