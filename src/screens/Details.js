import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import PlanetHeader from "../components/PlanetHeader";
import Text from "../components/Text/Text";
import { color } from "../theme/color";
import { spacing } from "../theme/spacing";

// list compo

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text style={{ textTransform: "uppercase" }}>{title}</Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

const Details = ({ item, route }) => {
  const planet = route.params.planet;
  const { name, rotationTime, revolutionTime, radius, avgTemp, wikiLink } =
    planet;
  // to get data from previous components use route.params.name ,
  // route is props.route we can destructure {route};

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.details}>
        <PlanetHeader backButton={true} />
        <View>
          <Image
            style={styles.imageView}
            source={require("../../assets/car.jpg")}
          />
        </View>

        <View style={styles.detailsView}>
          <Text style={styles.title}>{name}</Text>
          <Text preset="h2">{planet.structure}</Text>
        </View>
        <Pressable style={styles.source} onPress={onPressLink}>
          <Text>Source : </Text>
          <Text preset="h4" style={styles.wikipedia}>
            Wikipedia
          </Text>
        </Pressable>

        <View style={{ marginTop: 60 }}>
          <PlanetSection title="rotation Time" value={rotationTime} />
          <PlanetSection title="revolution Time" value={revolutionTime} />
          <PlanetSection title="radius" value={radius} />
          <PlanetSection title="avg Temp" value={avgTemp} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    padding: spacing[2],
  },
  details: {
    marginTop: spacing[4],
  },
  title: {
    textAlign: "center",
    fontSize: 60,
    textTransform: "uppercase",
  },
  imageView: {
    width: 300,
    height: 200,
    borderRadius: 100,
    marginTop: spacing[8],
    justifyContent: "center",
    alignContent: "center",
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
  },
  source: {
    marginTop: spacing[7],
    flexDirection: "row",
    justifyContent: "center",
  },
  wikipedia: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  planetSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
    marginBottom: spacing[5],
  },
});
