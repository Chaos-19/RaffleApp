import { formatTransactionPrice } from "@/utils";
import { Ticket, Wallet } from "@tamagui/lucide-icons";
import React from "react";
import { SizableText, XStack, YStack } from "tamagui";

type TransactionCardProps = {
  type: string;
  item: string;
  description: string;
  amount: number;
};

export default function TransactionCard({
  type,
  item,
  description,
  amount,
}: TransactionCardProps) {
  return (
    <XStack gap="$4" py="$2">
      {type == "Raffle" ? <Ticket size="$4" /> : <Wallet size="$4" />}
      <XStack flex={1} alignItems="center" jc="space-between">
        <YStack>
          <SizableText size="$6">
            {type}
            {type !== item ? `: ${item}` : ""}
          </SizableText>
          <SizableText size="$5" theme="alt2">
            {Boolean(description) ? description : type}
          </SizableText>
        </YStack>
        <SizableText size="$6">{formatTransactionPrice(amount)}</SizableText>
      </XStack>
    </XStack>
  );
}
