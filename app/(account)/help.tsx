import SearchBar from "@/components/SearchBar";
import {
  ArrowBigRight,
  ArrowRight,
  CreditCard,
  FileQuestion,
  Mail,
  Mailbox,
  MailOpen,
  MessageCircleMore,
  MessageSquare,
  MessagesSquare,
  Ticket,
  Trophy,
  UserCircle,
} from "@tamagui/lucide-icons";
import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Card,
  H3,
  H4,
  ScrollView,
  SizableText,
  XStack,
  YStack,
} from "tamagui";

export default function help() {
  const contact = [
    { title: "Email Support", icon: MailOpen, link: ">" },
    { title: "Live Chat", icon: MessageCircleMore, link: ">" },
  ];
  return (
    <ScrollView bg="$background" flex={1}>
      <YStack gap="$3">
        <SearchBar />
        <YStack gap="$5" px="$3">
          <H3 px="$1">Popular Topics</H3>
          <YStack jc="center" gap="$3">
            <XStack justifyContent="space-around" alignItems="center" gap="$2">
              <YStack
                alignItems="center"
                py="$6"
                flex={1}
                borderWidth={2}
                borderColor="$borderColorHover"
                borderRadius={18}
              >
                <Card>
                  <XStack gap="$2" pr="$2">
                    <FileQuestion />
                    <H4>Getting Started</H4>
                  </XStack>
                </Card>
              </YStack>

              <YStack
                alignItems="center"
                py="$6"
                flex={1}
                borderWidth={2}
                borderColor="$borderColorHover"
                borderRadius={18}
              >
                <Card>
                  <XStack gap="$2">
                    <Ticket />
                    <H4>Entering Raffles</H4>
                  </XStack>
                </Card>
              </YStack>
            </XStack>

            <XStack justifyContent="space-around" alignItems="center" gap="$2">
              <YStack
                alignItems="center"
                py="$6"
                flex={1}
                borderWidth={2}
                borderColor="$borderColorHover"
                borderRadius={18}
              >
                <Card>
                  <XStack gap="$2">
                    <CreditCard />
                    <H4>Payment Issues</H4>
                  </XStack>
                </Card>
              </YStack>

              <YStack
                alignItems="center"
                py="$6"
                flex={1}
                borderWidth={2}
                borderColor="$borderColorHover"
                borderRadius={18}
              >
                <Card>
                  <XStack gap="$2">
                    <Trophy />
                    <H4>Winning & Prizes</H4>
                  </XStack>
                </Card>
              </YStack>
            </XStack>

            <XStack justifyContent="flex-start" gap="$2">
              <YStack
                alignItems="center"
                py="$6"
                flex={0.5}
                borderWidth={2}
                borderColor="$borderColorHover"
                borderRadius={18}
              >
                <Card>
                  <XStack gap="$2">
                    <UserCircle />
                    <H4>Account Help</H4>
                  </XStack>
                </Card>
              </YStack>
            </XStack>
          </YStack>

          <YStack gap="$3">
            <H3 px="$1">Contact Us</H3>
            <YStack gap="$2">
              {contact.map((item) => (
                <XStack alignItems="center" jc="space-between" gap="$3" key={item.title}>
                  <XStack alignItems="center" gap="$3">
                    <Button>
                      <item.icon size="$2" />
                    </Button>
                    <SizableText size="$5">{item.title}</SizableText>
                  </XStack>
                  <ArrowRight />
                </XStack>
              ))}
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
