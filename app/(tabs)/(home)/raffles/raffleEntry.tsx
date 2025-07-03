import { themes } from "@/components/Theme";
import { Ticket } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import {
  Button,
  H4,
  Image,
  ScrollView,
  SizableText,
  XStack,
  YStack,
} from "tamagui";

export default function RaffleEntry() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView flex={1} bg="$background">
      <YStack flex={1} gap="$5">
        <XStack>
          <Image
            src={require("../../../../assets/images/raffle-entry.png")}
            width="100%"
            height={200}
            resizeMode="cover"
          />
        </XStack>

        <YStack gap="$7" px="$4">
          <YStack jc="center" alignItems="center">
            <H4>You&apos;re in!</H4>
            <SizableText size="$5" textAlign="center">
              Your entry has been successfully submitted. Good luck!
            </SizableText>
          </YStack>
          <XStack gap="$3" alignItems="center">
            <Button>
              <Ticket />
            </Button>
            <YStack>
              <SizableText size="$5">123456</SizableText>
              <SizableText size="$5">Ticket Number</SizableText>
            </YStack>
          </XStack>
          <Button
            marginTop="$4"
            size="$5"
            borderRadius="$6"
            bg={themes[colorScheme ?? "light"].accent10}
            onPress={() => {
              router.push("/");
            }}
          >
            View Raffle
          </Button>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
