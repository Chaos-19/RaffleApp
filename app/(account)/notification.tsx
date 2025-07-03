import NotificationCard from "@/components/NotificationCard";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { View, YStack } from "tamagui";

export default function Notification() {
  const { notifications, updateNotification } = useAppContext();

  useEffect(() => {
    updateNotification([...notifications.map((v) => ({ ...v, read: true }))]);
  });

  return (
    <YStack bg="$background" flex={1}>
      <YStack px="$3">
        <FlatList
          ItemSeparatorComponent={() => <View w={7} />}
          data={[...notifications]}
          renderItem={({ item }) => <NotificationCard {...item} />}
          keyExtractor={(item) => item.type + Math.random()}
        />
      </YStack>
    </YStack>
  );
}
