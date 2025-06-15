import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/HapticTab";
import { themes } from "@/components/Theme";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  BellRing,
  Compass,
  House,
  Ticket,
  Trophy,
  User,
} from "@tamagui/lucide-icons";
import { Platform } from "react-native";
import { Button } from "tamagui";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themes[colorScheme ?? "light"].accent9, // Active tab highlight
        tabBarInactiveTintColor: themes[colorScheme ?? "light"].color08, // Inactive tab
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerTitleStyle: {
          color: themes[colorScheme ?? "light"].color,
        },
        headerStyle: {
          backgroundColor: themes[colorScheme ?? "light"].background,
        },
        headerTitleAlign: "center",
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "transparent",
          },
          default: {
            backgroundColor:
              colorScheme === "light"
                ? themes.light.background
                : themes.dark.background,
            borderWidth: 0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Raffle Mania",
          tabBarLabel:"Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: themes[colorScheme ?? "light"].background,
          },
          tabBarIcon: ({ color }) => <House size="$2" color={color} />,
          headerShown: false,
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
      <Tabs.Screen
        name="(myraffles)"
        options={{
          title: "My Raffles",
          tabBarIcon: ({ color }) => <Ticket size="$2" color={color} />,
          headerStyle: {
            borderWidth: 0,
            shadowRadius: 0,
            elevation: 0,
            backgroundColor:
              colorScheme === "light"
                ? themes.light.background
                : themes.dark.background,
          },
        }}
      />
      <Tabs.Screen
        name="winners"
        options={{
          title: "Winners",
          tabBarIcon: ({ color }) => <Trophy size="$2" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <Compass size="$2" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size="$2" color={color} />,
        }}
      />
    </Tabs>
  );
}
