import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./style";
import screens from "../../assets/Data";
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen-hooks";

import AuthButton from "../../components/native/AuthButton";
const OnBoarding = ({navigation}) => {
  const [orientation, setOrientation] = React.useState("portrait");

  const ref = useRef();
  const [page, setPage] = useState(1);
  useEffect(() => {
    lor(setOrientation);

    return () => {
      rol();
    };
  }, []);

  console.log("-------Console", screens);
  const onAccept = () => {
    if (page + 1 != 3) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
    } else {
      //   navigation.navigate("Registration");
    }
  };
  const goToSignUp=()=>{
    navigation.navigate('Login',{params:{signUp:true}})
  }
  const goToLogin=()=>{
    navigation.navigate('Login',{params:{signUp:false}})
  }
  const goToMainStack=()=>{
    navigation.navigate('MainStack')
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {page == 3 ? <View/>:
      <TouchableOpacity activeOpacity={0.6} onPress={() => setPage(3)}>
        <Text style={styles.skipbutton}>Skip</Text>
      </TouchableOpacity>
}
      <AppIntroSlider
        showNextButton={false}
        showDoneButton={false}
        ref={ref}
        data={screens}
        keyExtractor={(item, index) => item.id + index.toString()}
        dotStyle={page==3 ? null:styles.dot}
        onSlideChange={(index) => setPage(index)}
        activeDotStyle={page ==3 ? null:styles.underScore}
        renderItem={({ item, index }) => (
          <View style={styles.screenContainer}>
            <Image
              source={item.image}
              resizeMode="center"
              style={styles.screenImage}
            />
            <View style={styles.onBoardingDetailconatiner}>
              <Text style={styles.heading}>{item?.heading}</Text>
              <Text style={styles.body}> {item?.body}</Text>
            </View>
            {page == 3 ? (
              <View style={{flex:0.6, justifyContent:'flex-end'}}> 
                <AuthButton name="Sign up"  onPress={goToSignUp}/>
                <AuthButton name="Login" changeColor={true} onPress={goToLogin} />
                <AuthButton name="MainStack" changeColor={true} onPress={goToMainStack} />
              </View>
            ) : (
              <View />
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;
