import MyPastRaffleCard from "@/components/MyPastRaffleCard";
import React from "react";
import { FlatList } from "react-native";
import { View, YStack } from "tamagui";

export default function Past() {
  const pastRaffles = [
    {
      "name": "Luxury Getaway",
      "entries": 1000,
      "tickets": 1,
      "status": "Winner Announced",
      "ended": "Jun 10, 2025",
      "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&h=300"
    },
    {
      "name": "Tech Bundle",
      "entries": 500,
      "tickets": 2,
      "status": "Winner Announced",
      "ended": "Jun 12, 2025",
      "image": "https://images.unsplash.com/photo-1591203912857-9c0e3c0e4b70?auto=format&fit=crop&w=300&h=300"
    },
    {
      "name": "Fashion Spree",
      "entries": 2000,
      "tickets": 1,
      "status": "Winner Announced",
      "ended": "Jun 14, 2025",
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&h=300"
    }
  ]

  return (
    <YStack bg="$background" flex={1} px="$3" > 
    <YStack flex={1} >
      <FlatList
        ItemSeparatorComponent={() => <View w={"100%"} h={7}/>}
        data={pastRaffles}
        renderItem={({ item }) => <MyPastRaffleCard {...item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={()=>{
          return <View w="100%" h={15}/>
        }}
      />
    </YStack>
  </YStack>
  );
}
