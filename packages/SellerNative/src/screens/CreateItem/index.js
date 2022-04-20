import {View, Text, SafeAreaView} from 'react-native';
import React, {useState, useRef} from 'react';
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
const CreateItem = () => {
  const {t} = useTranslation();
  const ref = useRef(null);
  const [page, setPage] = useState(0);
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
    const nextStep = Math.min(4, page + 1);

    if (nextStep === 3) {
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
      <View style={styles.headerContainer}>
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
      <View style={styles.tabPagerContainer}>
        <Header
          label="item_information"
          pageNumber={1}
          active={page}
          page={0}
        />
        <Header label="specification" pageNumber={2} active={page} page={1} />
        <Header label="media" pageNumber={3} active={page} page={2} />
        <Header label="Shipping" pageNumber={4} active={page} page={3} />
        <Header label="Preview" pageNumber={5} active={page} page={4} />
      </View>
      <PagerView
        style={{flex: 1}}
        initialPage={0}
        scrollEnabled={false}
        ref={ref}>
        <View key="1">
          <ItemInformation onPress={moveForward} />
        </View>
        <View key="2">
          <Specification moveForward={moveForward} goPrev={goprev} />
        </View>
        <View key="3">
          <Media moveForward={moveForward} goPrev={goprev} />
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
