import WinnerCard from "@/components/WinnerCard";
import React from "react";
import { FlatList } from "react-native";
import { H2, SizableText, View, YStack } from "tamagui";

export default function winners() {
  const winners = [
    {
      name: "Ethan Carter",
      prize: "Luxury Watch",
      position: "1st Place",
      image: "http://picsum.photos/200/300",
    },
    {
      name: "Sophia Bennett",
      prize: "Travel Voucher",
      position: "2nd Place",
      image: "http://picsum.photos/200/300",
    },
    {
      name: "Liam Harper",
      prize: "Tech Gadget Bundle",
      position: "3rd Place",
      image: "http://picsum.photos/200/300",
    },
  ];

  return (
    <YStack bg="$background" flex={1}>
      <YStack px="$4">
        <FlatList
          ItemSeparatorComponent={() => <View w="100%" h={7} />}
          data={winners}
          renderItem={({ item }) => <WinnerCard {...item} />}
          keyExtractor={(item) => item.name + Math.random()}
          ListHeaderComponent={() => {
            return (
              <YStack>
                <YStack
                  jc="center"
                  alignContent="center"
                  p="$2"
                  py="$3"
                  gap="$3"
                  mb="$4"
                >
                  <H2 textAlign="center">
                    Congratulations to Our Recent Winners!
                  </H2>
                  <SizableText size="$4" textAlign="center">
                    Check out the lucky individuals who have won amazing prizes
                    in our recent raffles. Your name could be here next!
                  </SizableText>
                </YStack>
              </YStack>
            );
          }}
        />
      </YStack>
    </YStack>
  );
}
