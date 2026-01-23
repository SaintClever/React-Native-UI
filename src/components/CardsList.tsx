import { StyleSheet, FlatList } from "react-native";
import { DATA } from "../data/Data";
import Card from "./Card";
import { vs } from "react-native-size-matters";

const CardsList = () => {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      contentContainerStyle={
        {
          // paddingBottom: vs(150),
          // paddingTop: vs(24),
        }
      }
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          sale={item.sale}
          image={item.image}
          title={item.title}
          currentPrice={item.currentPrice}
          originalPrice={item.originalPrice}
        />
      )}
    />
  );
  // ;
};

export default CardsList;

const styles = StyleSheet.create({});
