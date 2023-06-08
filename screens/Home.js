import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Categories from "../components/Categories/Categories";
import FeaturedRow from "../components/Featured/FeaturedRow";

const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView  className="flex-1 bg-gray-200">
      <View
        style={{ gap: 20 }}
        className="w-full h-14 mt-5 bg-white  flex-row items-center"
      >
        <Image
          source={{
            uri: "https://www.haliltoma.com/assets/images/profile.png",
          }}
          className="w-10  h-10 rounded-full bg-white "
        />
        <View>
          <Text className="font-bold text-gray-400">Deliver Text</Text>
          <Text className="font-bold tex-xl">
            Current Location <Icon name="arrow-circle-o-down" />
          </Text>
        </View>
      </View>
      <View className="h-14 flex-row w-full px-3 bg-white  items-center">
        <View
          style={{ gap: 20 }}
          className="bg-gray-200 rounded-lg w-full items-center overflow-y-hidden  p-2 flex-row flex-1"
        >
          <Icon name="search" size={18} color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className='overflow-y-hidden w-[90%]'
          />
        </View>
        <Icon name="sliders" size={18} color="#00CCBB" />
      </View>
          {/* // Top Point */}

        <ScrollView contentContainerStyle={{gap:20}} >
          {/* Categories */}
            <Categories/>


          {/* Features Rows */}

            <FeaturedRow
            id='123'
            title='Featured'
            description={'Paid placements from our partners'}
            
            />
            <FeaturedRow
            id='1234'
            title='Featured'
            description={'Paid placements from our partners'}
            
            />
            <FeaturedRow
            id='12345'
            title='Featured'
            description={'Paid placements from our partners'}
            
            />

        </ScrollView>









    </SafeAreaView>
  );
};

export default Home;

