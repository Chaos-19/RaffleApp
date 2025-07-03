import NotificationHeaderRight from "@/components/NotificationIcon";
import { themes } from "@/components/Theme";
import { useAppContext } from "@/context/AppContext";
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { Button } from "tamagui";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Layout() {
  const colorScheme = useColorScheme();

  const { notifications } = useAppContext();

  const unSeenNotifications = notifications.filter(
    (v) => v.read === false
  ).length;

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          color: themes[colorScheme ?? "light"].color,
        },
        headerTintColor: themes[colorScheme ?? "light"].color,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Raffle Mania",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: themes[colorScheme ?? "light"].background,
          },
          headerTitleStyle: {
            color: themes[colorScheme ?? "light"].color,
          },
          headerRight: () => (
            <Button
              icon={
                <NotificationHeaderRight unreadCount={unSeenNotifications} />
              }
              chromeless
              paddingHorizontal="$2"
            />
          ),
        }}
      />
      <Stack.Screen
        name="raffles/[id]"
        options={{
          title: "Raffle Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: themes[colorScheme ?? "light"].background,
          },
          headerTitleStyle: {
            color: themes[colorScheme ?? "light"].color,
          },
          headerTintColor: themes[colorScheme ?? "light"].color,
        }}
      />
      <Stack.Screen
        name="raffles/raffleEntry"
        options={{
          title: "Raffle Entry",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: themes[colorScheme ?? "light"].background,
          },
          headerTitleStyle: {
            color: themes[colorScheme ?? "light"].color,
          },
          headerTintColor: themes[colorScheme ?? "light"].color,
        }}
      />
    </Stack>
  );
}
