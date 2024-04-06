import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

const MovieList = ({ title, data, hideSeeAll }) => {
  const navigation = useNavigation();
  let movieName = "Doctor Strange in the Multiverse of Madness";
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              view all
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* Moview Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.push("Movie", item)}
          >
            <View className="space-y-1 mr-4">
              <Image
                source={require("../assets/images/demo/avengers.jpeg")}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className="text-white ml-1">
                {movieName.length > 14
                  ? movieName.slice(0, 16) + "..."
                  : movieName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
