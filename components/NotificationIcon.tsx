import { BellRing } from "@tamagui/lucide-icons";
import { Button,  YStack, View, SizableText } from "tamagui";
import { router } from "expo-router";
import { useColorScheme } from "react-native";
import React from "react";
import { themes } from "./Theme";


export default function NotificationHeaderRight ({unreadCount}:{unreadCount: number})  {
  const colorScheme = useColorScheme();

  return (
    <Button
      chromeless
      paddingHorizontal="$2"
      onPress={() => {
        router.push("/notification");
      }}
    >
      <YStack position="relative">
        <BellRing
          size="$2"
          color={themes[colorScheme ?? "light"].color}
        />
        {unreadCount > 0 && (
          <View
            position="absolute"
            top={-4}
            right={-4}
            bg="$red10"
            borderRadius={9999}
            minWidth={16}
            height={16}
            jc="center"
            ai="center"
            px={4}
          >
            <SizableText size="$1" color="white" fontWeight="700">
              {unreadCount}
            </SizableText>
          </View>
        )}
      </YStack>
    </Button>
  );
};
