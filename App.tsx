// import ShoppingScreen from "./src/screens/ShoppingScreen";
import { NavigationContainer } from "@react-navigation/native";
import CreateStackNav from "./src/navigation/CreateStackNav";
import TabStackNav from "./src/navigation/TabStackNav";

export default function App() {
  return (
    // <ShoppingScreen />
    <NavigationContainer>
      {/* <CreateStackNav /> */}
      <TabStackNav />
    </NavigationContainer>
  );
}
