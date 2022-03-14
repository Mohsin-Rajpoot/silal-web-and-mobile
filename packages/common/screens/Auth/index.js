import { View, Text, Image } from "react-native";
import React, { useRef, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./style";
import screens from "../../assets/Data";
const index = () => {
  const ref = useRef();
  const [page, setPage] = useState(1);
console.log('-------Console', screens)
  const onAccept = () => {
    if (page + 1 != 3) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
    } else {
      //   navigation.navigate("Registration");
    }
  };
  return (
    <AppIntroSlider
      showNextButton={false}
      showDoneButton={false}
      ref={ref}
      data={screens}
      keyExtractor={(item, index) => item.id + index.toString()}
      dotStyle={styles.dot}
      onSlideChange={(index) => setPage(index)}
      activeDotStyle={styles.underScore}
      renderItem={({ item, index }) => (
        <View style={styles.screenContainer}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.screenImage}
          />
          <Text style={styles.heading}>{item?.heading}</Text>
          <Text style={styles.body}> {item?.body}</Text>
        </View>
      )}
    />
  );
};

export default index;
