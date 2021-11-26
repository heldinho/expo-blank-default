import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar hidden backgroundColor="#323" />
      <SafeAreaView style={{ ...app.container }}>
        <View style={{ ...app.header }} />
        <View style={{ ...app.body }}>
          <View style={{ ...app.content }}></View>
        </View>
        <View style={{ ...app.footer }} />
      </SafeAreaView>
    </>
  );
}

const app = {
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#323",
  },
  body: {
    flex: 8,
  },
  footer: {
    flex: 1,
    backgroundColor: "#444",
  },

  content: {
    flex: 1,
    width: "90%",
    borderWidth: 0,
    alignSelf: "center",
  },
};
