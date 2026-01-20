import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";


const Category = () => {
  return (
    <View style={{
      width: s(64),
      height: vs(63),
      borderRadius: s(7)
    }}>
      <Text>Category</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});