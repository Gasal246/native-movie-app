import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useState } from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loading";

var { width, height } = Dimensions.get("window");

const Searchscreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  let movieName = "Doctor Strange in the Multiverse of Madness";
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="mx-4 my-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="search movie"
          placeholderTextColor="lightgray"
          className="pl-6 flex-1 font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          className="rounded-full p-3 m-1 bg-neutral-500"
          onPress={() => navigation.navigate("Home")}
        >
          <XMarkIcon size={18} strokeWidth={3} color="white" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loader />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Results ({results.length}){" "}
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push("Movie", index)}
              >
                <View className="space-y-2 mb-4">
                  <Image
                    className="rounded-3xl"
                    source={require("../assets/images/demo/avengers.jpeg")}
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                    }}
                  />
                  <Text className="text-neutral-300 ml-1">
                    {movieName.length > 22
                      ? movieName.slice(0, 23) + "..."
                      : movieName}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("../assets/images/demo/movieill.webp")}
            className="h-72 w-72"
          />
        </View>
      )}
      {/* scroll view for results */}
    </SafeAreaView>
  );
};

export default Searchscreen;
