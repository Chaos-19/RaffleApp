import React from "react";
import { XStack, YStack, Button, Text, Image, Separator } from "tamagui";


export default function Explore() {
  return (
    <YStack flex={1} bg="$background">
      {/* Profile Section */}
      <YStack alignItems="center" p={16}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual profile image URL
          width={100}
          height={100}
          borderRadius={50}
          borderWidth={2}
        />
        <Text fontWeight="bold" mt={8}>
          Sophia Carter
        </Text>
        <Text mb={8}>@sophiac</Text>
        <Button onPress={() => {}}>Edit Profile</Button>
      </YStack>

      {/* Wallet Section */}
      <YStack p={16}>
        <XStack justifyContent="space-between" alignItems="center">
          <Text>Wallet</Text>
          <Text>$12.00</Text>
        </XStack>
        <Button mt={8} onPress={() => {}}>
          Add Funds
        </Button>
      </YStack>

      {/* Stats Section */}
      <YStack p={16}>
        <XStack justifyContent="space-around" alignItems="center">
          <YStack alignItems="center">
            <Text fontWeight="bold">23</Text>
            <Text>Entries</Text>
          </YStack>
          <Separator vertical h={40} />
          <YStack alignItems="center">
            <Text fontWeight="bold">5</Text>
            <Text>Prizes Won</Text>
          </YStack>
        </XStack>
        <Text fontWeight="bold" mt={12} textAlign="center">
          100
        </Text>
        <Text textAlign="center">Tickets Bought</Text>
      </YStack>

      {/* Account Section */}
      <YStack p={16}>
        <Text mb={12}>Account</Text>
        <Button mb={8} onPress={() => {}}>
          My Raffles
        </Button>
        <Button mb={8} onPress={() => {}}>
          My Wins
        </Button>
        <Button mb={8} onPress={() => {}}>
          Payment History
        </Button>
        <Button mb={8} onPress={() => {}}>
          Notifications
        </Button>
        <Button mb={8} onPress={() => {}}>
          Settings
        </Button>
        <Button mb={8} onPress={() => {}}>
          Help/Support
        </Button>
        <Button onPress={() => {}}>Logout</Button>
      </YStack>
    </YStack>
  );
}
