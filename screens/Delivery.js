import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../store/Slices/restaurantSlice";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
const Delivery = () => {
  const navigation = useNavigation();
//   const restaurant = useSelector(selectRestaurant);
let restaurant ={
    title:'Kebapçı Halil',
    descripton:'Kebabın en lezzetlisi',
    lat:"35,333",
    long:"35,550",
}
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <MaterialIcons name="cancel" size={30} color={"white"} />
          </TouchableOpacity>
          <Text>Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between ">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/red-rooster-cock-side-view-abstract_1284-16627.jpg?w=740&t=st=1686229892~exp=1686230492~hmac=4b0432b5a60af63064109580b2c95b511edfd07c0d223dcf57091088d559db8f",
              }}
              className="h-20 w-20 "
            />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text>Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>
      <MapView className="flex-1">
        <Marker
          title={restaurant.title}
          description={restaurant.descripton}
          coordinate={{ latitude: 37.0588328, longitude: 37.3389374 }}
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://www.haliltoma.com/assets/images/profile.png",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text>Halil Toma</Text>
          <Text>Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
