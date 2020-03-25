import { createStackNavigator } from "react-navigation-stack";
import Home from "../components/home";
import RestaurantDetail from "../components/restaurantdetail";

const screens = {
  Home: {
    screen: Home
  },
  RestaurantDetail: {
    screen: RestaurantDetail
  }
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;
