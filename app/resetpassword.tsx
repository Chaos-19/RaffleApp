import { useAppContext } from "@/context/AppContext";
import { router } from "expo-router";
import React from "react";
import { showMessage } from "react-native-flash-message";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { Input, Label, ScrollView, XStack, YStack } from "tamagui";

export default function ResetPassword() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { profileData, notifications, updateProfileData, updateNotification } =
    useAppContext();

  const [errors, setErrors] = React.useState(true);

  const onNextStep = () => {
    if (email && email === profileData.email) {
      setErrors(false);
    } else {
      showMessage({
        message: "Email not found",
        description: "Please check your email address.",
        type: "danger",
      });
    }
  };

  return (
    <ScrollView bg="$background" flex={1}>
      <ProgressSteps>
        <ProgressStep label="Enter Email" onNext={onNextStep} errors={errors}>
          <YStack f={1} py="$2">
            {/* Form */}
            <YStack w="100%" gap="$2" ai="center">
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
                  />
                </YStack>
              </XStack>
            </YStack>
          </YStack>
        </ProgressStep>
        <ProgressStep
          label="New Password"
          onSubmit={() => {
            if (password) {
              updateProfileData({ ...profileData, password });
              showMessage({
                message: "Password updated successfully",
                type: "success",
              });
              updateNotification([
                ...notifications,
                {
                  id: `${notifications.length + 1}`,
                  title: "Password Updated",
                  type: "PasswordReset",
                  message: "Your password has been updated successfully.",
                  date: new Date().toISOString(),
                  read: false,
                },
              ]);
              router.push("/sign-in");
            } else {
              setErrors(false);
              showMessage({
                message: "Password is required",
                type: "danger",
              });
            }
          }}
        >
          <XStack w="90%">
            <YStack w="100%">
              <Label htmlFor="password" pl="$1">
                Password
              </Label>
              <Input
                size="$5"
                placeholder="New Password"
                value={password}
                onChangeText={setPassword}
              />
            </YStack>
          </XStack>
        </ProgressStep>
      </ProgressSteps>
    </ScrollView>
  );
}
