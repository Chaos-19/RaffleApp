import { themes } from "@/components/Theme";
import TransactionCard from "@/components/TransactionCard";
import React from "react";
import { FlatList, useColorScheme } from "react-native";
import { Avatar, Button, H3, SizableText, View, XStack, YStack } from "tamagui";

export default function profile() {
  const colorScheme = useColorScheme();

  const transactions = [
    {
      type: "Raffle",
      item: "Luxury Car",
      description: "Raffle Entry",
      amount: -10.0,
    },
    {
      type: "Deposit",
      item: "Deposit",
      description: "",
      amount: 50.0,
    },
    {
      type: "Raffle",
      item: "Vacation Package",
      description: "Raffle Entry",
      amount: -5.0,
    },
    {
      type: "Deposit",
      item: "Deposit",
      description: "",
      amount: 100.0,
    },
  ];

  return (
    <YStack bg="$background" flex={1}>
      <YStack px="$3">
        <FlatList
          ItemSeparatorComponent={() => <View w={7} />}
          data={[...transactions]}
          renderItem={({ item }) => <TransactionCard {...item} />}
          keyExtractor={(item) => item.type + Math.random()}
          ListHeaderComponent={() => {
            return (
              <YStack>
                <YStack jc="center" alignItems="center" gap="$5">
                  <XStack alignSelf="center" pt="$6">
                    <Avatar circular size="$10">
                      <Avatar.Image src={"http://picsum.photos/200/300"} />
                      <Avatar.Fallback bc="red" />
                    </Avatar>
                  </XStack>

                  <YStack alignItems="center">
                    <H3>Ethan Carter</H3>
                    <SizableText size="$5" theme="alt2">
                      Balance
                    </SizableText>
                    <SizableText size="$5" theme="alt2">
                      $120.00
                    </SizableText>
                  </YStack>

                  <XStack>
                    <Button
                      borderRadius="$4"
                      bg={themes[colorScheme ?? "light"].accent10}
                    >
                      Add Fund
                    </Button>
                  </XStack>
                </YStack>
                <YStack my="$4" px="$1">
                  <H3>Transaction History</H3>
                </YStack>
              </YStack>
            );
          }}
        />
      </YStack>
    </YStack>
  );
}
