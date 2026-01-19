import { FC } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";

interface WeekendSaleProps {
  dealCopy: string,
  buttonCopy: string,
  buttonColor?: string,
  buttonCopyColor?: string,
  bgColor: string,
}

const WeekendSale: FC<WeekendSaleProps> = ({ dealCopy, buttonCopy, buttonColor, buttonCopyColor, bgColor }) => {
  return (
    <View style={{
      width: s(275),
      height: vs(115),
      borderRadius: s(15),
      backgroundColor: bgColor,
      justifyContent: "center",
      paddingHorizontal: s(19),
    }}>
      <Text style={{
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: s(16),
        paddingRight: s(19),
        marginBottom: vs(14),
      }}>{ dealCopy }</Text>
      <View style={{
        width: s(80),
        height: vs(34),
        borderRadius: s(18),
        backgroundColor: buttonColor,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
          fontWeight: 700,
          color: buttonCopyColor,
        }}>{ buttonCopy }</Text>
      </View>
    </View>
  );
};

export default WeekendSale;

const styles = StyleSheet.create({});