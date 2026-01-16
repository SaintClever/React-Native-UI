import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import InputField from "../components/InputField";
import Ionicons from "@expo/vector-icons/Ionicons";
import FangLogo from "../components/FangLogo";
import { Google, Apple, Facebook } from "../assets/Icons";

const LogInScreen = () => {
  const companyLogos = [
    {
      "id": 0,
      "name": <Google />
    },
    {
      "id": 1,
      "name": <Apple />,
    },
    {
      "id": 2,
      "name": <Facebook />
    }
  ];

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
      <View style={{
        marginTop: vs(75),
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{ color: "#575757" }}>- OR Continue with -</Text>
        <View style={{
          marginTop: vs(15),
          flexDirection: "row",
          width: s(194),
          justifyContent: "space-between",
        }}>
          {companyLogos.map((company) => (
            <FangLogo logo={company.name} key={company.id}/>
          ))}
        </View>
        <Text style={{ marginTop: vs(25), color: "#575757" }}>
          Create An Account <Text style={{ fontWeight: 600, textDecorationLine: "underline", color: "#F83758" }}>Sign Up</Text>
        </Text>
      </View>
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
