import RaffleFeatuerdCard from "@/components/RaffleFeatuerdCard";
import SearchBar from "@/components/SearchBar";
import { RaffleAppData } from "@/constants/Data";
import React from "react";
import { FlatList, StatusBar } from "react-native";
import { ScrollView, SizableText, View, YStack } from "tamagui";

export default function HomeScreen() {
  const raffles = RaffleAppData.getInstance().getAllRaffles();

  return (
    <>
      <StatusBar />
      <ScrollView bg="$background">
        <YStack gap={3}>
          <SearchBar />
          <YStack p="$2" py="$3"  gap="$2">
            <SizableText size="$8">Featured Raffles</SizableText>
            <FlatList
             horizontal={true}
             ItemSeparatorComponent={()=> <View w={7}/>}
              data={raffles}
              renderItem={({ item }) => <RaffleFeatuerdCard />}
              keyExtractor={(item) => item.title}
            />
          </YStack>
        </YStack>
      </ScrollView>
    </>
  );
}
