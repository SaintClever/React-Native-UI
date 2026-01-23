import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { Heart } from "../assets/Icons";
import { FC } from "react";

const PhoneWidth = Dimensions.get("window").width;
const cardWidth = (PhoneWidth - s(16) * 4) / 2;

interface CardProps {
  sale?: string;
  image: ImageSourcePropType;
  title: string;
  currentPrice: string;
  originalPrice: string;
}

const Card: FC<CardProps> = ({
  sale,
  image,
  title,
  currentPrice,
  originalPrice,
}) => {
  return (
    <View
      style={[
        styles.container,
        // styles.activeContainer
      ]}
    >
      <View style={styles.subContainer}>
        <View
          style={[
            styles.halfOffContainer,
            // styles.ActivehalfOffContainer
          ]}
        >
          <Text
            style={[
              styles.halfOffText,
              // styles.activeHalfOffText
            ]}
          >
            {sale}
          </Text>
        </View>
        <View style={styles.heartContainer}>
          <Heart />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={image}
          style={{
            width: s(80),
            height: vs(80),
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: s(15),
        }}
      >
        <Text
          style={{
            fontWeight: 500,
            fontSize: s(14),
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: vs(5),
          paddingHorizontal: s(15),
          gap: s(25),
        }}
      >
        <Text
          style={{
            fontWeight: 800,
            fontSize: s(12),
          }}
        >
          {currentPrice}
        </Text>
        <Text
          style={{
            color: "#AFAFAF",
            fontWeight: 700,
            fontSize: s(10),
            textDecorationLine: "line-through",
          }}
        >
          {originalPrice}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: vs(160),
    borderRadius: s(15),
    backgroundColor: "#F8F8F8",
    marginBottom: vs(16),
  },
  activeContainer: {
    borderWidth: s(1),
    borderColor: "#1383F1",
  },
  subContainer: {
    flexDirection: "row",
    paddingVertical: vs(5),
    paddingHorizontal: s(13),
    justifyContent: "space-between",
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
    backgroundColor: "#50D63B",
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
