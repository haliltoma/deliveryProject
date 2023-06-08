import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectedBasketItemWithId, selectedBasketTotal } from '../../store/Slices/basketSlice'
import { useNavigation } from '@react-navigation/native'

export default function BasketIcon() {
const items = useSelector(selectBasketItems)
const navigation = useNavigation()
const basketTotal = useSelector(selectedBasketTotal)


if(items.length ===0) return;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate('basket')} className='bg-[#00ccbb] p-4 rounded-lg flex-row justify-between items-center space-x-1'>
        <Text className='text-white bg-[#01a296] rounded-lg font-extrabold text-lg py-1 px-2'>{items.length}</Text>
        <Text>View Basket</Text>
        <Text className='text-white font-bold text-xl'>$ {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}