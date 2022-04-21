import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import CustomText from '@SilalApp/common/components/CustomText';
import {useTranslation} from 'react-i18next';
import fonts from '@SilalApp/common/assets/fonts';
import {CustomButton} from '@SilalApp/common/components/native';
import CustomModal from '@SilalApp/common/components/native/CustomModal';
import {Icon} from 'react-native-elements';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';

const Media = ({moveForward, goPrev}) => {
  const {t} = useTranslation();
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const option = {
    mediaType: 'image',
  };

  const openPicker = async () => {
    const response = await MultipleImagePicker.openPicker(option);

    setImage(response);
    console.log('--------ResponseImage', image);
  };
  const deletePhoto = index => {
    let temArray = [...image];
    temArray.splice(index, 1);
    console.log('---------TEmp', temArray);
    setImage(temArray);
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerfirst}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomText label={t('media')} textStyle={styles.mediaText} />
              <CustomText label={'0/9'} textStyle={styles.numberText} />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setModal(!modal)}>
              <CustomText label={t('Add_photo')} textStyle={styles.addPhoto} />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 20,
            }}>
            <View style={styles.mainPic}></View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View style={styles.innerPic}></View>
                <View style={styles.innerPic}></View>
                <View style={styles.innerPic}></View>
                <View style={styles.innerPic}></View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.innerPic}></View>
                <View style={styles.innerPic}></View>
                <View style={styles.innerPic}></View>
                <View style={styles.innerPic}></View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.buttonContainer}>
              <CustomButton
                text={t('back')}
                containerStyle={styles.backContainer}
                textStyle={styles.backText}
                onPress={goPrev}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CustomButton
                  text={t('Next_step')}
                  textStyle={styles.nextStep}
                  onPress={moveForward}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mainContainerSecond}>
          <View style={{margin: 20}}>
            <CustomText
              label={t('requirement_forPhoto')}
              textStyle={styles.mediaText}
            />
            <View style={styles.imageContainerMain}>
              <View>
                <Image
                  source={require('../../../Assets/image.png')}
                  style={styles.imageStyle}
                />
                <CustomText
                  label={t('upTo') + ' 5 MB'}
                  textStyle={styles.upToText}
                />
              </View>

              <View style={styles.textContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CustomText
                    label={t('Format') + ':'}
                    textStyle={styles.textStyleImage}
                  />
                  <CustomText
                    label={' JPEG, PNG, JPG'}
                    textStyle={styles.textStyleImage}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <CustomText
                    label={
                      t('Resolution') + ':' + ' 200 px dmet minim mollit non'
                    }
                    textStyle={styles.textStyleImage1}
                  />
                </View>
                <CustomText
                  label={t('Size') + ':' + ' does not exceed 5 MB'}
                  textStyle={styles.textStyleImage1}
                />
                <View style={{width: '80%'}}>
                  <CustomText
                    label={
                      t('Background') +
                      ':' +
                      ' amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
                    }
                    textStyle={styles.textStyleImage1}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <CustomText
                    label={
                      t('SomethingElse') +
                      ':' +
                      ' met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
                    }
                    textStyle={styles.textStyleImage1}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <CustomModal
        isModalVisible={modal}
        setModalVisible={setModal}
        modalWrapperStyle={{
          marginHorizontal: 0,
          marginVertical: 0,
          marginLeft: '30%',
          justifyContent: 'flex-start',
        }}>
        <View style={styles.barcodeModalHeader}>
          <CustomText
            label={t('add_photo_to_item')}
            textStyle={styles.borderCodeHeaderText}
          />
          <TouchableOpacity activeOpacity={0.6} onPress={() => setModal(false)}>
            <Icon name="cross" type="entypo" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 10,
          }}>
          <View style={styles.mainPic1}>
            <ImageBackground
              source={{uri: image?.[0]?.path}}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
               
              >
              {image?.[0]?.path ? (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => deletePhoto(0)}
                  style={styles.removeIcon}>
                  <View style={{alignSelf: 'flex-end', margin: 5}}>
                    <Icon
                      name="circle-with-cross"
                      type="entypo"
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                </TouchableOpacity>
              ) : (
                <View />
              )}
            </ImageBackground>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <View style={styles.innerPic1}>
                <ImageBackground
                  source={{uri: image?.[1]?.path}}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain">
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => deletePhoto(1)}>
                    <CustomText label="Remove" />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
              <View style={styles.innerPic1}></View>
              <View style={styles.innerPic1}></View>
              <View style={styles.innerPic1}></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={styles.innerPic1}></View>
              <View style={styles.innerPic1}></View>
              <View style={styles.innerPic1}></View>
              <View style={styles.innerPic1}></View>
            </View>
          </View>
        </View>
        <View style={styles.innerContainerModal}>
          <Image
            source={require('../../../Assets/Vector.png')}
            style={styles.imagePlaceholder}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText
              label={t('drag_drop')}
              textStyle={styles.dragDropText}
            />
            <TouchableOpacity activeOpacity={0.6} onPress={openPicker}>
              <CustomText label={t('uplad')} textStyle={styles.dragDropText1} />
            </TouchableOpacity>
            <CustomText label={t('files')} textStyle={styles.dragDropText} />
          </View>

          <CustomText
            label={t('Supported_Formats') + 'PNG, JPG, JPEG'}
            textStyle={styles.supportFor}
          />
        </View>
        <View style={{alignSelf: 'flex-end', marginTop: 10, marginRight: 10}}>
          <CustomButton text={t('Save')} />
        </View>
      </CustomModal>
    </>
  );
};

export default Media;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  innerContainerModal: {
    width: '97%',
    alignSelf: 'center',
    backgroundColor: colors.ImageBack,
    marginTop: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
    borderStyle: 'dashed',
  },
  imageStyle: {
    width: '40@s',
    height: '60@s',
    resizeMode: 'contain',
  },
  imageContainerMain: {
    flexDirection: 'row',
    marginTop: '5@s',
  },
  removeIcon: {
    width: '100%',
    height: '100%',
    borderWidth: '1.5@s',
    borderColor: colors.primary,
    borderRadius: '4@s',
    overflow: 'hidden',
  },
  supportFor: {
    fontSize: '10@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textColor,
    marginBottom: '10@s',
    marginTop: '4@s',
  },
  imagePlaceholder: {
    width: '50@s',
    height: '50@s',
    resizeMode: 'contain',
    margin: '10@s',
  },
  dragDropText: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.black,
  },
  dragDropText1: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.primary,
    marginLeft: '3@s',
    marginRight: '2@s',
  },
  textStyleImage: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrime,
    marginBottom: '6@s',
  },
  textStyleImage1: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrime,
    marginBottom: '6@s',
  },
  upToText: {
    fontSize: '11@ms',
    fontFamily: fonts.LatoSemiBold,
    color: colors.primary,
  },
  textContainer: {
    marginHorizontal: '10@s',
    marginTop: '5@s',
  },
  borderCodeHeaderText: {
    fontSize: '17@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
  },
  mediaText: {
    fontSize: '13@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10@s',
    marginVertical: '10@s',
  },
  backContainer: {
    borderRadius: '4@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
    backgroundColor: 'transparent',
  },
  backText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  mainPic: {
    width: '120@s',
    height: '120@s',
    backgroundColor: colors.ImageBack,
    borderRadius: '4@s',
    overflow: 'hidden',
    marginRight: '5@s',
  },
  mainPic1: {
    width: '130@s',
    height: '130@s',
    backgroundColor: colors.ImageBack,
    borderRadius: '4@s',
    overflow: 'hidden',
    marginRight: '5@s',
  },
  barcodeModalHeader: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10@s',
  },
  innerPic: {
    width: '55@s',
    height: '55@s',
    backgroundColor: colors.ImageBack,
    borderRadius: '4@s',
    overflow: 'hidden',
    marginRight: '5@s',
  },
  innerPic1: {
    width: '60@s',
    height: '60@s',
    backgroundColor: colors.ImageBack,
    borderRadius: '4@s',
    overflow: 'hidden',
    marginRight: '6@s',
  },
  divider: {
    width: '100%',
    height: '1@s',
    backgroundColor: colors.underLine,
  },
  numberText: {
    fontSize: '13@ms',
    fontFamily: fonts.PoppinsMedium,
    color: colors.textColor,
    marginLeft: '5@s',
  },
  addPhoto: {
    fontSize: '13@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  mainContainerfirst: {
    width: '65%',
    backgroundColor: colors.textWhite,
    marginLeft: '5@s',
    borderRadius: '4@s',
    overflow: 'hidden',
  },
  mainContainerSecond: {
    width: '31%',
    backgroundColor: colors.textWhite,
    marginRight: '5@s',
    borderRadius: '4@s',
    overflow: 'hidden',
  },
});
