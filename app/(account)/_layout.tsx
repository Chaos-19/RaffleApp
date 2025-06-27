import { useAppContext } from "@/context/AppContext";
import { currentTheme } from "@/hooks/useThemeColor";
import { Trash } from "@tamagui/lucide-icons";
import { Stack } from "expo-router";
import React from "react";
import { Button } from "tamagui";

export default function _layout() {
  const theme = currentTheme();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { notifications, updateNotification } = useAppContext();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          color: theme.color,
        },
        headerTintColor: theme.color,
      }}
    >
      <Stack.Screen name="settings" options={{}} />
      <Stack.Screen name="paymenthistory" options={{}} />
      <Stack.Screen name="help" options={{}} />
      <Stack.Screen name="UpdateProfile" options={{}} />
      <Stack.Screen
        name="notification"
        options={{
          title: "Notifications",
          headerRight: () => (
            <Button
              icon={
                <Trash
                  onPress={() => {
                    updateNotification([]);
                  }}
                />
              }
            />
          ),
        }}
      />
    </Stack>
  );
}
