import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const TomatoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TomatoScreen</Text>
      <Button
        title="Go to Gold Screen"
        onPress={() => navigation.navigate("GoldScreen")}
      />
      <Text
        onPress={() => navigation.navigate("GoldScreen", { name: "Ankur" })}
      >
        Name: Ankur
      </Text>
      <Text
        onPress={() => navigation.navigate("GoldScreen", { name: "Barve" })}
      >
        Name: Barve
      </Text>
    </View>
  );
};

export default TomatoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
