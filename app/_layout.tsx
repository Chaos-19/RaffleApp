import { TamaguiProvider, Theme } from "@tamagui/core";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { PortalProvider } from "tamagui";
import config from "../tamagui.config";

import { themes } from "@/components/Theme";
import { SessionProvider, useSession } from "@/hooks/ctx";

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
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
    </SessionProvider>
  );
}

function RootNavigator() {
  const { session, signOut, } = useSession();
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:2695643247.
    // signOut();
  }, []);

  return (
    <Stack>
      <Stack.Protected guard={Boolean(true)}>
        <Stack.Screen
          name="(tabs)"
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
