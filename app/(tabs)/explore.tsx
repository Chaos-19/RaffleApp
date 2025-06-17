import { currentTheme } from "@/hooks/useThemeColor";
import { Wallet } from "@tamagui/lucide-icons";
import React from "react";
import { Avatar, Button, SizableText, Text, XStack, YStack } from "tamagui";

export default function Explore() {

  return (
    <YStack flex={1} bg="$background">
      {/* Profile Section */}
      <YStack alignItems="center" p={16} gap="$4">
        <XStack alignSelf="center" pt="$6">
          <Avatar circular size="$10">
            <Avatar.Image src={"http://picsum.photos/200/300"} />
            <Avatar.Fallback bc="red" />
          </Avatar>
        </XStack>
        <YStack gap="$2" alignItems="center" jc="center">
          <Text fontWeight="bold">Sophia Carter</Text>
          <Text>@sophiac</Text>
          <Button onPress={() => {}}>Edit Profile</Button>
        </YStack>
      </YStack>

      {/* Wallet Section */}
      <XStack p={16} jc="space-between" alignItems="center">
        <XStack gap="$3" alignItems="center">
          <Wallet size="$4" />
          <YStack alignItems="center">
            <Text fontSize={18}>Wallet</Text>
            <Text>$12.00</Text>
          </YStack>
        </XStack>
        <Button mt={8} onPress={() => {}} bg={currentTheme().accent10}>
          Add Funds
        </Button>
      </XStack>

      {/* Stats Section */}
      <YStack p={16} gap="$2">
        <XStack justifyContent="space-around" alignItems="center" gap="$2">
          <YStack
            alignItems="center"
            py="$5"
            flex={1}
            borderWidth={2}
            borderColor="$borderColorHover"
            borderRadius={3}
          >
            <Text fontWeight="bold" fontSize={20}>23</Text>
            <Text >Entries</Text>
          </YStack>

          <YStack
            alignItems="center"
            py="$5"
            flex={1}
            borderWidth={2}
            borderColor="$borderColorHover"
            borderRadius={3}
          >
            <Text fontWeight="bold" fontSize={20}>5</Text>
            <Text>Prizes Won</Text>
          </YStack>
        </XStack>
        <YStack
          alignItems="center"
          py="$4"
          borderWidth={2}
          borderColor="$borderColorHover"
          borderRadius={3}
        >
          <SizableText size="$7" fontWeight={600}>100</SizableText>
          <SizableText>Tickets Bought</SizableText>
        </YStack>
      </YStack>

      {/* Account Section */}
      <YStack>
        <XStack w="100%" p="$8">
          <Button flex={1} >Logout</Button>
        </XStack>
      </YStack>
    </YStack>
  );
}
