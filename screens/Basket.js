import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/Slices/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectedBasketTotal,
} from "../store/Slices/basketSlice";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Basket() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectedBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5  bg-white shadow-lg relative">
          <View className="relative">
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">restaurant name</Text>
            <TouchableOpacity
              className="absolute top-[50%] -translate-y-1 right-0"
              onPress={navigation.goBack}
            >
              <MaterialIcons name="cancel" size={26} color={"#00ccbb"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between space-x-4 px-4 py-3 bg-white my-5 items-center">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600",
            }}
            className="h-8 rounded-full w-8 bg-gray"
          />
          <Text className="flex-1 ">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, item]) => (
            <View
              key={key}
              className="flex-row items-center bg-white py-2 space-x-4 border-b border-gray-300 justify-between px-4"
            >
              <Text className="text-[#00ccbb]">{item.length} x</Text>

              <Image
                source={{
                  uri: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600",
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="text-black flex-1">{item[0]?.name}</Text>
              <Text>{item[0]?.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: item[0].id }))}
              >
                <Text className="text-[#00ccbb] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">$ {basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$ 5.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-gray-400">$ {basketTotal + 5.99}</Text>
          </View>
          <TouchableOpacity className='rounded-lg bg-[#00ccbb] p-4' onPress={()=>navigation.navigate('preparingOrder')
}><Text className='text-center text-white text-lg font-bold'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
