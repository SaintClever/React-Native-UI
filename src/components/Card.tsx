import { View, Text, StyleSheet, Image } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Heart } from "../assets/Icons";

const Card = () => {
  return (
    <View style={[styles.container, styles.activeContainer]}>
      <View style={styles.subContainer}>
        <View style={[styles.halfOffContainer, styles.ActivehalfOffContainer]}>
          <Text style={[styles.halfOffText, styles.activeHalfOffText]}>50% OFF</Text>
        </View>
        <View style={styles.heartContainer}>
          <Heart />
        </View>
      </View>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Image
          source={require("../assets/1.png")}
          style={{
            width: s(80),
            height: vs(80)
          }}
        />
      </View>
      <View style={{
        paddingHorizontal: s(15)
      }}>
        <Text style={{
          fontWeight: 500,
          fontSize: s(14)
        }}>Redmi Note 4</Text>
      </View>
      <View style={{
        flexDirection: "row",
        paddingVertical: vs(5),
        paddingHorizontal: s(15),
        gap: s(25),
      }}>
        <Text style={{
          fontWeight: 800,
          fontSize: s(12)
        }}>₦ 45,000</Text>
        <Text style={{
          color: "#AFAFAF",
          fontWeight: 700,
          fontSize: s(10),
          textDecorationLine: "line-through"
        }}>₦ 55,000</Text>
      </View>

    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: s(150),
    height: vs(160),
    borderRadius: s(15),
    backgroundColor: "#F8F8F8",
  },
  activeContainer: {
    borderWidth: s(1),
    borderColor: "#F17547",
  },
  subContainer: {
    flexDirection: "row",
    paddingVertical: vs(5),
    paddingHorizontal: s(13),
    justifyContent: "space-between"
  },
  halfOffContainer: {
    width: s(55),
    height: vs(23),
    borderRadius: s(12),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  halfOffText: {
    fontWeight: 600,
    fontSize: s(10),
  },
  activeHalfOffText: {
    color: "#FFFFFF",
  },
  ActivehalfOffContainer: {
    backgroundColor: "#F17547",
  },
  heartContainer: {
    width: s(22),
    height: s(22),
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
  },
});