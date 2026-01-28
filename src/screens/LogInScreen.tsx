import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { s, vs } from "react-native-size-matters";
import InputField from "../components/InputField";
import Ionicons from "@expo/vector-icons/Ionicons";
import FangLogo from "../components/FangLogo";
import { Google, Apple, Facebook } from "../assets/Icons";
import MainButton from "../components/MainButton";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../navigation/RootStackParamsList";
import { useNavigation } from "@react-navigation/native";

type LoginNavProp = StackNavigationProp<RootStackParamsList, "LoginScreen">;

const LoginScreen = () => {
  const navigation = useNavigation<LoginNavProp>();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <InputField
          icon={"person"}
          placeholder={"Username or Email"}
          value={form.email}
          onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        />
        <InputField
          icon={"lock-closed"}
          placeholder={"Password"}
          secureTextEntry={true}
          iconTwo={<Ionicons name="eye" size={20} color="#626262" />}
          value={form.password}
          onChangeText={(text) =>
            setForm((prev) => ({ ...prev, password: text }))
          }
        />
        <Text style={styles.subtext}>Forgot Password?</Text>
        <MainButton
          title={"Login"}
          onPress={() => {
            if (form.email !== "" && form.password !== "") {
              // console.log(form.email, form.password);
              navigation.navigate("GetStartedScreen");
            } else {
              Alert.alert("No username (email) or password detected");
            }
          }}
        />
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
            {`Create An Account `}
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
    </ScrollView>
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
