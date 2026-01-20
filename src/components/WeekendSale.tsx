import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { s, vs } from "react-native-size-matters";


const copyArr = [
  "20% OFF DURING THE WEEKEND",
  "30% OFF DURING THE WEEKEND"
];

const ACTIVE_BG = "#1383F1";
const ACTIVE_BTN = "#50D63B";
const ACTIVE_TXT = "#FFFFFF";
const INACTIVE_TXT = "#F17547";

const WeekendSale = () => {
  const [activeCard, setActiveCard] = useState("20% OFF DURING THE WEEKEND");

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {
          copyArr.map((copy) => {
            const isActive = activeCard === copy;
            return (
              <TouchableOpacity
                style={[styles.card, isActive && { backgroundColor: ACTIVE_BG}]}
                onPress={() => setActiveCard(copy)}
                key={copy}
              >
                <Text style={styles.copy}>{copy}</Text>
                <View style={[styles.button, isActive && { backgroundColor: ACTIVE_BTN }]}>
                  <Text style={isActive ? styles.activeText : styles.inActiveText}>
                    Get Now
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </View>
    </ScrollView>
  );
};

export default WeekendSale;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: s(15),
    marginTop: vs(15),
    paddingHorizontal: s(20),
  },
  card: {
    width: s(275),
    height: vs(115),
    borderRadius: s(15),
    justifyContent: "center",
    paddingHorizontal: s(19),
    backgroundColor: "#F17547",
  },
  copy: {
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: s(16),
    paddingRight: s(19),
    marginBottom: vs(14),
  },
  button: {
    width: s(80),
    height: vs(34),
    borderRadius: s(18),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  activeText: {
    color: ACTIVE_TXT,
    fontWeight: 700,
  },
  inActiveText: {
    color: INACTIVE_TXT,
    fontWeight: 700,
  }
});