import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushtTokensApi from "../api/expoPushToken";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushtTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting a push token");
    }
  };
};
