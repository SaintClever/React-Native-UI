import { View, Text, StyleSheet } from "react-native";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Stylish</Text>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
