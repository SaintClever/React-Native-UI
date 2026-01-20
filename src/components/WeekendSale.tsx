import { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";

interface WeekendSaleProps {
  dealCopy: string,
  buttonCopy: string,
  buttonColor?: string,
  buttonCopyColor?: string,
  bgColor: string,
}

const WeekendSale: FC<WeekendSaleProps> = ({
  dealCopy,
  buttonCopy,
  buttonColor,
  buttonCopyColor,
  bgColor
}) => {
  return (
    <TouchableOpacity>
      <View style={[ styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.copy}>{ dealCopy }</Text>
        <View style={[styles.button, { backgroundColor: buttonColor }]}>
          <Text style={{ fontWeight: 700, color: buttonCopyColor }}>
            { buttonCopy }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WeekendSale;

const styles = StyleSheet.create({
  container: {
    width: s(275),
    height: vs(115),
    borderRadius: s(15),
    justifyContent: "center",
    paddingHorizontal: s(19),
  },
  copy: {
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: s(16),
    paddingRight: s(19),
    marginBottom: vs(14),
  },
  button: {
    width: s(80),
    height: vs(34),
    borderRadius: s(18),
    justifyContent: "center",
    alignItems: "center",
  }
});