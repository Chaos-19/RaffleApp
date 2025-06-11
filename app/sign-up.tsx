import { useSession } from "@/hooks/ctx";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Checkbox,
  Heading,
  Input,
  Label,
  ScrollView,
  SizableText,
  XStack,
  YStack,
} from "tamagui";

export default function SignUp() {
  const { signIn } = useSession();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView  bc="$background">
        <YStack f={1}  py="$7">
          {/* Header Image */}
          <YStack w="100%">
            <Heading alignSelf="center">Sign Up</Heading>
          </YStack>

          {/* Form */}
          <YStack w="100%" gap="$2" ai="center">
            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="name" pl="$1">
                  Name
                </Label>
                <Input size="$5" placeholder="Full Name" />
              </YStack>
            </XStack>

            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="email" pl="$1">
                  Email
                </Label>
                <Input size="$5" placeholder="Email Address" />
              </YStack>
            </XStack>

            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="Phone Number" pl="$1">
                  Phone Number
                </Label>
                <Input size="$5" placeholder="Phone Number" />
              </YStack>
            </XStack>

            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="password" pl="$1">
                  Password
                </Label>
                <Input size="$5" placeholder="Password" secureTextEntry />
              </YStack>
            </XStack>

            <XStack w="90%" alignItems="center" gap="$4">
              <Checkbox id="acceptPolicy" size="$4">
                <Checkbox.Indicator>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox>

              <Label size="$5" htmlFor="acceptPolicy">
                Accept terms and conditions
              </Label>
            </XStack>

            <Link href="/sign-in" asChild>
              <SizableText ta="center" color="$blue10">
                Aready have an account? <SizableText fontWeight={700} color="$blue10"> Sign In</SizableText>
              </SizableText>
            </Link>
          </YStack>

          {/* Buttons */}
          <YStack f={1} jc="flex-end" gap="$4" p="$4" pb="$6">
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
                Sign Up
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
