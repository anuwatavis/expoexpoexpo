import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  const [name, setName] = useState("anuwataravis");
  const [person, setPerson] = useState({ name: "anuwataravis", age: 0 });

  const clickHandler = () => {
    setName("anuwatSeted");
    setPerson({ name: "setPerson", age: person.age + 1 });
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        Person is {person.name} and age are {person.age}
      </Text>
      <View>
        <Button title="update state" style={styles.buttonContainer} onPress={clickHandler} color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "red",
  },
});
