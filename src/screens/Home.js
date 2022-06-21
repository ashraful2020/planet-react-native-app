import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import PlanetHeader from "../components/PlanetHeader";
import Text from "../components/Text/Text";
import { PLANET_LIST } from "../data/planetData";
import { color } from "../theme/color";
import { spacing } from "../theme/spacing";
const Home = ({ navigation }) => {
  const [list, setList] = useState(PLANET_LIST);
  const renderItem = ({ item }) => {
    const { name, color } = item;
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Details", { planet: item });
        }}
        style={styles.item}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={[styles.circle, { backgroundColor: item.color }]} />
          <Text preset="h2" style={styles.itemName}>
            {name}
          </Text>
        </View>
        <EvilIcons name="chevron-right" size={24} color="white" />
      </Pressable>
    );
  };

  const searchPlanet = (text) => {
    const matchedData = PLANET_LIST.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      const userTyped = text.toLowerCase();
      return planetName.indexOf(userTyped) > -1;
    });
    setList(matchedData);
  };
  return (
    <View style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholderTextColor={color.white}
        placeholder="Search by name"
        style={styles.searchInput}
        autoCorrect={false}
        onChangeText={(text) => searchPlanet(text)}
      />
      <FlatList
        data={list}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    padding: spacing[2],
  },
  item: {
    padding: spacing[5],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  itemName: {
    marginLeft: spacing[5],
    textTransform: "uppercase",
  },
  separator: {
    borderBottomWidth: 0.8,
    borderBottomColor: color.white,
  },
  list: {
    padding: spacing[4],
  },
  searchInput: {
    padding: spacing[4],
    color: color.white,
    borderBottomWidth: 1,
    borderBottomColor: color.white,
    margin: spacing[5],
    fontSize: 20,
  },
});
