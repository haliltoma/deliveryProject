import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome'
import RestaurantCard from '../Restaurant/RestaurantCard';

export default function FeaturedRow({id,title,description,featuredCategory}) {
  return (
    <View className="px-4">
      <View className="flex-1 flex-row items-center justify-between">
        <Text className="font-bold text-lg ">{title}</Text>
        <Icon name="arrow-right" color={"#00ccbb"} />
      </View>
      <Text className="text-gray-400">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ 
        
          paddingTop: 20,
          gap:20
         }}
        showsVerticalScrollIndicator={false}
        className="pt-5"
      >
        <RestaurantCard
          id={123}
          img={
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          title={"Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="this is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          img={
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          title={"Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="this is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          img={
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          title={"Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="this is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          img={
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          title={"Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="this is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          img={
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          title={"Sushi"}
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="this is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}