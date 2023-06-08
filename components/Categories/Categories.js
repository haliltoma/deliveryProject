import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={
        {
          paddingHorizontal: 15,
          paddingTop: 20,
          gap:20
        }
      }
      showsHorizontalScrollIndicator={false}
      horizontal
    
    >
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
      <CategoryCard
        image={
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Food"}
      />
    </ScrollView>
  );
}