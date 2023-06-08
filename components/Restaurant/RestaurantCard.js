import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ion from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({
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
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white flex-col  w-52 h-64 rounded-lg"
      onPress={() => {
        navigation.navigate("restaurant", {
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
        });
      }}
    >
      <Image source={{ uri: img }} className="w-full h-32 rounded-lg" />
      <View className="px-2 h-full flex-col mt-3 " style={{ gap: 10 }}>
        <Text className="font-bold text-lg ">{title}</Text>
        <View className="flex-row gap-2 items-center ">
          <FontAwesome name="star" color={"green"} size={22} />
          <Text>{rating}</Text>
          <Text className="font-medium text-gray-500">{genre}</Text>
        </View>
        <View className="flex-row items-center gap-2 ">
          <Ion name="ios-location" color={"grey"} size={22} />
          <Text className="text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
