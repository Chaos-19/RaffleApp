import RaffleCard from "@/components/RaffleCard";
import RaffleFeatuerdCard from "@/components/RaffleFeatuerdCard";
import SearchBar from "@/components/SearchBar";
import { RaffleAppData } from "@/constants/Data";
import React from "react";
import { FlatList, useColorScheme } from "react-native";
import { ScrollView, SizableText, View, YStack } from "tamagui";

export default function HomeScreen() {
  const raffles = RaffleAppData.getInstance().getAllRaffles();
  const colorSchema = useColorScheme();

  return (
    <>
      <YStack bg="$background">
        <YStack>
          <FlatList
            ItemSeparatorComponent={() => <View w={7} />}
            data={raffles}
            renderItem={({ item }) => <RaffleCard {...item} />}
            keyExtractor={(item) => item.title + Math.random()}
            ListHeaderComponent={() => {
              return (
                <>
                  <YStack gap={3}>
                    <SearchBar />
                    <YStack p="$2" py="$3" gap="$2">
                      <SizableText size="$8">Featured Raffles</SizableText>
                      <FlatList
                        horizontal={true}
                        ItemSeparatorComponent={() => <View w={7} />}
                        data={raffles}
                        renderItem={({ item }) => (
                          <RaffleFeatuerdCard {...item} />
                        )}
                        keyExtractor={(item) => item.title}
                      />
                    </YStack>
                  </YStack>
                  <YStack p="$2" py="$3" gap="$3">
                    <SizableText size="$8" px="$2">
                      Ending Soon
                    </SizableText>
                  </YStack>
                </>
              );
            }}
          />
        </YStack>
      </YStack>
    </>
  );
}

/*
 <>
      <ScrollView bg="$background">
        <YStack gap={3}>
          <SearchBar />
          <YStack p="$2" py="$3" gap="$2">
            <SizableText size="$8">Featured Raffles</SizableText>
            <FlatList
              horizontal={true}
              ItemSeparatorComponent={() => <View w={7} />}
              data={raffles}
              renderItem={({ item }) => <RaffleFeatuerdCard {...item} />}
              keyExtractor={(item) => item.title}
            />
          </YStack>
          <YStack>
            <YStack p="$2" py="$3" gap="$3">
              <SizableText size="$8" px="$2">
                Ending Soon
              </SizableText>
              <FlatList
                ItemSeparatorComponent={() => <View w={7} />}
                data={raffles}
                renderItem={({ item }) => <RaffleCard {...item} />}
                keyExtractor={(item) => item.title + Math.random()}
              />
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
    </>
*/
