import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {  NavigationHome, NavigationLogin } from "./Navigation/Navigation";
import RootNavigation from "./Navigation/RootNavigation";

export default function App() {
  return (
    <RootNavigation/>
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
