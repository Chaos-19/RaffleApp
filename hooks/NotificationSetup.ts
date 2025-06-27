import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useNotificationSetup = () => {
  useEffect(() => {
    const setupNotifications = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission for notifications not granted');
        return;
      }
    };

    setupNotifications();

    const subscription = Notifications.addNotificationReceivedListener((notification: Notifications.Notification) => {
      console.log('Notification received:', notification);
    });

    return () => subscription.remove();
  }, []);
};
