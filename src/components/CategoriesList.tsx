import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import Category from "./Category";
import { Watch, Tshirt, HandBag } from "../assets/Icons";

const DATA = [
  { id: "1", label: "Watch", Icon: Watch },
  { id: "2", label: "Tshirt", Icon: Tshirt },
  { id: "3", label: "HandBag", Icon: HandBag },
];

const CategoriesList = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  return (
    <FlatList
      data={DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: s(23) }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          Icon={item.Icon}
          onPress={() => setSelectedMethod(item.label)}
          isSelected={selectedMethod === item.label}
        />
      )}
    />
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
