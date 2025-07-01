import { useAppContext } from "@/context/AppContext";
import { useSession } from "@/hooks/ctx";
import { currentTheme } from "@/hooks/useThemeColor";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { Link, router } from "expo-router";
import React, { useRef, useState } from "react";
import { showMessage } from "react-native-flash-message";
import PhoneInput from "react-native-phone-number-input";
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
  const { updateProfileData } = useAppContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [phoneValue, setPhoneValue] = useState("");
  const [formattedPhone, setFormattedPhone] = useState("");

  const phoneInput = useRef<PhoneInput>(null);

  const onSubmit = () => {
    const isValid = phoneInput.current?.isValidNumber(phoneValue);

    if (acceptTerms && name && email && password && phoneValue && isValid) {
      updateProfileData({
        name,
        email,
        password,
        phoneNum: formattedPhone,
      });

      router.replace("/sign-in");
    } else {
      showMessage({
        message:
          "Please fill all fields, enter a valid phone number, and accept the terms.",
        type: "danger",
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bc="$background">
        <YStack f={1} py="$7">
          {/* Header */}
          <YStack w="100%">
            <Heading alignSelf="center">Sign Up</Heading>
          </YStack>

          {/* Form Fields */}
          <YStack w="100%" gap="$3" ai="center">
            {/* Name */}
            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="name" pl="$1">
                  Name
                </Label>
                <Input
                  size="$5"
                  placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                />
              </YStack>
            </XStack>

            {/* Email */}
            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="email" pl="$1">
                  Email
                </Label>
                <Input
                  size="$5"
                  placeholder="Email Address"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
              </YStack>
            </XStack>

            {/* Phone Number with Country Code */}
            <YStack w="90%">
  <Label htmlFor="phone" pl="$1">
    Phone Number
  </Label>

  <YStack
    mt="$2"
    bc="$background"
    borderRadius="$4"
    borderWidth={1}
    borderColor="$gray8"
    height={60}
    overflow="visible"
    px="$2"
    jc="center"
  >
    <PhoneInput
      ref={phoneInput}
      defaultValue={phoneValue}
      defaultCode="ET"
      layout="first"
      onChangeText={setPhoneValue}
      onChangeFormattedText={setFormattedPhone}
      withDarkTheme={false}
      withShadow={false}
      disableArrowIcon={false} // ⬇️ shows the dropdown arrow
      autoFocus={false}
      placeholder="Phone Number"
      containerStyle={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
      }}
      textContainerStyle={{
        backgroundColor: "transparent",
        paddingVertical: 0,
        paddingLeft: 0,
      }}
      textInputStyle={{
        color: currentTheme().color,
        fontSize: 16,
      }}
      codeTextStyle={{
        color: currentTheme().color,
        fontSize: 16,
      }}
      flagButtonStyle={{
        marginLeft: 4,
        paddingHorizontal: 8,
      }}
    />
  </YStack>
</YStack>
x

            {/* Password */}
            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="password" pl="$1">
                  Password
                </Label>
                <Input
                  size="$5"
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </YStack>
            </XStack>

            {/* Accept Terms */}
            <XStack w="90%" ai="center" gap="$4">
              <Checkbox
                id="acceptPolicy"
                size="$4"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(!!checked)}
              >
                <Checkbox.Indicator>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox>

              <Label size="$5" htmlFor="acceptPolicy">
                Accept terms and conditions
              </Label>
            </XStack>

            {/* Sign In Link */}
            <Link href="/sign-in" asChild>
              <SizableText ta="center" color="$blue10">
                Already have an account?{" "}
                <SizableText fontWeight={700} color="$blue10">
                  Sign In
                </SizableText>
              </SizableText>
            </Link>
          </YStack>

          {/* Submit & Social Buttons */}
          <YStack f={1} jc="flex-end" gap="$4" p="$4" pb="$6">
            <XStack>
              <Button flex={1} bg="$green10" color="$white" onPress={onSubmit}>
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