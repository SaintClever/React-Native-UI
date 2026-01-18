import { Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { s } from "react-native-size-matters";
import { LinearGradient } from 'expo-linear-gradient';


const GetStartedScreen = () => {
  return(
    <ImageBackground
      source={require("../assets/ImageBackground.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      />
      <Text style={styles.title}>
        You want Authentic, here you go!
      </Text>
    </ImageBackground>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    color: "#FFF",
    fontWeight: 600,
    fontSize: s(34),
    textAlign: "center",
    paddingHorizontal: s(40),
  }
});