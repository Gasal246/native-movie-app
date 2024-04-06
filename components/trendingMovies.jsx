import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, Text, TouchableNativeFeedback, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

var { width, height } = Dimensions.get('window')

const TrendingMovies = ({ data }) => {
    const navigation = useNavigation()
    const handleClick = (item) => {
        navigation.navigate('Movie', item)
    }
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel 
                data={data}
                renderItem={({item}) => <MovieCard item={item} handleClick={() => handleClick(item)} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width*0.62}
                slideStyle={{display: 'flex', alignItems: 'center', }} 
            />
        </View>
    );
}

const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableNativeFeedback onPress={handleClick}>
            <Image source={require('../assets/images/demo/avengers.jpeg')} 
                style={{
                    width: width*0.6,
                    height: height*0.4,
                }}
                className="rounded-3xl"
            />
        </TouchableNativeFeedback>
    )
}

export default TrendingMovies;