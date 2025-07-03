import { useAppContext } from "@/context/AppContext";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";
import {
  Avatar,
  Button,
  Input,
  Label,
  ScrollView,
  XStack,
  YStack,
} from "tamagui";

export default function UpdateProfile() {
  const { profileData, updateProfileData } = useAppContext();

  const [name, setName] = useState(profileData.name ?? "");
  const [email, setEmail] = useState(profileData.email ?? "");
  const [phone, setPhone] = useState(profileData.phoneNum ?? "");
  const [password, setPassword] = useState(profileData.password ?? "");
  const [imageUri, setImageUri] = useState<string | null>(
    profileData.profileImage ?? null
  );

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const onUpdate = () => {
    if (!name || !email || !phone || !password) {
      showMessage({
        message: "All fields are required",
        type: "danger",
      });
      return;
    }

    updateProfileData({
      name,
      email,
      phoneNum: phone,
      password,
      profileImage: imageUri as string,
    });

    showMessage({
      message: "Profile updated successfully!",
      type: "success",
    });

    router.back(); // or replace with profile screen
  };

  return (
    <>
      <ScrollView bc="$background">
        <YStack flex={1} py="$7">
          {/* Profile Image */}
          <XStack w="100%" jc="center" mb="$4">
            <YStack ai="center" gap="$4">
              <Avatar circular size="$10">
                <Avatar.Image
                  src={
                    profileData.profileImage ?? "http://picsum.photos/200/300"
                  }
                />
                <Avatar.Fallback bc="red" />
              </Avatar>

              <Button size="$3" onPress={pickImage}>
                Upload Photo
              </Button>
            </YStack>
          </XStack>

          {/* Form Fields */}
          <YStack w="100%" gap="$3" ai="center">
            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="name" pl="$1">
                  Name
                </Label>
                <Input
                  size="$5"
                  value={name}
                  onChangeText={setName}
                  placeholder="Full Name"
                />
              </YStack>
            </XStack>

            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="email" pl="$1">
                  Email
                </Label>
                <Input
                  size="$5"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email Address"
                />
              </YStack>
            </XStack>

            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="phone" pl="$1">
                  Phone Number
                </Label>
                <Input
                  size="$5"
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Phone Number"
                />
              </YStack>
            </XStack>

            <XStack w="90%">
              <YStack w="100%">
                <Label htmlFor="password" pl="$1">
                  Password
                </Label>
                <Input
                  size="$5"
                  value={password}
                  secureTextEntry
                  onChangeText={setPassword}
                  placeholder="Password"
                />
              </YStack>
            </XStack>
          </YStack>

          {/* Save Button */}
          <YStack mt="$6" px="$4">
            <Button bg="$green10" color="$white" onPress={onUpdate}>
              Save Changes
            </Button>
          </YStack>
        </YStack>
      </ScrollView>
    </>
  );
}
