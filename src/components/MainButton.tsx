import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { FC } from "react";

interface MaintButtonProps {
  title: string
}

const MaintButton: FC<MaintButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MaintButton;

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: s(23),
  },
  button: {
    width: s(285),
    height: vs(50),
    borderRadius: s(4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F83758",
  }
});