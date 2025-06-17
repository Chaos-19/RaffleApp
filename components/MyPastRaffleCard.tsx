import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Link } from "expo-router";
import React from "react";
import { Button, Card, H5, Image, SizableText, XStack, YStack } from "tamagui";
import { themes } from "./Theme";

type MyPastRaffleCardProps = {
  name: string;
  entries: number;
  tickets: number;
  status: string;
  ended: string;
  image: string;
};

export default function MyPastRaffleCard({
  name,
  entries,
  tickets,
  status,
  ended,
  image,
}: MyPastRaffleCardProps) {
  const colorScheme = useColorScheme();

  return (
    <Card
      size="$4"
      w="97%"
      p={0}
      py="$1"
      bg={themes[colorScheme ?? "light"].background0}
    >
      <XStack flex={1} jc="space-between" alignItems="stretch">
        <YStack flex={1} jc="space-between" px="$2" gap="$3">
          <YStack gap="$0.25">
            <SizableText size="$5" theme="alt2">
              {`Ended on ${ended}`}
            </SizableText>
            <H5>{name}</H5>
            <SizableText size="$4" theme="alt2">
              {entries} entries
            </SizableText>
            <SizableText size="$4" theme="alt2">
              {tickets} tickets 
            </SizableText>
          </YStack>
          <XStack pb="$2">
            <Link href={`/raffles/${2}`} asChild>
              <Button>Completed</Button>
            </Link>
          </XStack>
        </YStack>
        <YStack flex={0.8}>
          <XStack>
            <Image
              resizeMode="cover"
              width="100%"
              height={140}
              borderRadius="$5"
              source={{
                uri: image,
              }}
            />
          </XStack>
        </YStack>
      </XStack>
    </Card>
  );
}
