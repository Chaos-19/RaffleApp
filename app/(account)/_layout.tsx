import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themes } from "@/components/Theme";
import { Stack } from "expo-router";
import { currentTheme } from "@/hooks/useThemeColor";

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
    </Stack>
  );
}
