import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const PreparingOrder = () => {
  const navigation =useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('delivery')
    },4000)
  },[])
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={{
          uri: "https://cdn.pixabay.com/animation/2023/03/28/02/15/02-15-52-868_256.gif",
        }}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      >Waiting for Restaurant to accept your order</Animatable.Text>
    </SafeAreaView>
  );
}

export default PreparingOrder