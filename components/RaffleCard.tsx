import React from "react";
import { Card, Image, SizableText, XStack, YStack,H4 } from "tamagui";

export default function RaffleCard() {
  return (
    <Card elevate size="$4" w={250} p={0} pt={4} my="$2" mx="$1">
      <XStack jc="space-between">
        <YStack>
          <H4>Win a Trip to Dubai</H4>
          <SizableText size="$5" theme="alt2">Experience the ultimate luxury</SizableText>
        </YStack>
        <YStack>
          <Image
            resizeMode="contain"
            //alignSelf="center"
            borderTopLeftRadius="$5"
            borderTopRightRadius="$5"
            w="100%"
            h={160}
            source={{
              uri: require("../assets/images/image.png"),
            }}
          />
        </YStack>
      </XStack>
    </Card>
  );
}
