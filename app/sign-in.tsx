import React from "react";
import { router } from 'expo-router';
import { View } from "react-native";
import { Button } from "tamagui";
import { useSession } from "@/hooks/ctx"

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Button color="green" onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        SignIn
      </Button>
    </View>
  );
}