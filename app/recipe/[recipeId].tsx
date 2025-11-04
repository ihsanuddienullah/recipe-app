import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const DetailRecipe = () => {
  const { recipeId } = useLocalSearchParams();

  return (
    <View>
      <Text>DetailRecipe {recipeId}</Text>
      <Link href="/">Go to Home Screen</Link>
    </View>
  )
}

export default DetailRecipe