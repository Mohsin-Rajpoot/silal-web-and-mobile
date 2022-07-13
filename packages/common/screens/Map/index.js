import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomMap from "../../components/native/CustomMap";
import { SafeAreaView } from "react-native-safe-area-context";

const Map = () => {
  const [marker, setMarker] = useState(null);
  const [region, setRegion] = useState(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomMap
        setMarker={setMarker}
        marker={marker}
        setRegion={setRegion}
        region={region}
      />
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({});
