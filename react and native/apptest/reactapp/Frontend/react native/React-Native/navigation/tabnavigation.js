import React from "react";
import { Image } from "react-native";
import HomeStack from "../screens/homestack";
import AboutStack from "../screens/aboutstack";
import { createAppContainer } from "react-navigation";
import SettingStack from "../screens/settingstack";
import { createBottomTabNavigator } from "react-navigation-tabs";

const rootTab = createBottomTabNavigator(
  {
    Home: HomeStack,
    About: AboutStack,
    Settings: { screen: SettingStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <Image
              source={require("../assets/home.png")}
              style={{ width: 25, height: 25 }}
            />
          );
        } else if (routeName === "Settings") {
          return (
            <Image
              source={require("../assets/settings.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        } else
          return (
            <Image
              source={require("../assets/about.jpeg")}
              style={{ width: 24, height: 24 }}
            />
          );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#FF6F00",
      inactiveTintColor: "#263238"
    }
  }
);

export default createAppContainer(rootTab);
