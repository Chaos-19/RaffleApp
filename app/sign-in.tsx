import { useSession } from "@/hooks/ctx";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";
import {
  Button,
  H3,
  Input,
  ScrollView,
  SizableText,
  XStack,
  YStack,
} from "tamagui";

export default function SignUp() {
  const { signIn } = useSession();

  const screenHeight = Dimensions.get('window').height;

  return (
    <ScrollView flex={1} bc="$background" >
      <YStack h={screenHeight}>
        {/* Header Image */}
        <YStack w="100%" h={200}>
          <Image
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
            source={require("../assets/images/login-header.png")}
          />
        </YStack>

        {/* Form */}
        <YStack w="100%" gap="$4" ai="center">
          <H3 ta="center" color="$black" m="$5">
            Welcome Back
          </H3>
          <XStack w="90%">
            <YStack w="100%" gap="$3">
              <Input size="$4" placeholder="Email" />
              <Input size="$4" placeholder="Password" secureTextEntry />
            </YStack>
          </XStack>
          <Link href="/sign-up" asChild>
            <SizableText ta="center" color="$blue10">
              Forget password
            </SizableText>
          </Link>
          <Link href="/sign-up" asChild>
            <SizableText ta="center" color="$blue10">
              Create Account
            </SizableText>
          </Link>
        </YStack>
      
        {/* Buttons */}
        <YStack flex={1} jc="flex-end" gap="$4" p="$4" pb="$6">
          <XStack>
            <Button
              flex={1}
              bg="$green10"
              color="$white"
              onPress={() => {
                signIn();
                router.replace("/");
              }}
            >
              SignIn
            </Button>
          </XStack>
          <SizableText ta="center" size="$3">
            Or Continue With
          </SizableText>
          <XStack jc="space-around" gap="$2">
            <Button flex={1}>Google</Button>
            <Button flex={1}>Facebook</Button>
          </XStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
