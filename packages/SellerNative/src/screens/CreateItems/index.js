import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import CustomText from '@SilalApp/common/components/CustomText';
import {CustomButton} from '@SilalApp/common/components/native';
import {Icon} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import Header from './Molecules/Header';
import styles from './style';
import PagerView from 'react-native-pager-view';
import ItemInformation from './CreateITemPages/ItemInformation';
import Specification from './CreateITemPages/Specification';
import Media from './CreateITemPages/Media';
import Shipping from './CreateITemPages/Shipping';
import Preview from './CreateITemPages/Preview';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
import Entypo from 'react-native-vector-icons/Entypo';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@SilalApp/common/assets/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import fonts from '@SilalApp/common/assets/fonts';
var windowWidth = Dimensions.get('window').width;
const CreateItem = ({navigation}) => {
  const {t} = useTranslation();
  const ref = useRef(null);
  const [page, setPage] = useState(0);

  const Sheet_Header = useRef();

  const goprev = () => {
    if (page > 0) {
      const newStep = Math.max(0, page - 1);
      ref.current?.setPageWithoutAnimation(newStep);
      setPage(newStep);
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'AuthStack'}],
        });
      }, 400);
    }
  };
  const moveForward = () => {
    const nextStep = Math.min(5, page + 1);

    if (nextStep === 5) {
      goToGettingStarted();
    } else {
      ref.current?.setPageWithoutAnimation(nextStep);
      setPage(nextStep);
    }
  };
  const goToGettingStarted = () => {
    navigation.navigate('TabStack');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* RB Sheet Header Start */}

      <RBSheet
        ref={Sheet_Header}
        animationType="slide"
        closeOnPressMask={true}
        closeOnDragDown={false}
        dragFromTopOnly
        height={windowWidth * 0.6}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: colors.textWhite,
          },
        }}>
        <View style={styles.RbSheetHeader}>
          <TouchableOpacity style={[styles.HeaderRbsheet, {}]}>
            <Octicons name="pencil" style={styles.IconHeaderSheet} />
            <Text style={styles.headerSheetText}>Save as draft</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.HeaderRbsheet}>
            <Octicons name="stack" style={styles.IconHeaderSheet} />
            <Text style={styles.headerSheetText}>Save as template</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.HeaderRbsheet}>
            <Image
              source={require('../../Assets/li_trash-2.png')}
              style={{width: 20, height: 20, marginHorizontal: 10}}
            />
            <Text style={styles.headerSheetText}>Save as template</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      </RBSheet>

      {/* RB Sheet Header End */}
      <View style={styles.headerContainer}>
        {IsTablet ? (
          <View style={{flexDirection: 'row'}}>
            <View style={styles.createnewItemContainer}>
              <Icon name="arrowleft" type="antdesign" size={40} />
              <CustomText
                label={t('create_new_item')}
                textStyle={styles.createItemText}
              />
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                text={t('Save_as_template')}
                containerStyle={styles.dullContainerStyle}
                textStyle={styles.buttonTextDull}
              />
              <CustomButton
                text={t('Save_as_draft')}
                containerStyle={styles.dullContainerStyle}
                textStyle={styles.buttonTextDull}
              />
              <CustomButton
                text={t('Request_to_publish')}
                containerStyle={styles.buttonContainerStyle}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        ) : (
          <View style={styles.createnewItemContainerMobile}>
            <TouchableOpacity
              onPress={() => goToGettingStarted()}
              style={{flexDirection: 'row'}}>
              <Icon name="arrowleft" type="antdesign" size={20} />
              <CustomText
                label={t('create_new_item')}
                textStyle={styles.createItemText}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Sheet_Header.current.open()}>
              <Entypo
                name="dots-three-vertical"
                style={{color: colors.divider, fontSize: 20}}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {IsTablet ? (
        <View style={styles.tabPagerContainer}>
          <Header
            label="item_information"
            pageNumber={1}
            active={page}
            page={0}
          />
          <Header label="media" pageNumber={2} active={page} page={1} />
          <Header label="specification" pageNumber={3} active={page} page={2} />
          <Header label="Shipping" pageNumber={4} active={page} page={3} />
          <Header label="Preview" pageNumber={5} active={page} page={4} />
        </View>
      ) : null}
      <PagerView
        style={{flex: 1}}
        initialPage={0}
        scrollEnabled={false}
        ref={ref}>
        <View key="1">
          <ItemInformation onPress={moveForward} />
        </View>
        <View key="2">
          <Media moveForward={moveForward} goPrev={goprev} />
        </View>
        <View key="3">
          <Specification moveForward={moveForward} goPrev={goprev} />
        </View>
        <View key="4">
          <Shipping moveForward={moveForward} goPrev={goprev} />
        </View>
        <View key="5">
          <Preview moveForward={moveForward} goPrev={goprev} />
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

export default CreateItem;
