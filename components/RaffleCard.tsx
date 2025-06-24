import RaffleAppData from "@/constants/Data";
import { RaffleType } from "@/utils/types";
import { Link } from "expo-router";
import React from "react";
import { Button, Card, H4, Image, SizableText, XStack, YStack } from "tamagui";

export default function RaffleCard({
  title,
  description,
  img,
  startDate,
  id
}: Pick<RaffleType,'title' | 'description' | 'img' | 'startDate' | 'id'>) {
  
  const daysLeft = startDate ? RaffleAppData.getDaysLeft(startDate) : 0;

  return (
    <Card size="$4" w="97%" p={0} py="$1" my="$1" mx="$1">
      <XStack flex={1} jc="space-between" alignItems="stretch">
        <YStack flex={1} jc="space-between" px="$2" gap="$3">
          <YStack gap="$1">
            <SizableText size="$5" theme="alt2">
              {`Ends in ${daysLeft} days`}
            </SizableText>
            <H4>{title}</H4>
            <SizableText size="$5" theme="alt2">
              {description}
            </SizableText>
          </YStack>
          <XStack pb="$2">
            <Link href={`/raffles/${id}`} asChild>
              <Button>Join Raffle</Button>
            </Link>
          </XStack>
        </YStack>
        <YStack flex={1}>
          <XStack w="100%">
            <Image
              resizeMode="cover"
              width="100%"
              height={160}
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
