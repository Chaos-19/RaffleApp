import { TamaguiProvider, Theme } from "@tamagui/core";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { PortalProvider } from "tamagui";
import config from "../tamagui.config";

import { themes } from "@/components/Theme";
import { SessionProvider, useSession } from "@/hooks/ctx";
import ProviderAppContext from "@/context/AppContext"; // Adjust this path if necessary

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <SessionProvider>
      <ProviderAppContext>
        <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
          <Theme>
            <PortalProvider>
              <RootNavigator />
            </PortalProvider>
            <StatusBar
              backgroundColor={themes[colorScheme ?? "light"].background}
              barStyle={
                (colorScheme && colorScheme === "dark") ?? "light"
                  ? "light-content"
                  : "dark-content"
              }
            />
          </Theme>
        </TamaguiProvider>
      </ProviderAppContext>
    </SessionProvider>
  );
}

function RootNavigator() {
  const { session, signOut } = useSession();
  const colorScheme = useColorScheme();

  useEffect(() => {
    // signOut();
  }, []);

  return (
    <Stack>
      <Stack.Protected guard={Boolean(session)}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(account)"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}