import { Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import { LinearGradient } from 'expo-linear-gradient';
import MaintButton from "../components/MainButton";


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
      <Text style={styles.subtitle}>
        Find it here, buy it now!
      </Text>
      <MaintButton title={"Get Started"} />
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
    marginTop: vs(250)
  },
  subtitle: {
    marginTop: vs(14),
    marginBottom: vs(44),
    fontWeight: 400,
    fontSize: s(14),
    color: "#F2F2F2",
  }
});