import { View, Text } from "react-native";
import CharacterCard from "./CharacterCard";
export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <CharacterCard image={require("../assets/favicon.png")} name="Iron man" />
      <CharacterCard image={require("../assets/favicon.png")} name="Captain America" />
    </View>
  );
}
