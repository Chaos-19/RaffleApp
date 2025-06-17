import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/HapticTab";
import { themes } from "@/components/Theme";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform } from "react-native";
import { XStack } from "tamagui";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <XStack
      bg={themes[colorScheme ?? "light"].background}
      style={{
        flex: 1,
        //backgroundColor: themes[colorScheme ?? "light"].background,
      }}
    >
      <Tabs
        screenOptions={{
          tabBarPosition: "top",
          tabBarActiveTintColor: themes[colorScheme ?? "light"].accent9, // Active tab highlight
          tabBarInactiveTintColor: themes[colorScheme ?? "light"].color08, // Inactive tab
          headerRightContainerStyle: {
            paddingRight: 0,
          },
          headerTitleStyle: {
            color: themes[colorScheme ?? "light"].color,
          },
          //tabBarActiveBackgroundColor: "red",
          headerShown: false,
          //headerTitleAlign: 'center',
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarItemStyle: {
            justifyContent: "center",
            borderWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 16, // Customize label font size
            fontWeight: "bold", // Optional: Adjust font weight
            /*
            borderWidth: 2,
            borderColor: "red",
            */
          },
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
              paddind: 0,

              width: "40%",
              borderWidth: 0,
              shadowRadius:0,
              elevation:0
            },
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Raffle Mania",
            tabBarLabel: "Active",
            tabBarIconStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="past"
          options={{
            title: "Explore",
            tabBarLabel: "Past",
            tabBarIconStyle: { display: "none" },
          }}
        />
      </Tabs>
    </XStack>
  );
}
