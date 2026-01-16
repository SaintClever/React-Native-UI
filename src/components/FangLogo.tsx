import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import { FC, ReactNode } from "react";

interface FangLogoProps {
  logo: ReactNode,
}

const FangLogos: FC<FangLogoProps> = ({ logo }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {logo}
    </TouchableOpacity>
  );
};

export default FangLogos;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: s(54),
    height: s(54),
    borderRadius: s(27),
    borderWidth: s(1),
    borderColor: "#F83758",
    backgroundColor: "#FCF3F6",
  }
});