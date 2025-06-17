import MyRafflesCard from "@/components/MyRafflesCard";
import { RaffleAppData } from "@/constants/Data";
import React from "react";
import { FlatList } from "react-native";
import { View, YStack } from "tamagui";

export default function raffles() {
  const raffles = RaffleAppData.getInstance().getAllRaffles().slice(0,3);
  return (
    <YStack bg="$background" flex={1} px="$3" > 
      <YStack flex={1} >
        <FlatList
          ItemSeparatorComponent={() => <View w={"100%"} h={7}/>}
          data={raffles}
          renderItem={({ item }) => <MyRafflesCard {...item} />}
          keyExtractor={(item) => item.title}
          ListHeaderComponent={()=>{
            return <View w="100%" h={15}/>
          }}
        />
      </YStack>
    </YStack>
  );
}
