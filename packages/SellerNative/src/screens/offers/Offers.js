import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../Profile/moleclues/Header';
import React, {useState} from 'react';
import Tabs from '../Profile/moleclues/Tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './style';
import TextInput from '@SilalApp/common/components/native/TextInput';
import {CustomButton} from '@SilalApp/common/components/native';
import OfferComponent from '../../components/OfferComponent';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {
  widthPercentageToDP as width,
  heightPercentageToDP as height,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import CustomText from '@SilalApp/common/components/CustomText';
import colors from '@SilalApp/common/assets/colors';

const Offers = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [createPostModal, setCreatePostModal] = useState(false);
  const openCreateOfferModal = () => {
    setCreatePostModal(true);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header label="Offers" onPress={() => navigation.openDrawer()} />
      <Tabs
        containerStyle={{marginTop: 10, marginBottom: 20}}
        offers={true}
        firstText="Current"
        secondText="Past"
      />
      <ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputContainerMian}>
            <TextInput search={true} inputStyle={styles.inputStyling} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              text={'Create new offer'}
              containerStyle={styles.buttonStyle}
              textStyle={styles.buttonText}
              onPress={openCreateOfferModal}
            />
          </View>
        </View>
        <View style={styles.offerContainer}>
          <OfferComponent isModal={modalVisible} setModal={setModalVisible} />

          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
          <OfferComponent />
        </View>
      </ScrollView>
      <CustomModal
        isModalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalWrapperStyle={{
          marginHorizontal: width(0),
          marginVertical: height(0),
          marginLeft: width(100),
          justifyContent: 'flex-start',
          borderRadius: 0,
        }}>
        <ScrollView style={styles.modalMainContainer}>
          <View style={styles.modalMainContainer}>
            <Icon
              name="close"
              type="antdesign"
              size={26}
              style={styles.crossIcon}
            />
            <View style={{marginVertical: 10}}>
              <CustomButton
                text={'Save changes'}
                textStyle={styles.modalbutton}
              />
            </View>

            <Image
              source={require('../../Assets/image8.png')}
              style={styles.image}
            />
            <CustomText label="Offer profile" textStyle={styles.offerText} />
            <CustomText label="Offer name" textStyle={styles.offerName} />
          </View>
        </ScrollView>
      </CustomModal>
      <CustomModal
        isModalVisible={createPostModal}
        setModalVisible={setCreatePostModal}
        modalWrapperStyle={{
          marginHorizontal: width(0),
          marginVertical: height(0),
          marginLeft: width(20),
          justifyContent: 'flex-start',
          borderRadius: 0,
        }}>
        <ScrollView style={styles.modalMainContainer}>
          <View>
            <View style={styles.createOffer}>
              <View style={{flexDirection:'row', flex:1}}>
                <Icon
                  name="arrow-back"
                  type="ionicons"
                  size={36}
                  color={colors.black}
              
                />
                <CustomText
                  label="Create offer"
                  textStyle={styles.creareOfferText}
                />
              </View>

              <Icon
                name="close"
                type="antdesign"
                size={30}
                style={styles.crossIcon1}
              />
            </View>
          </View>
        </ScrollView>
      </CustomModal>
    </SafeAreaView>
  );
};

export default Offers;
