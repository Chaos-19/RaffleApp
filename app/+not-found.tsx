import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import React from "react";
import { SizableText, YStack } from "tamagui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <YStack>
        <SizableText>This screen does not exist.</SizableText>
        <Link href="/">
          <SizableText ta="center" color="$blue10">
            Go to home screen!
          </SizableText>
        </Link>
      </YStack>
    </>
  );
}
