import React from "react";
import { StyleSheet, Text as NewText } from "react-native";
import { presets } from "./text.preset";
const Text = ({ children, preset = "default", style }) => {
  const textStyles = StyleSheet.compose(presets[preset], style);

  return <NewText style={textStyles}>{children}</NewText>;
};

export default Text;
