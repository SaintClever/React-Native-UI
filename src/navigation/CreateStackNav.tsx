import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import GetStartedScreen from "../screens/GetStartedScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
import { RootStackParamsList } from "./RootStackParamsList";

const Stack = createStackNavigator<RootStackParamsList>();

function CreateStackNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} />
    </Stack.Navigator>
  );
}

export default CreateStackNav;
