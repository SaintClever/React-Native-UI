import { View, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FC } from "react";

interface EllipseProps {
  icon: string;
}

const Ellipse: FC<EllipseProps> = ({ icon }) => {
  return (
    <View
      style={styles.container}>
      <FontAwesome6 name={icon} size={22} color="black" />
    </View>
  );
};

export default Ellipse;

const styles = StyleSheet.create({
  container: {
    width: s(41),
    height: s(41),
    borderRadius: s(21),
    backgroundColor: "#D9D9D940",
    justifyContent: "center",
    alignItems: "center"
}
});