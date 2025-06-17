import { themes } from "@/components/Theme";
import { BellRing } from "@tamagui/lucide-icons";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { Button } from "tamagui";

export default function Layout() {
  const colorScheme = useColorScheme();
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
                <BellRing
                  size="$2"
                  color={themes[colorScheme ?? "light"].color}
                />
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
          title: "Raffle Deat",
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
