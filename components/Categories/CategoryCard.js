import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function CategoryCard({image,title}) {
  return (
    <TouchableOpacity className="w-20 h-20 ">
      <Image
        source={{
          uri: image,
        }}
        className="w-20 h-20 rounded-lg bg-transparent relative"
      />
      <Text className="absolute bottom-0 rounded-t-2xl bg-white font-medium bg-slate-300 text-center overflow-y-hidden w-full ">
        {title}
      </Text>
    </TouchableOpacity>
  );
}