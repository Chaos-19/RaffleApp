import React from "react";
import { Avatar, SizableText, XStack, YStack } from "tamagui";

type WinnerCardProps = {
  name: string;
  prize: string;
  image: string;
  position:string
};

export default function WinnerCard({ name, prize, image ,position}: WinnerCardProps) {
  return (
    <XStack gap="$4">
      <Avatar circular size="$6">
        <Avatar.Image src={image} />
        <Avatar.Fallback bc="red" />
      </Avatar>
      <XStack flex={1} alignSelf="center" jc="space-between">
        <YStack>
          <SizableText size="$6">{name}</SizableText>
          <SizableText size="$5" theme="alt2">
            won {prize}
          </SizableText>
        </YStack>
        <SizableText size="$5">{position}</SizableText>
      </XStack>
    </XStack>
  );
}
