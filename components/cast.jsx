import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { fetchImage185 } from "../api/moviedb";

const Cast = ({ casts, navigation }) => {
  let personName = "john wick";
  let charecterName = "Doctor Strange";
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {casts &&
          casts.map((person, index) => (
            <TouchableOpacity key={index} className="mr-4 items-center" onPress={() => navigation.navigate('Person', person)}>
              <View className="overflow-hidden rounded-full h-24 w-24 items-center border-2 border-neutral-500">
                <Image
                  source={{uri: fetchImage185(person.profile_path)}}
                  className="h-28 w-24 rounded-2xl"
                />
              </View>
              <Text className="text-white text-xs mt-1">
                {person.original_name?.length > 10
                  ? person.original_name.slice(0, 10) + "..."
                  : person.original_name}
              </Text>
              <Text className="text-neutral-400 text-xs mt-1">
                {person.character?.length > 10
                  ? person.character.slice(0, 10) + "..."
                  : person.character}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Cast;
