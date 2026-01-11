import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Logo } from "../assets/Icons";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
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
