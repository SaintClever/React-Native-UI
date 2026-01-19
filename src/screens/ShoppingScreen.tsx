import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { s, vs } from "react-native-size-matters";
import Ellipse from "../components/Ellipse";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import WeekendSaleList from "../components/WeekendSaleList";



const ShoppingScreen = () => {
  return(
    <View>
      <View style={{
        marginTop: vs(58),
        marginHorizontal: s(23),
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Ellipse icon="align-left" />
          <Ellipse icon="magnifying-glass" />
        </View>
        
        <View>
          <Text style={{
            marginTop: vs(37),
            fontWeight: 600,
            fontSize: s(20),
          }}>
            Hello Fola <MaterialCommunityIcons name="hand-wave-outline" size={17} color="#F17547" />
          </Text>
          <Text style={{
            marginTop: vs(9),
            fontWeight: 600,
            color: "#808080",
          }}>Let's start shopping!</Text>
        </View>
      </View>
      <WeekendSaleList />
    </View>
  );
};

export default ShoppingScreen;

const styles = StyleSheet.create({});