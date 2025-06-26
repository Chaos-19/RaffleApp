import { themes } from "@/components/Theme";
import { RaffleAppData } from "@/constants/Data";
import { useAppContext } from "@/context/AppContext";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import {
  Button,
  H3,
  Image,
  ScrollView,
  SizableText,
  XStack,
  YStack,
} from "tamagui";

export default function RaffleDetail() {
  const { id: raffleId } = useLocalSearchParams();
  const colorScheme = useColorScheme() ?? "light";

  // Mock data (replace with API or state management)
  const raffle = {
    image: require("../../../../assets/images/car.png"),
    entryFee: "$1",
    totalParticipants: "1,234",
    timeOptions: [
      { label: "2 Days", value: "2d" },
      { label: "14 Hours", value: "14h" },
      { label: "30 Minutes", value: "30m" },
      { label: "45 Seconds", value: "45s" },
    ],
    ...RaffleAppData.getInstance().getRaffleById(Number(raffleId)),
  };

  const { myraffles, updateMyRaffles, profileData, updateProfileData } =
    useAppContext();

  return (
    <ScrollView flex={1} bg="$background">
      <YStack flex={1} gap="$5">
        <XStack>
          <Image
            src={raffle?.img}
            width="100%"
            height={200}
            resizeMode="cover"
          />
        </XStack>

        <YStack gap="$5" px={"$3"}>
          <H3>{raffle?.title}</H3>
          <SizableText size="$4">{raffle?.detail}</SizableText>

          <YStack gap="$3">
            <XStack jc="space-between">
              <SizableText size="$5">Entry Fee</SizableText>
              <SizableText size="$5">{raffle?.entryFee}</SizableText>
            </XStack>
            <XStack jc="space-between">
              <SizableText size="$5">Total Participants</SizableText>
              <SizableText size="$5">{raffle?.totalParticipants}</SizableText>
            </XStack>
          </YStack>

          <YStack gap="$3" marginTop="$3">
            <H3>Time Remaining</H3>
            <XStack gap="$3" flex={1}>
              {raffle?.timeOptions.map((option) => (
                <YStack key={option.value} gap={"$2"} flex={1}>
                  <Button size="$3">{option.label?.split(" ")[0]}</Button>
                  <SizableText size="$3" alignSelf="center" fontWeight={400}>
                    {option.label?.split(" ")[1]}
                  </SizableText>
                </YStack>
              ))}
            </XStack>
          </YStack>

          <Button
            marginTop="$4"
            size="$5"
            borderRadius="$6"
            bg={themes[colorScheme ?? "light"].accent10}
            onPress={() => {
              updateMyRaffles([...myraffles, Number(raffleId)]);
              router.push("/raffles/raffleEntry");
            }}
          >
            Enter Now
          </Button>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
