import { View, StyleSheet, TextInput } from "react-native";
import { FC, ReactNode } from "react";
import { s, vs } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";

interface InputFieldProps {
  icon: string;
  placeholder: string;
  secureTextEntry?: boolean;
  iconTwo?: ReactNode;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: FC<InputFieldProps> = ({
  icon,
  placeholder,
  secureTextEntry,
  iconTwo,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon as any} size={20} color="#626262" />
      {/* icon={<Ionicons name={icon} size={20} color="#626262" />} */}
      <TextInput
        style={{ flex: 1 }}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      {iconTwo}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: vs(40),
    backgroundColor: "#F3F3F3",
    borderWidth: s(1),
    borderColor: "#A8A8A9",
    borderRadius: s(5),
    paddingHorizontal: s(10),
    gap: s(5),
    marginTop: s(30),
  },
});
