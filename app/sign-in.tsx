import { useAppContext } from "@/context/AppContext"; // Adjust this path if necessary
import { useSession } from "@/hooks/ctx";
//import { Toast, useToastController, useToastState } from "@tamagui/toast";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { showMessage } from "react-native-flash-message";
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

  const screenHeight = Dimensions.get("window").height;
  const { profileData } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const toast = useToastController();

  const onSignIn = () => {
    if (email && password) {
      const isUserExist =
        profileData.email === email && profileData.password === password;
      if (isUserExist) {
        signIn();
        router.replace("/");
      } else {
        showMessage({
          message: "Invalid credentials ❌,",
          description: "Please check your email or password.",
          type: "danger",
        });
      }
    } else {
      showMessage({
        message: "Missing Fields,",
        description: "Please fill in both email and password.",
        type: "danger",
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView flex={1} bc="$background">
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
                <Input
                  size="$4"
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  size="$4"
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </YStack>
            </XStack>
            <Link href="/resetpassword" asChild>
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
              <Button flex={1} bg="$green10" color="$white" onPress={onSignIn}>
                Signin
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
    </SafeAreaView>
  );
}
