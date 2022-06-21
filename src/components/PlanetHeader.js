import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import { color } from "../theme/color";
import { spacing } from "../theme/spacing";
import Text from "./Text/Text";

const PlanetHeader = ({ backButton, title = "THE PLANETS" }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backButton && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Entypo
            style={styles.backButton}
            name="chevron-left"
            size={24}
            color="white"
          />
        </Pressable>
      )}
      <Text preset="h1">{title}</Text>
    </View>
  );
};

export default PlanetHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: spacing[5],
    borderBottomWidth: 0.8,
    alignItems: "center",
    borderBottomColor: color.white,
  },
  backButton: {
    marginRight: spacing[5],
  },
});
