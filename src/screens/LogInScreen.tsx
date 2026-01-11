import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import InputField from "../components/InputField";
import Ionicons from "@expo/vector-icons/Ionicons";

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <InputField icon={"person"} placeholder={"Username or Email"} />
      <InputField
        icon={"lock-closed"}
        placeholder={"Password"}
        secureTextEntry={true}
        iconTwo={<Ionicons name="eye" size={20} color="#626262" />}
      />
      <Text style={styles.subText}>Forgot Password?</Text>

      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: s(20),
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: s(32),
    marginVertical: vs(63),
  },
  title: {
    fontWeight: 700,
    fontSize: s(36),
    paddingRight: s(126),
  },
  subText: {
    marginTop: s(9),
    textAlign: "right",
    fontWeight: 400,
    fontSize: s(12),
    color: "#F83758",
  },
  button: {
    marginTop: vs(52),
    height: vs(40),
    borderRadius: s(4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F83758",
  },
});
