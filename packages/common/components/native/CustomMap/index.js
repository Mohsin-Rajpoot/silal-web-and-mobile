import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Alert } from "react-native";

import RequestPermission from "@SilalApp/common/util/RequestPermission";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA + ASPECT_RATIO;

const CustomMap = ({ setMarker, marker, setRegion, region }) => {
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const permission = await RequestPermission((location) => {
      setRegion({
        latitude: location?.coords?.latitude || 36.2443422,
        longitude: location.coords?.longitude || -113.7354532,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
      setMarker({
        latitude: location?.coords?.latitude || 36.2443422,
        longitude: location.coords?.longitude || -113.7354532,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    });
    if (!permission) {
      setRegion({
        latitude: 36.2443422,
        longitude: -113.7354532,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  };
  return (
    <View style={styles.container}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        region={region}
        onRegionChange={setRegion}
      >
        <Marker
          draggable
          coordinate={marker}
          onDragEnd={(e) => setMarker({ x: e.nativeEvent.coordinate })}
        />
      </MapView>
      {console.log("------Logs", region)}
    </View>
  );
};
export default CustomMap;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
