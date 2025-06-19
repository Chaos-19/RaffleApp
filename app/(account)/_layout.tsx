import { currentTheme } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  const theme = currentTheme();
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
      <Stack.Screen name="notification" options={{}} />
    </Stack>
  );
}
