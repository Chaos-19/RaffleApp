import RaffleAppData from "@/constants/Data";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { RaffleType } from "@/utils/types";
import { Link } from "expo-router";
import React from "react";
import { Button, Card, H5, Image, SizableText, XStack, YStack } from "tamagui";
import { themes } from "./Theme";

export default function MyRafflesCard({
  title,
  description,
  img,
  date,
}: Partial<RaffleType>) {
  const daysLeft = date ? RaffleAppData.getDaysLeft(date) : 0;

  const colorScheme = useColorScheme()

  return (
    <Card size="$4" w="97%" p={0} py="$1"  bg={themes[colorScheme ?? "light"].background0}>
      <XStack flex={1} jc="space-between" alignItems="stretch">
        <YStack flex={1} jc="space-between" px="$2" gap="$3">
          <YStack gap="$0.25">
            <SizableText size="$5" theme="alt2">
              {`Ends in ${daysLeft} days`}
            </SizableText>
            <H5>{title}</H5>
            <SizableText size="$4" theme="alt2">
              {'100 entries'}
            </SizableText>
          </YStack>
          <XStack pb="$2">
            <Link href={`/raffles/${2}`} asChild>
              <Button>1 ticket</Button>
            </Link>
          </XStack>
        </YStack>
        <YStack flex={0.8}>
          <XStack >
            <Image
              resizeMode="cover"
              width="100%"
              height={140}
              borderRadius="$5"
              source={{
                uri: img,
              }}
            />
          </XStack>
        </YStack>
      </XStack>
    </Card>
  );
}
