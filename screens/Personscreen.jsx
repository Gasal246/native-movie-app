import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../theme";
import { HeartIcon } from "react-native-heroicons/solid";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import MovieList from "../components/movieList";
import Loader from "../components/Loading";
import { fetchImage342, fetchPersonDetails, fetchPersonMovies, Image500 } from "../api/moviedb";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "my-3";

const Personscreen = () => {
  const [isFav, setFav] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [personMovies, setPersonMovies] = useState([]);
  const {params: item} = useRoute()
  const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    console.log(item.id);
    getPersonDetails(item.id);
    getPersonMovies(item.id);
  }, [])

  const getPersonDetails = async (id) => {
    const data = await fetchPersonDetails(id);
    setPerson(data)
    setLoading(false)
  }

  const getPersonMovies = async (id) => {
    const data = await fetchPersonMovies(id);
    setPersonMovies(data?.cast)
    setLoading(false)
  }

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center px-4 " + topMargin
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
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: "yellow",
              shadowRadius: 45,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                source={{ uri: fetchImage342(person?.profile_path)}}
                style={{ width: width * 0.74, height: height * 0.43 }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-white text-3xl font-bold text-center">
              {person?.name}
            </Text>
            <Text className="text-neutral-500 text-base text-center">
              {person?.place_of_birth}
            </Text>
          </View>
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 font-sm">{person?.gender == 1 ?  'Female' : 'Male'}</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 font-sm">{person?.birthday}</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 font-sm">{person?.known_for_department}</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 font-sm">{person?.popularity}</Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              {person?.biography}
            </Text>
          </View>
          {/* movie list */}
          <MovieList title="movies" hideSeeAll={true} data={personMovies} />
        </View>
      )}
      {/* person details */}
    </ScrollView>
  );
};

export default Personscreen;
