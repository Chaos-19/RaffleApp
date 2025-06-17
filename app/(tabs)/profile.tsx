import React from "react";
import { useColorScheme } from "react-native";
//import { Avatar, Button, H3, SizableText, View, XStack, YStack } from "tamagui";

import { settingMenu } from "@/constants";
import { currentTheme } from "@/hooks/useThemeColor";
import { ArrowRight, Wallet } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import {
  Avatar,
  Button,
  ScrollView,
  SizableText,
  Text,
  XStack,
  YStack,
} from "tamagui";

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
    <ScrollView flex={1} bg="$background">
      <YStack>
        {/* Profile Section */}
        <YStack alignItems="center" p={16} gap="$4">
          <XStack alignSelf="center" pt="$6">
            <Avatar circular size="$10">
              <Avatar.Image src={"http://picsum.photos/200/300"} />
              <Avatar.Fallback bc="red" />
            </Avatar>
          </XStack>
          <YStack gap="$2" alignItems="center" jc="center">
            <Text fontWeight="bold">Sophia Carter</Text>
            <Text>@sophiac</Text>
            <Button onPress={() => {}}>Edit Profile</Button>
          </YStack>
        </YStack>

        {/* Wallet Section */}
        <XStack p={16} jc="space-between" alignItems="center">
          <XStack gap="$3" alignItems="center">
            <Wallet size="$4" />
            <YStack alignItems="center">
              <Text fontSize={18}>Wallet</Text>
              <Text>$12.00</Text>
            </YStack>
          </XStack>
          <Button mt={8} onPress={() => {}} bg={currentTheme().accent10}>
            Add Funds
          </Button>
        </XStack>

        {/* Stats Section */}
        <YStack p={16} gap="$2">
          <SizableText size="$6" mb="$3">
            State
          </SizableText>
          <XStack justifyContent="space-around" alignItems="center" gap="$2">
            <YStack
              alignItems="center"
              py="$5"
              flex={1}
              borderWidth={2}
              borderColor="$borderColorHover"
              borderRadius={3}
            >
              <Text fontWeight="bold" fontSize={20}>
                23
              </Text>
              <Text>Entries</Text>
            </YStack>

            <YStack
              alignItems="center"
              py="$5"
              flex={1}
              borderWidth={2}
              borderColor="$borderColorHover"
              borderRadius={3}
            >
              <Text fontWeight="bold" fontSize={20}>
                5
              </Text>
              <Text>Prizes Won</Text>
            </YStack>
          </XStack>
          <YStack
            alignItems="center"
            py="$4"
            borderWidth={2}
            borderColor="$borderColorHover"
            borderRadius={3}
          >
            <SizableText size="$7" fontWeight={600}>
              100
            </SizableText>
            <SizableText>Tickets Bought</SizableText>
          </YStack>
        </YStack>

        {/* Account Section */}

        <YStack>
          <YStack px="$4">
            {[...settingMenu].map((v) => (
              <Link key={v.link} href={`/(account)/${v.link}` as any} asChild>
                <XStack py="$5" jc="space-between" alignItems="center">
                  <SizableText size="$7" fontWeight={600}>
                    {v.label}
                  </SizableText>
                  <ArrowRight />
                </XStack>
              </Link>
            ))}
          </YStack>
          <XStack w="100%" p="$8">
            <Button flex={1}>Logout</Button>
          </XStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
/*
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
*/
