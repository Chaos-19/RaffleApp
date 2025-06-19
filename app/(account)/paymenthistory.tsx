import { FlatList } from "react-native";
import React from "react";
import { Avatar, H3, SizableText, XStack, YStack, Button, View } from "tamagui";

import TransactionCard from "@/components/TransactionCard";
import { transactions } from "@/constants";
import { currentTheme } from "@/hooks/useThemeColor";

export default function paymenthistory() {
  return (
    <YStack bg="$background" flex={1}>
      <YStack px="$3">
        <FlatList
          ItemSeparatorComponent={() => <View w={7} />}
          data={[...transactions]}
          renderItem={({ item }) => <TransactionCard {...item} />}
          keyExtractor={(item) => item.type + Math.random()}
          // ListHeaderComponent={() => {
          //   return (
          //     <YStack>
          //       <YStack jc="center" alignItems="center" gap="$5">
          //         <XStack alignSelf="center" pt="$6">
          //           <Avatar circular size="$10">
          //             <Avatar.Image src={"http://picsum.photos/200/300"} />
          //             <Avatar.Fallback bc="red" />
          //           </Avatar>
          //         </XStack>

          //         <YStack alignItems="center">
          //           <H3>Ethan Carter</H3>
          //           <SizableText size="$5" theme="alt2">
          //             Balance
          //           </SizableText>
          //           <SizableText size="$5" theme="alt2">
          //             $120.00
          //           </SizableText>
          //         </YStack>

          //         <XStack>
          //           <Button borderRadius="$4" bg={currentTheme().accent10}>
          //             Add Fund
          //           </Button>
          //         </XStack>
          //       </YStack>
          //       <YStack my="$4" px="$1">
          //         <H3>Transaction History</H3>
          //       </YStack>
          //     </YStack>
          //   );
          // }}
        />
      </YStack>
    </YStack>
  );
}
