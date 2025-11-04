import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const AboutScreen = () => {
  return (
    <View>
      <Text>AboutScreen</Text>
      <Link href="/">Go to Home Screen</Link>
    </View>
  )
}

export default AboutScreen