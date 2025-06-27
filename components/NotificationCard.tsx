import { Notification } from "@/context/AppContext";
import { KeySquare, Ticket, Wallet } from "@tamagui/lucide-icons";
import React from "react";
import { SizableText, XStack, YStack } from "tamagui";

type NotificationCardProps = Notification;

export default function NotificationCard({
    title,
    type,
    message,
    date,
} : NotificationCardProps) {

    const icons = {
        Winner: <Ticket size="$3" />,
        Wallet: <Wallet size="$3" />,
        Entry: <Ticket size="$3" />,
        PasswordReset: <KeySquare size="$3" />,
    }

    const notificationTitle = {
        Winner: "Raffle Winner",
        Wallet: "Wallet Update",
        Entry: "Raffle Entry",
        PasswordReset: "Password update",
    }

    const notificationDate = new Date(date);
    const formattedDate = notificationDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });


  return (
    <XStack gap="$4" py="$2">
      {        icons[type] || <Ticket size="$4" />}
      <XStack flex={1} alignItems="center" jc="space-between">
        <YStack>
          <SizableText size="$6">
            {notificationTitle[type] || title}
          </SizableText>
          <SizableText size="$5" theme="alt2">
            {message}
          </SizableText>
        </YStack>
        <SizableText size="$6">{formattedDate}</SizableText>
      </XStack>
    </XStack>
  );
}

