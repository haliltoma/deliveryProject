import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DishRow from "../components/Restaurant/DishRow";
import BasketIcon from "../components/Restaurant/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../store/Slices/restaurantSlice";

export default function Restaurant() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      img,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        img,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image source={{ uri: img }} className="w-full h-56" />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute left-4 top-8 bg-white w-10 h-10 rounded-full justify-center items-center"
          >
            <FontAwesome name="arrow-left" color={"#00ccbb"} size={16} />
          </TouchableOpacity>
        </View>
        <View>
          <View className="px-4 py-4 bg-white">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2">
              <View className="flex-row items-center space-x-1">
                <FontAwesome color={"gray"} name="star" size={20} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> - {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <FontAwesome color={"gray"} name="star" size={20} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> - {genre}
                </Text>
              </View>
            </View>
            <Text className="text-sm text-gray-500 mt-3">
              {short_description}
            </Text>
          </View>

          <View className="pb-36">
            <Text className="px-4 py-6 font-bold text-xl">Menu</Text>
            <DishRow
              name={"deneme"}
              id={1}
              description={"description"}
              price={20}
              image={img}
            />
            <DishRow
              name={"deneme"}
              id={2}
              description={"description"}
              price={20}
              image={img}
            />
            <DishRow
              name={"deneme"}
              description={"description"}
              price={20}
              id={3}
              image={img}
            />
            <DishRow
              name={"deneme"}
              description={"description"}
              price={20}
              image={img}
              id={4}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
