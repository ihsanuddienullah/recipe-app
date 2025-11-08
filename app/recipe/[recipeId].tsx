import Header from '@/components/Header';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const DetailRecipe = () => {
  const { recipeId } = useLocalSearchParams();

  return (
    <View>
      <Header btnBack />
      <Text>DetailRecipe {recipeId}</Text>
    </View>
  )
}

export default DetailRecipe