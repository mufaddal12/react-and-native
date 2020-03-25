import { createStackNavigator } from "react-navigation-stack";
import Settings from "../components/settings";

const screens = {
  Settings: {
    screen: Settings
  }
};

const SettingStack = createStackNavigator(screens);

export default SettingStack;
