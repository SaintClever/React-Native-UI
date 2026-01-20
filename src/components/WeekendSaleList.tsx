import { FlatList, StyleSheet } from "react-native";
import WeekendSale from "./WeekendSale";
import { data } from "../data/Data";
import { s, vs } from "react-native-size-matters";

const WeekendSaleList = () => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: s(15),
        marginTop: vs(15),
        paddingHorizontal: s(20),
      }}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => 
        <WeekendSale
          dealCopy={item.deal_copy}
          buttonCopy={item.button_copy}
          buttonColor={item.button_color}
          buttonCopyColor={item.button_copy_color}
          bgColor={item.bg_color}
        />
      }
    />
  );
};

export default WeekendSaleList;

const styles = StyleSheet.create({});