import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loading";

const ios = Platform.OS == "ios";
const Homescreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [toprated, setTopRated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-neutral-800 h-screen w-full">
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 my-3">
          <Bars3CenterLeftIcon size={32} strokeWidth={2} color="white" />
          <Text className="text-white font-bold text-2xl">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Trending Movies scroll */}
          <TrendingMovies data={trending} />

          {/* Upcoming Movies Row */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* Upcoming Movies Row */}
          <MovieList title="Top rated" data={toprated} />
        </ScrollView>
      )}
    </View>
  );
};

export default Homescreen;
