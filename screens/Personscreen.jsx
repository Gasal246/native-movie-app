import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../theme";
import { HeartIcon } from "react-native-heroicons/solid";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../components/movieList";
import Loader from "../components/Loading";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "my-3";

const Personscreen = () => {
  const [isFav, setFav] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);

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
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                source={require("../assets/images/demo/charec.jpg")}
                style={{ width: width * 0.74, height: height * 0.43 }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-white text-3xl font-bold text-center">
              Dr.Strange
            </Text>
            <Text className="text-neutral-500 text-base text-center">
              London, United Kingdom
            </Text>
          </View>
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 font-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 font-sm">2003-12-06</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 font-sm">Male</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 font-sm">64.63</Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              voluptates, quis quod inventore debitis voluptas obcaecati ab
              itaque assumenda dignissimos eos consequatur doloremque suscipit
              asperiores unde sapiente cumque quia accusantium illo facilis
              adipisci quidem consequuntur. Quasi alias enim nemo minima? Saepe
              optio aperiam quia enim fuga eum labore, qui laudantium eius odit?
              Autem cum quaerat dolor eligendi. Aperiam, et. Tenetur? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Totam,
              similique consequuntur doloribus aliquam consectetur quas
              provident ex reiciendis error ea! Lorem, ipsum dolor.
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
