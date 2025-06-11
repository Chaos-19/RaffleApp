import { Search } from "@tamagui/lucide-icons";
import React from "react";
import { Input, ScrollView, YStack, ZStack ,XStack} from "tamagui";

export default function HomeScreen() {
  return (
    <>
      <ScrollView bg="$background">
        <YStack>
        <YStack padding="$3">
            {/* Search Bar */}
            <XStack
              alignItems="center"
              backgroundColor="$white"
              borderRadius="$4"
              borderWidth={1}
              borderColor="$gray5"
              paddingLeft="$3"
            >
              <Search size="$2" color="$gray8" />
              <Input
                flex={1}
                size="$5"
                placeholder="Search..."
                borderWidth={0}
                backgroundColor="transparent"
                paddingLeft="$2"
                paddingRight="$3"
                paddingVertical="$2"
              />
            </XStack>
            {/* Add more content here */}
          </YStack>
        </YStack>
      </ScrollView>
    </>
  );
}
