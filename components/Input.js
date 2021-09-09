import React from "react";
import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btnRemove}
        onPress={props.onRemove.bind(this, props.stateValue)}
      >
        <Text>-</Text>
      </Pressable>
      <TextInput style={styles.input} value={props.value} />
      <Pressable
        style={styles.btnAdd}
        onPress={props.onAdd.bind(this, props.stateValue)}
      >
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#abaeb3",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },

  btnRemove: {
    width: 45,
    height: 45,
    paddingTop: 13,
    paddingLeft: 18,
    borderRadius: 22,
    backgroundColor: "red",
  },

  btnAdd: {
    width: 45,
    height: 45,
    paddingTop: 13,
    paddingLeft: 18,
    borderRadius: 22,
    backgroundColor: "green",
  },
});

export default Input;
