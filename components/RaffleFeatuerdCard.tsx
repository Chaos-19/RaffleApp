import { RaffleType } from "@/utils/types";
import React from "react";
import { Card, H4, Image, SizableText, YStack } from "tamagui";

export default function RaffleFeatuerdCard({
  title,
  description,
  img,
}: Partial<RaffleType>) {
  return (
    <Card size="$2" w={250} p={0} pt={4} my="$2" mx="$1">
      <Card.Header p={1}>
        <Image
          resizeMode="contain"
          //alignSelf="center"
          borderTopLeftRadius="$5"
          borderTopRightRadius="$5"
          w="100%"
          h={160}
          source={{
            uri: img,
          }}
        />
      </Card.Header>
      <Card.Footer padded>
        <YStack>
          <H4>{title}</H4>
          <SizableText size="$5" theme="alt2">
            {description}
          </SizableText>
        </YStack>
      </Card.Footer>
    </Card>
  );
}
