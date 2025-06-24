import { settingsData } from "@/constants";
import React from "react";
import {
  Button,
  H4,
  ScrollView,
  SizableText,
  Switch,
  XStack,
  YStack,
} from "tamagui";

export default function setting() {
  const [toggles, setToggles] = React.useState({
    raffleUpdates: false,
    winningNotifications: true,
  });

  const handleToggleChange = (valueKey: string, value: boolean) => {
    setToggles((prev) => ({ ...prev, [valueKey]: value }));
  };

  return (
    <ScrollView flex={1} bg="$background">
      <YStack px="$3">
        {settingsData.map((item, index) => (
          <YStack gap="$2" key={item.section + index}>
            <H4>{item.section}</H4>
            <YStack jc="center">
              {item.items.map((item, index) => (
                <XStack
                  gap="$3"
                  alignItems="center"
                  jc="space-between"
                  key={item.title + index}
                  py="$3"
                >
                  <XStack alignItems="center" gap="$3">
                    <Button>
                      <item.icon size="$1" />
                    </Button>
                    <YStack jc="center" alignSelf="center">
                      <SizableText>{item.title}</SizableText>
                      {item?.description.length && (
                        <SizableText theme="alt2">
                          {item?.description}
                        </SizableText>
                      )}
                    </YStack>
                  </XStack>
                  {item.variant == "toggle" && item?.valueKey && (
                    <Switch
                      als="flex-end"
                      size="$3"
                      value={toggles[item?.valueKey] as boolean}
                      onChange={(value: boolean) =>
                        handleToggleChange(item?.valueKey, value)
                      }
                    >
                      <Switch.Thumb />
                    </Switch>
                  )}
                </XStack>
              ))}
            </YStack>
          </YStack>
        ))}
      </YStack>
    </ScrollView>
  );
}
