import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Restaurant extends Component {
  state = {
    data: {
      id: 1,
      name: "muf12",
      address: "add for obj3",
      writer: 3,
      menu: "menu for obj3",
      pub_date: "2020-03-18T14:15:52.154633Z"
    }
  };
  constructor() {
    super();
    console.log("Restaurant - constructor");
  }

  render() {
    console.log("Restaurant - render");
    return (
      <React.Fragment>
        <Link to={"/" + this.state.data.id} style={{ textDecoration: "none" }}>
          <div class="alert alert-primary" role="alert">
            <h3 class="alert-heading">{this.state.data.name}</h3>
            <hr></hr>
            <h5 class="alert-heading">Menu: </h5>
            <p class="mb-0">{this.state.data.menu}</p>
          </div>
        </Link>
      </React.Fragment>
    );
  }

  dispData() {
    let ret = "";
    let i;
    for (i in this.state.data) {
      ret += i + ": " + this.state.data[i] + <br />;
    }
    return ret;
  }

  componentDidMount() {
    console.log("Restaurant - mounted");
    this.setState({ data: this.props.restaurant });
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.Restaurant.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Restaurant;
