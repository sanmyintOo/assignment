import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./components/Input";

export default function App() {
  const [first, setFirst] = useState("0");
  const [second, setSecond] = useState("0");
  const [third, setThird] = useState("0");

  const addHandler = (stateValue) => {
    if (stateValue == "first") {
      var value = parseInt(first, 10) + 1;
      setFirst(value.toString());
    } else if (stateValue == "second") {
      var value = parseInt(second, 10) + 1;
      setSecond(value.toString());
    } else if (stateValue == "third") {
      var value = parseInt(third, 10) + 1;
      setThird(value.toString());
    }
  };

  const removeHandler = (stateValue) => {
    if (stateValue == "first") {
      var value = parseInt(first, 10) - 1;
      setFirst(value.toString());
    } else if (stateValue == "second") {
      var value = parseInt(second, 10) - 1;
      setSecond(value.toString());
    } else if (stateValue == "third") {
      var value = parseInt(third, 10) - 1;
      setThird(value.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Input
        value={first}
        onAdd={addHandler}
        onRemove={removeHandler}
        stateValue="first"
      />
      <Input
        value={second}
        onAdd={addHandler}
        onRemove={removeHandler}
        stateValue="second"
      />
      <Input
        value={third}
        onAdd={addHandler}
        onRemove={removeHandler}
        stateValue="third"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
