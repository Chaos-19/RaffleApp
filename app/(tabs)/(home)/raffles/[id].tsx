import { themes } from "@/components/Theme";
import { RaffleAppData } from "@/constants/Data";
import { useAppContext } from "@/context/AppContext";
import { useCountdown } from "@/hooks/useCountdown";
import * as Notifications from "expo-notifications";
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

  const {
    myraffles,
    updateMyRaffles,
    profileData,
    updateProfileData,
    notifications,
    updateNotification,
  } = useAppContext();

  // Mock data (replace with API or state management)

  const raffleObj = RaffleAppData.getInstance();

  const raffleData = raffleObj.getRaffleById(Number(raffleId));
  const timeOptions = useCountdown(
    new Date(raffleData ? raffleData.endDate : "")
  );

  if (!raffleData) {
    return (
      <YStack flex={1} jc="center" ai="center">
        <H3>Raffle not found.</H3>
      </YStack>
    );
  }

  const raffle = {
    image: require("../../../../assets/images/car.png"),
    totalParticipants: "1,234",
    timeOptions: raffleObj.getFullTimeDifference(
      new Date(raffleData.startDate),
      new Date(raffleData.endDate)
    ),
    ...raffleData,
  };

  const onSubmit = async () => {
    updateMyRaffles([
      ...myraffles,
      {
        raffleId: Number(raffleId),
        tiketId: `${raffleId}${Math.random()}`,
      },
    ]);
    updateNotification([
      ...notifications,
      {
        id: `${raffleId}${Math.random()}`,
        title: `${raffle.title} Entry`,
        type: "Entry",
        message: `You have successfully joined the raffle for ${raffle.title}.`,
        date: new Date().toISOString(),
        read: false,
      },
    ]);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "📢 Raffle Entry Successful",
        body: `You have successfully joined the raffle for ${raffle.title}.`,
        sound: true,
      },
      trigger: null,
    });

    router.push("/raffles/raffleEntry");
  };

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
              {timeOptions.map((option) => (
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
            onPress={onSubmit}
          >
            Enter Now
          </Button>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
