import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import InputField from "../components/InputField";
import Ionicons from "@expo/vector-icons/Ionicons";
import FangLogo from "../components/FangLogo";
import { Google, Apple, Facebook } from "../assets/Icons";
import MaintButton from "../components/MainButton";

const LoginScreen = () => {
  const companyLogos = [
    {
      id: 0,
      name: <Google />,
    },
    {
      id: 1,
      name: <Apple />,
    },
    {
      id: 2,
      name: <Facebook />,
    },
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
      <Text style={styles.subtext}>Forgot Password?</Text>
      <MaintButton title={"Login"} />
      <View
        style={{
          marginTop: vs(75),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#575757" }}>- OR Continue with -</Text>
        <View
          style={{
            marginTop: vs(15),
            flexDirection: "row",
            width: s(194),
            justifyContent: "space-between",
          }}
        >
          {companyLogos.map((company) => (
            <FangLogo logo={company.name} key={company.id} />
          ))}
        </View>
        <Text style={{ marginTop: vs(25), color: "#575757" }}>
          Create An Account{" "}
          <Text
            style={{
              fontWeight: 600,
              textDecorationLine: "underline",
              color: "#F83758",
            }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  subtext: {
    marginTop: s(9),
    marginBottom: vs(52),
    textAlign: "right",
    fontWeight: 400,
    fontSize: s(12),
    color: "#F83758",
  },
});
