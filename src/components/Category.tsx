import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import type { SvgProps } from "react-native-svg";
import { s, vs } from "react-native-size-matters";

type IconComponent = React.ComponentType<SvgProps & { color?: string }>;

interface CategoryProps {
  Icon: IconComponent;
  isSelected?: boolean;
  onPress?: () => void;
}

const Category: React.FC<CategoryProps> = ({
  Icon,
  isSelected = false,
  onPress,
}) => {
  const iconColor = isSelected ? "white" : "black";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, isSelected && styles.selectedCard]}
      activeOpacity={0.8}
    >
      <Icon color={iconColor} />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  card: {
    width: s(64),
    height: vs(63),
    borderWidth: s(1),
    borderRadius: s(7),
    borderColor: "#D8D3D380",
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#F17547",
  },
});
