import { StyleSheet, Text as NEWText } from "react-native";
import { presets } from "./text.preset";
const Text = ({ children, preset = "default", style }) => {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return <NEWText style={textStyles}>{children}</NEWText>;
};

export default Text;
