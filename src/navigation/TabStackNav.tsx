import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import GetStartedScreen from "../screens/GetStartedScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabStackNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "orange",
      }}
    >
      <Tab.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{
          title: "Intro",
          tabBarIcon: ({ color }) => (
            <AntDesign name="enter" size={20} color="grey" />
          ),
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={20} color="grey" />
          ),
        }}
      />
      <Tab.Screen
        name="GetStartedScreen"
        component={GetStartedScreen}
        options={{
          title: "Get Started",
          tabBarIcon: ({ color }) => (
            <AntDesign name="star" size={20} color="grey" />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingScreen"
        component={ShoppingScreen}
        options={{
          title: "Shopping",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shop" size={20} color="grey" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
