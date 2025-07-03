import { Toast, ToastViewport, ToastProvider, useToastState } from "@tamagui/toast";
import React from "react";
import { YStack } from "tamagui";
import Constants, { ExecutionEnvironment } from "expo-constants";

const isExpo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

const NativeToast = () => {
  const currentToast = useToastState();
  if (!currentToast || currentToast.isHandledNatively) {
    return null;
  }
  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
    >
      <YStack>
        <Toast.Title lineHeight={8}>{currentToast.title}</Toast.Title>
        {!!currentToast.message && (
          <Toast.Description>{currentToast.message}</Toast.Description>
        )}
      </YStack>
    </Toast>
  );
};

const AppToastProvider =({children} :{ children: React.ReactNode }) => {
  return (
    <ToastProvider
      swipeDirection="horizontal"
      duration={6000}
      native={[
        /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
        "mobile",
      ]}
    >
      {children}
      {isExpo ? <NativeToast /> : null}
      <ToastViewport top={24} left={12} right={12} />;
    </ToastProvider>
  );
};
export default AppToastProvider;