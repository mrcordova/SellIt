import { useState, useEffect } from "react";

import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const getLocation = async () => {
    try {
      const { granted, status } =
        await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("erroor", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
export default useLocation;
