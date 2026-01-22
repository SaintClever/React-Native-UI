import { View, Text, StyleSheet, Image } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Heart } from "../assets/Icons";

const Card = () => {
  return (
    <View style={{
      width: s(150),
      height: vs(160),
      borderRadius: s(15),
      backgroundColor: "#F8F8F8",
    }}>

      <View style={{
        flexDirection: "row",
        paddingVertical: vs(5),
        paddingHorizontal: s(13),
        justifyContent: "space-between"
      }}>
        <View style={{
          width: s(55),
          height: vs(23),
          borderRadius: s(12),
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={{
            fontWeight: 600,
            fontSize: s(10)
          }}>50% OFF</Text>
        </View>
        
        <View style={{
          width: s(22),
          height: s(22),
          borderRadius: s(10),
          borderWidth: s(1),
          borderColor: "#D3D3D3",
          justifyContent: "center",
          alignItems: "center",
        }}>
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
          fontSize: s(14) }}>Redmi Note 4</Text>
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
  
});