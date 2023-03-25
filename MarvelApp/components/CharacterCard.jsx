import { View, Text, Image, StyleSheet } from "react-native";
export default function CharacterCard({ image, name }) {
  return (
    <View style={[style.card, style.container]}>
      <Image style={style.image} source={image} />
      <Text style={style.name}>{name}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignContent:"center",
    justifyContent:"space-around",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 9,
  }
});
