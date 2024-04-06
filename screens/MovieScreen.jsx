import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";
import Loader from "../components/Loading";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isFav, setFav] = useState(false);
  const [casts, setCasts] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);
  let movieName = "Doctor Strange in the Multiverse of Madness";

  useEffect(() => {}, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4 " +
            topMargin
          }
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.background}
            className="rounded-xl p-1"
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-xl p-1"
            onPress={() => setFav(!isFav)}
          >
            <HeartIcon
              size={30}
              strokeWidth={2}
              color={isFav ? "red" : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loader />
        ) : (
          <View>
            <Image
              source={require("../assets/images/demo/avengers.jpeg")}
              style={{ width: width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23, 23, 23, 0.8)",
                "rgba(23, 23, 23, 1)",
              ]}
              style={{ width: width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>

      {/* Movie Details */}
      <View style={{ marginTop: -(height * 0.1) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        {/* stats */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Realeased • 2020 • 170 min
        </Text>
        {/* geners */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action •
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill •
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy
          </Text>
        </View>
        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas
          fuga soluta temporibus architecto exercitationem quaerat libero
          expedita? Eos, magni. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Optio, magnam.
        </Text>
        {/* cast */}
        <Cast navigation={navigation} casts={casts} />
        {/* similar Movies */}
        <MovieList
          title="Similar Movies"
          hideSeeAll={true}
          data={similarMovies}
        />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
