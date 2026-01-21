import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import Ellipse from "../components/Ellipse";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import WeekendSale from "../components/WeekendSale";
import CategoriesList from "../components/CategoriesList";


const ShoppingScreen = () => {
  return(
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Ellipse icon="align-left" />
          <Ellipse icon="magnifying-glass" />
        </View>
        <View>
          <Text style={styles.helloFola}>
            Hello Fola <MaterialCommunityIcons name="hand-wave-outline" size={17} color="#F17547" />
          </Text>
          <Text style={styles.letsStartShopping}>Let's start shopping!</Text>
        </View>
      </View>
      <WeekendSale />
      <View style={styles.categoriesContainer}>
        <Text style={styles.categories}>Top Categories</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <View style={{
        marginTop:vs(27),
        marginHorizontal: s(23),
      }}>
        <CategoriesList />
      </View>
      
    </View>
  );
};

export default ShoppingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vs(58),
    marginHorizontal: s(23),
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  helloFola: {
    marginTop: vs(37),
    fontWeight: 600,
    fontSize: s(20),
  },
  letsStartShopping: {
    marginTop: vs(9),
    fontWeight: 600,
    color: "#808080",
  },
  categoriesContainer: {
    marginTop: vs(20),
    marginHorizontal: s(23),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categories: {
    fontWeight: 600,
    fontSize: s(20)
  },
  seeAll: {
    fontWeight: 500,
    fontSize: s(16),
    color: "#F17547",
  }
});