import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { theme } from '../theme'

var { width, height } = Dimensions.get("window");

const Loader = () => {
  return (
    <View style={{width: width, height: height}} className="absolute flex-row justify-center items-center">
      <Progress.CircleSnail thickness={12} size={160} spinDuration={1300} color={theme.background} />
    </View>
  )
}

export default Loader
