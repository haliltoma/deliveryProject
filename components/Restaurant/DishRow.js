import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {  useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectedBasketItemWithId } from "../../store/Slices/basketSlice";

export default function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
    const items = useSelector(state=>selectedBasketItemWithId(state,id));
    // console.log(items)
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemFromBasket= ()=>{
    if(items.lenght <= 0 ) return;

    
    dispatch(removeFromBasket({id}))
  }
  
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white p-4 w-full border-b-2 border-gray-200 flex-row justify-between"
      >
        <View className=" flex-col flex-1 justify-center">
          <Text className=" text-xl font-medium">{name}</Text>
          <Text className="text-gray-500 text-base">{description}</Text>
          <Text className="text-gray-500 text-base">$ {price}</Text>
        </View>
        <View>
          <Image
            source={{ uri: image }}
            className="h-20 w-20 rounded-lg bg-gray-300 p-4"
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row space-x-4 px-4 py-3 items-center">
          <TouchableOpacity  onPress={removeItemFromBasket}>
            <FontAwesome
              name="minus-circle"
              size={35}
              color={items.length > 0 ? "#00ccbb" : "gray"}
            />
          </TouchableOpacity>
          <Text className="text-lg">{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <FontAwesome name="plus-circle" size={35} color={"#00ccbb"} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
