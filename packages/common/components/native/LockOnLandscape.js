import React, { useState, useEffect } from "react";
import {
  OrientationLocker,
  LANDSCAPE,
  PORTRAIT,
} from "react-native-orientation-locker";
import { Dimensions } from "react-native";
import IsTablet from "./IsTablet";
const LockOnLandscape = ({ width, setWidth }) => {
  const [orientation, setOrientation] = useState("LANDSCAPE");
  const determineAndSetOrientation = () => {
    if (Dimensions == PORTRAIT) {
      setOrientation(!IsTablet ? PORTRAIT : LANDSCAPE);
      console.log(orientation, "orientation  ");
    } else {
      setOrientation(!IsTablet ? "PORTRAIT" : "LANDSCAPE");
      console.log(orientation, "LANDSCAPE  ");
    }
  };

  useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener("change", determineAndSetOrientation);
    setWidth(Dimensions.get("screen").width);
    return () => {
      Dimensions.addEventListener("change", determineAndSetOrientation);
      setWidth(Dimensions.get("screen").width);
    };
  }, []);

  return (
    <OrientationLocker
      // onPress={onPress}
      orientation={orientation}
      onChange={(orientation) => console.log("onChange", orientation)}
      // onDeviceChange={orientation => {console.log('onDeviceChange////////////', orientation)}}
    />
  );
};

export default LockOnLandscape;
