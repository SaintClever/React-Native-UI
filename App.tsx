// import ShoppingScreen from "./src/screens/ShoppingScreen";
import { NavigationContainer } from "@react-navigation/native";
import CreateStackNav from "./src/navigation/CreateStackNav";

export default function App() {
  return (
    // <ShoppingScreen />
    <NavigationContainer>
      <CreateStackNav />
    </NavigationContainer>
  );
}
