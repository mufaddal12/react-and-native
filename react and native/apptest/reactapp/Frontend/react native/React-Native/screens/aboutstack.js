import { createStackNavigator } from "react-navigation-stack";
import About from "../components/about";

const screens = {
  About: {
    screen: About
  }
};

const AboutStack = createStackNavigator(screens);

export default AboutStack;
