import { useAppContext } from "@/context/AppContext";
import { useSession } from "@/hooks/ctx";
import { currentTheme } from "@/hooks/useThemeColor";
import { Check as CheckIcon, Eye, EyeOff } from "@tamagui/lucide-icons";
import { Link, router } from "expo-router";
import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { showMessage } from "react-native-flash-message";
import PhoneInput from "react-native-phone-number-input";
// @ts-ignore
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

const InputWithIcon = ({
  placeholder,
  value,
  onChangeText,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <XStack w="100%" position="relative">
      <TextInput
        style={{
          flex: 1,
          height: 48,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          paddingHorizontal: 12,
          fontSize: 16,
          color: currentTheme().color,
        }}
        secureTextEntry={!showPassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        position="absolute"
        right={12}
        top={8}
        transparent
        onPress={handleToggle}
      >
        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
      </Button>
    </XStack>
  );
};

export default function SignUp() {
  const { updateProfileData } = useAppContext();
  const { signIn } = useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [formattedPhone, setFormattedPhone] = useState("");
  const [selectedCode, setSelectedCode] = useState("ET");

  const phoneInput = useRef<PhoneInput>(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    acceptTerms: "",
  });

  const onSubmit = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      acceptTerms: "",
    };

    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!phoneValue) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneInput.current?.isValidNumber(phoneValue)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    if (!acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      showMessage({
        message: "Please fix the highlighted errors.",
        type: "danger",
      });
      return;
    }

    // ✅ Proceed if valid
    updateProfileData({
      name,
      email,
      password,
      phoneNum: formattedPhone,
    });

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bc="$background">
        <YStack f={1} py="$7">
          <YStack w="100%">
            <Heading alignSelf="center">Sign Up</Heading>
          </YStack>

          <YStack w="100%" gap="$3" ai="center">
            {/* Name */}
            <XStack w="90%">
              <YStack w="100%">
                <Label pl="$1">Name</Label>
                <Input
                  size="$5"
                  placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                  borderColor={errors.name ? "red" : "$gray8"}
                />
                {errors.name && (
                  <SizableText color="red" size="$2">
                    {errors.name}
                  </SizableText>
                )}
              </YStack>
            </XStack>

            {/* Email */}
            <XStack w="90%">
              <YStack w="100%">
                <Label pl="$1">Email</Label>
                <Input
                  size="$5"
                  placeholder="Email Address"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  borderColor={errors.email ? "red" : "$gray8"}
                />
                {errors.email && (
                  <SizableText color="red" size="$2">
                    {errors.email}
                  </SizableText>
                )}
              </YStack>
            </XStack>

            {/* Phone */}
            <YStack w="90%">
              <Label pl="$1">Phone Number</Label>
              <YStack
                mt="$2"
                bc="$background"
                borderRadius="$4"
                borderWidth={1}
                borderColor={errors.phone ? "red" : "$gray8"}
                height={60}
                px="$2"
                jc="center"
              >
                <PhoneInput
                  ref={phoneInput}
                  value={phoneValue}
                  code={selectedCode}
                  defaultCode="ET"
                  layout="first"
                  onChangeText={setPhoneValue}
                  onChangeFormattedText={setFormattedPhone}
                  onChangeCountry={(country) => {
                    setSelectedCode(country.cca2);
                  }}
                  withDarkTheme={false}
                  withShadow={false}
                  disableArrowIcon={false}
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
                    flex: 1,
                  }}
                  textInputStyle={{
                    color: currentTheme().color,
                    fontSize: 16,
                  }}
                  codeTextStyle={{
                    color: currentTheme().color,
                    fontSize: 16,
                  }}
                />
              </YStack>
              {errors.phone && (
                <SizableText color="red" size="$2">
                  {errors.phone}
                </SizableText>
              )}
            </YStack>

            {/* Password */}
            <XStack w="90%">
              <YStack w="100%">
                <Label pl="$1">Password</Label>
                <InputWithIcon
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                />
                {errors.password && (
                  <SizableText color="red" size="$2">
                    {errors.password}
                  </SizableText>
                )}
              </YStack>
            </XStack>

            {/* Confirm Password */}
            <XStack w="90%">
              <YStack w="100%">
                <Label pl="$1">Confirm Password</Label>
                <InputWithIcon
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                {errors.confirmPassword && (
                  <SizableText color="red" size="$2">
                    {errors.confirmPassword}
                  </SizableText>
                )}
              </YStack>
            </XStack>

            {/* Terms */}
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
            {errors.acceptTerms && (
              <SizableText color="red" size="$2">
                {errors.acceptTerms}
              </SizableText>
            )}

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

          {/* Footer */}
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
