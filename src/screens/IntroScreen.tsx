import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Logo } from "../assets/Icons";
import { RootStackParamsList } from "../navigation/RootStackParamsList";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

type IntroNavProp = StackNavigationProp<RootStackParamsList, "IntroScreen">;

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Logo />
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
