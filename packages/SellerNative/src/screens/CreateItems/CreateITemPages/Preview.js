import {
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '@SilalApp/common/assets/colors';
import fonts from '@SilalApp/common/assets/fonts';
import CustomText from '@SilalApp/common/components/CustomText';
import {useTranslation} from 'react-i18next';
import {CustomButton} from '@SilalApp/common/components/native';
import PreviewComponent from '../../../components/Preview';
import IsTablet from '@SilalApp/common/components/native/IsTablet';
// import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, {Path} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDown from '@SilalApp/common/components/native/DropDown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Preview = ({moveForward, goPrev}) => {
  const {t} = useTranslation();
  const [imgactive, setimageactive] = useState(0);
  const [SubCategory, setSubCategory] = useState('');
  const [Color, setColor] = useState('');
  const [Openmodal, setOpenmodal] = useState(false);
  const [checked, setchecked] = useState(false);
  const navigation = useNavigation();

  const buttonn = [
    {
      id: 1,
      text: '64 GB',
    },

    {
      id: 2,
      Text: '128 GB',
    },
    {
      id: 3,
      Text: '512 GB',
    },
  ];
  const images = [
    {
      id: 1,
      image: require('../../../Assets/iphoneRed.png'),
    },

    {
      id: 2,
      image: require('../../../Assets/download.png'),
    },
    {
      id: 3,
      image: require('../../../Assets/iphoneSilver.png'),
    },
    {
      id: 4,
      image: require('../../../Assets/iphoneRed.png'),
    },

    {
      id: 5,
      image: require('../../../Assets/download.png'),
    },
    {
      id: 6,
      image: require('../../../Assets/iphoneSilver.png'),
    },
  ];
  onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgactive) {
        setimageactive(slide);
      }
    }
  };

  return (
    <SafeAreaView
      style={IsTablet ? {height: '100%'} : {marginHorizontal: '5%', flex: 1}}>
      {IsTablet ? (
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <ScrollView
            style={styles.mainContainer}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{flex: 1}}>
              <View style={styles.headerTitleContainer}>
                <CustomText
                  label={t('Preview')}
                  textStyle={styles.headerTitle}
                />
              </View>
              <View style={styles.divider} />
              <PreviewComponent />
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <CustomButton
              text={t('back')}
              containerStyle={styles.backContainer}
              textStyle={styles.backText}
              onPress={goPrev}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomButton
                text={t('Publish')}
                textStyle={styles.nextStep}
                containerStyle={styles.backContainer1}
                onPress={moveForward}
              />
            </View>
          </View>
        </View>
      ) : (
        <ScrollView style={{flex: 1}}>
          <View style={styles.containerMobile}>
            <View style={styles.HeaderMainViewMobile}>
              <View style={styles.greenCircleMobile}>
                <Text style={styles.greenCircleTextMobile}>5</Text>
              </View>
              <CustomText
                label={t('Preview')}
                textStyle={styles.SecondaryHeadingTitle}
              />
            </View>
          </View>

          <View style={styles.swiperContainer}>
            <View style={styles.Swiperheading}>
              <View>
                <Ionicons name="chevron-back" style={styles.IconsCommonStyle} />
              </View>
              <View
                paginationStyle={{colors: colors.primary}}
                style={styles.EndSliderIconsHeadind}>
                <Ionicons
                  name="share-social-outline"
                  style={styles.IconsCommonStyle}
                />
                <Ionicons
                  name="ios-cart-outline"
                  style={styles.IconsCommonStyle}
                />
              </View>
            </View>

            <View style={styles.wrap}>
              <ScrollView
                onScroll={({nativeEvent}) => onChange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}>
                {images.map((e, index) => {
                  return (
                    <View key={index}>
                      <Image
                        resizeMode="contain"
                        style={styles.wrap1}
                        source={e.image}
                      />
                    </View>
                  );
                })}
              </ScrollView>
              <View style={styles.OffPercentage}>
                <CustomText
                  label={t('15%')}
                  textStyle={styles.OffPercentageText}
                />
              </View>
              <View style={styles.wrapDots}>
                {images.map((e, index) => (
                  <Text
                    key={index}
                    style={imgactive == index ? styles.dotactive : styles.dot}>
                    ●
                  </Text>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.SencondHeadingTitle}>
            <View style={{width: '50%'}}>
              <CustomText
                label={t('SmartPhone_Apple_Iphone_12_64_GB_Red')}
                textStyle={styles.textDescription}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignContent: 'center',
              }}>
              <CustomText
                label={t('883_73')}
                textStyle={styles.textDescription1}
              />
              <CustomText label={t('990_50')} textStyle={styles.orignalPrice} />
            </View>
          </View>

          <View style={styles.whiteboxcotaier}>
            <View style={styles.WhiteBox}>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome
                  name="star"
                  style={{fontSize: 18, color: 'yellow'}}
                />
                <CustomText
                  label={t('4_8')}
                  textStyle={styles.starRaitingText}
                />
                <CustomText
                  label={t('150')}
                  textStyle={styles.starRaitingReview}
                />
              </View>
              <CustomText
                label={t('150_reviews')}
                textStyle={styles.starRaitingReviewDetailText}
              />
            </View>
            <View style={styles.WhiteBox}>
              <View style={{flexDirection: 'row'}}>
                <Svg
                  width="21"
                  height="21"
                  viewBox="0 0 491 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M245.002 61.25C254.666 61.25 262.502 69.0859 262.502 78.75V110.652L295.252 123.75C304.224 127.34 308.592 137.527 305.002 146.5C301.412 155.473 291.225 159.84 282.252 156.25L238.502 138.75C231.861 136.09 227.502 129.656 227.502 122.5V78.75C227.502 69.0859 235.338 61.25 245.002 61.25Z"
                    fill="#05AE4B"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M122.502 122.5C122.502 54.844 177.346 0 245.002 0C312.658 0 367.502 54.844 367.502 122.5C367.502 190.156 312.658 245 245.002 245C177.346 245 122.502 190.156 122.502 122.5ZM245.002 35C196.678 35 157.502 74.176 157.502 122.5C157.502 170.824 196.678 210 245.002 210C293.326 210 332.502 170.824 332.502 122.5C332.502 74.176 293.326 35 245.002 35Z"
                    fill="#05AE4B"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M52.5017 70H115.178C110.709 81.039 107.611 92.773 106.084 105H52.5019C42.8378 105 35.0019 112.836 35.0019 122.5V350H55.4899C62.6969 329.609 82.1419 315 105.002 315C127.862 315 147.307 329.609 154.514 350H280.004V258.09C292.422 254.895 304.172 250.035 315.004 243.77V350H335.492C342.699 329.609 362.144 315 385.004 315C407.864 315 427.309 329.609 434.516 350H455.004V285.516L402.141 210H354.297C362.738 199.473 369.688 187.699 374.828 175H411.254C416.965 175 422.316 177.785 425.59 182.465L486.84 269.965C488.899 272.906 490.004 276.41 490.004 280V367.5C490.004 377.164 482.168 385 472.504 385H434.516C427.309 405.391 407.864 420 385.004 420C362.144 420 342.699 405.391 335.492 385H154.512C147.305 405.391 127.86 420 105 420C82.14 420 62.695 405.391 55.488 385H17.5C7.8359 385 0 377.164 0 367.5V122.5C0 93.5038 23.504 69.9998 52.5 69.9998L52.5017 70ZM87.5017 367.5C87.5017 357.836 95.3376 350 105.002 350C114.666 350 122.502 357.836 122.502 367.5C122.502 377.164 114.666 385 105.002 385C95.3376 385 87.5017 377.164 87.5017 367.5ZM367.502 367.5C367.502 357.836 375.338 350 385.002 350C394.666 350 402.502 357.836 402.502 367.5C402.502 377.164 394.666 385 385.002 385C375.338 385 367.502 377.164 367.502 367.5Z"
                    fill="#05AE4B"
                  />
                </Svg>
                <CustomText
                  label={t('Delivery_Time')}
                  textStyle={styles.starRaitingText1}
                />
              </View>
              <CustomText
                label={t('30_40_Minutes')}
                textStyle={styles.starRaitingReview1}
              />
            </View>
            <View style={styles.WhiteBox}>
              <View style={{flexDirection: 'row'}}>
                <Svg
                  width="18"
                  height="18"
                  viewBox="0 0 546 529"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M152.6 184.25C155.421 184.25 158.274 183.304 160.636 181.343C166.083 176.836 166.904 168.718 162.46 163.187C136.905 131.417 140.444 81.2263 170.35 51.2973C202.642 19.0003 251.508 17.4063 286.537 47.5278C301.403 60.3128 311.333 78.4688 314.486 98.6528C315.58 105.688 322.102 110.493 329.052 109.38C335.994 108.27 340.735 101.653 339.636 94.6178C335.528 68.3408 322.522 44.6378 303.012 27.8558C257.683 -11.1242 194.363 -8.98018 152.466 32.9417C113.474 71.9497 109.108 137.692 142.726 179.492C145.239 182.625 148.901 184.242 152.605 184.242L152.6 184.25Z"
                    fill="#05AE4B"
                  />
                  <Path
                    d="M384.778 528.62C387.291 528.62 389.742 528.452 392.02 528.303C394.256 528.155 396.364 528.049 398.114 528.049C404.019 528.162 409.901 528.135 415.883 528.112L419.734 528.096C428.075 528.061 435.259 521.737 436.45 513.377C437.09 508.924 437.745 504.514 438.393 500.139C440.154 488.299 441.819 477.022 443.099 465.549C444.117 464.901 445.196 464.229 446.086 463.678C449.875 461.307 454.177 458.631 457.276 456.24C465.806 449.686 474.034 442.162 481.717 433.877C490.844 424.061 500.014 419.439 510.286 419.701C519.093 419.623 526.189 417.182 531.153 411.877L532.838 410.08L538.319 395.58L538.45 394.627C539.857 383.166 541.229 371.834 542.593 360.494L545.727 334.717C547.6 319.283 539.753 308.772 524.728 306.596C514.61 305.135 507.823 302.272 502.719 297.288C502.762 297.288 502.33 296.596 502.183 296.264C496.787 284.135 489.776 272.655 481.274 262.034C482.31 260.878 483.336 259.733 484.373 258.577C487.067 255.566 489.769 252.558 492.444 249.511C493.014 248.862 493.585 248.191 494.144 247.507C498.676 241.952 500.118 234.241 497.909 227.366C495.786 220.741 490.621 215.78 484.079 214.073C482.749 213.721 481.37 213.522 479.986 213.479C461.889 213.077 442.714 212.796 423.503 214.038C415.671 214.553 412.148 214.249 408.144 211.581C381.706 193.976 349.927 183.448 311.005 179.397C251.994 173.264 195.528 181.69 143.182 204.432C117.141 215.744 96.593 229.272 80.3277 245.784C80.0271 246.081 79.6647 246.467 79.2985 246.85C72.1755 254.444 68.4287 263.08 65.4152 271.069C65.0336 268.241 64.7522 265.284 64.6905 262.335L64.6636 259.929C64.6212 252.21 64.5595 239.296 51.8439 231.429C45.0216 227.21 37.1821 225.917 29.7431 227.807C22.0574 229.761 15.4474 234.921 11.1304 242.358C-3.97153 268.354 -0.0778992 297.44 6.37405 324.983C9.59632 338.756 15.2508 352.78 24.1431 369.128C27.535 375.367 35.2705 377.632 41.4455 374.195C47.601 370.746 49.8366 362.906 46.4447 356.66C38.6895 342.414 33.8293 330.453 31.1543 319.019C26.0703 297.292 22.0193 274.492 33.0815 255.449C33.9102 254.023 34.9277 253.093 35.9375 252.839C36.7238 252.629 37.6142 252.847 38.5894 253.453C39.1868 254.406 39.2099 257.82 39.2099 260.066C39.2177 261.004 39.2177 261.949 39.2446 262.882C39.3988 270.136 40.4973 277.116 41.4378 282.386C43.631 294.644 44.7527 306.972 44.9608 321.175L44.9454 321.621C44.8413 324.492 44.5638 332.121 51.1086 336.918C55.1596 339.875 60.3978 340.461 65.5198 338.547C80.0859 333.07 81.2069 316.242 81.9509 305.106C82.159 302.07 82.4597 297.485 82.9684 296.086C84.9188 291.895 86.4567 287.703 87.9483 283.652C90.7466 276.074 93.1441 269.531 97.7309 264.648L98.2744 264.078C112.27 249.867 130.22 238.133 153.212 228.133C201.535 207.133 253.75 199.371 308.405 205.051C343.165 208.672 371.224 217.86 394.166 233.137C405.078 240.391 415.45 240.391 425.129 239.777C439.262 238.859 453.605 238.824 467.477 239.035C466.822 239.77 466.174 240.488 465.519 241.215C461.892 245.258 458.265 249.309 454.719 253.414L447.122 262.207L455.005 270.738C465.262 281.843 473.101 293.656 478.971 306.867C480.085 309.371 482.34 313.219 485.057 315.871C496.686 327.219 510.639 330.555 520.387 332.023L517.315 357.355C516.005 368.207 514.698 379.054 513.368 389.898L511.807 393.871C511.48 393.886 511.083 393.922 510.624 393.898C493.148 393.687 477.16 401.152 463.172 416.195C456.446 423.449 449.281 430.004 441.88 435.691C439.764 437.32 436.037 439.644 432.738 441.703C423.622 447.39 419.043 450.25 418.353 457.383C417.093 470.149 415.2 482.856 413.208 496.305C412.915 498.301 412.61 500.305 412.317 502.317C407.715 502.332 403.148 502.324 398.6 502.254C395.767 502.176 393.022 502.375 390.355 502.559C388.031 502.715 384.373 502.969 382.515 502.727C381.686 501.047 380.704 497.52 380.079 495.289C379.32 492.586 378.541 489.785 377.481 487.004C374.725 479.75 372.023 472.461 369.271 465.059L366.697 458.137C365.136 453.93 361.886 450.496 357.797 448.739C353.703 446.973 349.009 446.973 344.923 448.739C290.976 472.196 235.751 475.512 176.063 458.915C167.318 456.465 158.199 461.68 155.732 470.536L153.658 477.911C151.299 486.239 149.075 494.141 147.078 502.27C137.469 501.438 125.235 500.766 112.654 502.035C107.933 482.066 101.404 461.41 92.7539 438.992C90.1906 432.359 82.7977 429.078 76.2527 431.676C69.7079 434.274 66.4702 441.754 69.0334 448.399C77.7097 470.879 84.1156 491.415 88.6062 511.172C91.4971 523.852 99.9842 529.461 113.853 527.875C125.389 526.547 137.233 527.305 146.257 528.121C155.589 528.953 167.506 526.434 171.496 509.703C173.361 501.949 175.535 494.223 177.832 486.07C236.89 500.875 292.116 497.621 346.169 476.129C348.69 482.918 351.184 489.613 353.724 496.289C354.363 497.968 354.957 500.093 355.589 502.343C357.617 509.578 360.137 518.581 367.669 523.991C372.93 527.761 379.036 528.62 384.787 528.62L384.778 528.62Z"
                    fill="#05AE4B"
                  />
                  <Path
                    d="M314.848 132.62C314.848 139.452 320.314 144.991 327.055 144.991C333.8 144.991 339.266 139.451 339.266 132.62C339.266 125.788 333.8 120.249 327.055 120.249C320.314 120.249 314.848 125.788 314.848 132.62Z"
                    fill="#05AE4B"
                  />
                  <Path
                    d="M47.8977 406.46C47.8977 414.182 54.0763 420.444 61.6962 420.444C69.3164 420.444 75.4907 414.182 75.4907 406.46C75.4907 398.737 69.3159 392.48 61.6962 392.48C54.0759 392.48 47.8977 398.737 47.8977 406.46Z"
                    fill="#05AE4B"
                  />
                </Svg>
                <CustomText
                  label={t('Delivery_Cost')}
                  textStyle={styles.starRaitingText1}
                />
              </View>
              <CustomText
                label={t('3_6')}
                textStyle={styles.starRaitingReviewDetailText01}
              />
            </View>
          </View>
          <View>
            <View style={{ zIndex: 1,}}>
              <DropDown
                DropDownCustomStyle={styles.dropSSd1}
                placeholder="Specification"
              />
            </View>
            <Text style={styles.ColorHeading}>
              Color :<Text style={styles.colorheading2}> red</Text>
            </Text>

            <FlatList
              data={images}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => setSubCategory(item.id)}
                  style={[styles.FlatContainer]}>
                  <Image
                    source={item.image}
                    style={[
                      styles.SecondFlatlistImage,
                      {
                        borderColor:
                          SubCategory == item.id
                            ? colors.primary
                            : colors.white,
                        borderWidth: 1,
                        borderRadius: 5,
                        height: 70,
                        width: 50,
                      },
                    ]}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <View>
            <Text style={styles.ColorHeading}>
              Size :<Text style={styles.colorheading2}> 128 GB</Text>
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => setColor('1')}
              style={[
                styles.ButtonSize,
                {
                  backgroundColor:
                    Color == '1' ? colors.primary : colors.light_grey,
                },
              ]}>
              <CustomText
                label={t('64_GB')}
                textStyle={styles.productsattribut}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setColor('2')}
              style={[
                styles.ButtonSize,
                {
                  backgroundColor:
                    Color == '2' ? colors.primary : colors.light_grey,
                },
              ]}>
              <CustomText
                label={t('128_GB')}
                textStyle={styles.productsattribut}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setColor('3')}
              style={[
                styles.ButtonSize,
                {
                  backgroundColor:
                    Color == '3' ? colors.primary : colors.light_grey,
                },
              ]}>
              <CustomText
                label={t('512_GB')}
                textStyle={{
                  color: colors.textWhite,
                  fontFamily: fonts.PoppinsSemiBold,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.ColorMobileView}>
            <DropDown
              DropDownCustomStyle={styles.dropSSd}
              placeholder="Description"
            />
          </View>

          <View style={styles.divider} />

          <View style={{flexDirection: 'row',}}>
            <TouchableOpacity
              onPress={goPrev}
              style={styles.BackbottomButtonContainerMobile}>
              <Ionicons
                name="arrow-back"
                style={styles.BackbottomButtonIconMobile}
              />
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={moveForward}
              style={styles.ForwordbottomButtonContainerMobile}>
              <CustomButton
                text={t('Publish')}
                textStyle={styles.nextStepMobile}
                onPress={() => setOpenmodal(true)}
              />
            </TouchableOpacity>
          </View>
          {/* Delete Modal Start */}
          <View style={styles.modelContainerStyle}>
            <Modal
              visible={Openmodal}
              animationType="slideInRight"
              transparent={true}>
              <View style={styles.ModalContainer}>
                <View style={styles.ModeView}>
                  <View style={styles.ModalTitle}>
                    <CustomText
                      label={t('Publish_item')}
                      textStyle={styles.ModalHeading}
                    />
                  </View>
                  <CustomText
                    label={t(
                      'The_product_will_appear_in_the_buyers_app_after_moderation',
                    )}
                    textStyle={styles.ModalParagraph}
                  />

                  <View style={styles.CheckBoxView}>
                    <CheckBox
                      checked={checked}
                      onPress={() => setchecked(!checked)}
                      checkedColor={colors.primary}
                      uncheckedColor={colors.gray}
                      style={{width: 40}}
                    />
                    <CustomText
                      label={t('Add_item_to_Seller_Brief')}
                      textStyle={styles.ModalParagraphSecond}
                    />
                  </View>

                  <View style={styles.ModalButtonContainer}>
                    <TouchableOpacity
                      onPress={() => setOpenmodal(false)}
                      style={[
                        {backgroundColor: colors.blurPrimary},
                        styles.Buttonss,
                      ]}>
                      <CustomText
                        label={t('Save_as_draft')}
                        textStyle={styles.DeleteModal}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Home')}
                      style={[
                        {backgroundColor: colors.primary},
                        styles.Buttonss,
                      ]}>
                      <CustomText
                        label={t('Submit_listing')}
                        textStyle={[
                          styles.DeleteModal,
                          {color: colors.textWhite},
                        ]}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          {/* Delete Modal end */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Preview;
const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.textWhite,
    marginLeft: '5@s',
    width: '60%',
    borderRadius: '4@s',
    marginBottom: '10@s',
  },
  headerTitleContainer: {
    margin: '10@s',
  },
  headerTitle: {
    fontSize: '13@ms',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  divider: {
    backgroundColor: colors.underLine,
    width: '100%',
    height: '1@s',
    marginVertical:'10@s'
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10@s',
    width: '30%',
  },
  nextStep: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
  },
  backContainer: {
    borderRadius: '3@s',
    borderColor: colors.primary,
    borderWidth: '0.5@s',
    backgroundColor: 'transparent',
  },
  backContainer1: {
    borderRadius: '4@s',
    borderColor: colors.primary,
    borderWidth: '1@s',
    backgroundColor: colors.primary,
    paddingHorizontal: '30@s',
  },
  backText: {
    fontSize: '12@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },

  containerMobile: {
    marginTop: '5@vs',
  },

  HeaderMainViewMobile: {
    backgroundColor: colors.textWhite,
    height: '40@vs',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  greenCircleMobile: {
    backgroundColor: colors.primary,
    width: 26,
    height: 26,
    marginHorizontal: '5@s',
    borderRadius: 13,
  },
  greenCircleTextMobile: {
    color: colors.textWhite,
    fontFamily: fonts.bold,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '15@s',
  },
  SecondaryHeadingTitle: {
    fontFamily: fonts.LatoRegular,
    color: colors.black,
    paddingHorizontal: '5@s',
  },
  EndSliderIconsHeadind: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '23%',
    color: colors.black,
  },
  Swiperheading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5@vs',
  },
  IconsCommonStyle: {
    fontSize: '20@s',
    color: colors.black,
  },

  wrap: {
    height: HEIGHT * 0.25,
  },
  wrap01: {
    height: HEIGHT * 0.1,
    width: WIDTH,
  },
  wrap1: {
    height: HEIGHT * 0.2,
    width: WIDTH * 1.2,
  },
  wrap01: {
    height: HEIGHT * 0.2,
    width: WIDTH * 0.3,
    // resizeMode:'contain'
  },
  wrapDots: {
    flexDirection: 'row',
    alignSelf: 'center',

    backgroundColor: colors.light_grey,

    borderRadius: 5,
  },
  dotactive: {
    margin: 3,
    fontSize: '10@s',
    color: colors.textWhite,
  },
  dot: {
    margin: 3,
    fontSize: '10@s',
    color: colors.white,
  },
  OffPercentage: {
    justifyContent: 'center',
    top: 20,
    marginHorizontal: '2%',
    backgroundColor: '#9c27ff',
    width: '20%',
    height: '13%',
    borderRadius: 5,
  },
  OffPercentageText: {
    color: colors.textWhite,
    fontFamily: fonts.bold,
    fontSize: '17@s',
    alignSelf: 'center',
  },
  description: {
    flexDirection: 'row',
    marginTop: '15@vs',
  },

  textDescription: {
    fontSize: '14@s',
    fontFamily: fonts.bold,
    paddingTop: '3%',
    color: colors.black,
    width: '70%',
    height: '60@s',
  },
  textDescription3: {
    fontSize: '14@s',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  textDescription1: {
    fontSize: '18@s',
    fontFamily: fonts.bold,
    color: colors.black,
  },
  orignalPrice: {
    textAlign: 'right',
    colors: colors.black,
    fontSize: 18,
    textDecorationLine: 'line-through',
    textDecorationColor: colors.red,
  },
  WhiteBox: {
    height: '60@s',
    width: '100@s',
    backgroundColor: colors.textWhite,
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'center',
    // alignItems:'center',
    paddingHorizontal: '4@s',
  },
  swiperContainer: {
    backgroundColor: colors.textWhite,
    paddingVertical: '2%',
    borderRadius: 10,
    elevation: 2,
    marginTop: '20@s',
    // top: '-10%',
  },
  whiteboxcotaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // top: '-10%',
    marginTop: '10@vs',
  },
  starRaitingText: {
    color: colors.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 15,
    paddingHorizontal: 5,
  },
  starRaitingText1: {
    color: colors.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: '10@s',
    paddingHorizontal: 5,
  },
  starRaitingReview: {color: colors.grayColor, fontFamily: fonts.LatoSemiBold},
  starRaitingReview1: {
    color: colors.grayColor,
    fontFamily: fonts.LatoSemiBold,
    paddingTop: '3@s',
  },

  starRaitingReviewDetailText: {
    color: colors.primary,
    fontSize: 15,
    fontFamily: fonts.LatoBold,
    paddingTop: '3@s',
    paddingHorizontal: '2@s',
  },
  starRaitingReviewDetailText01: {
    color: colors.primary,
    fontSize: 15,
    fontFamily: fonts.LatoBold,
    paddingTop: '3@s',
    paddingHorizontal: '5@s',
    // backgroundColor:'red'
  },
  FlatContainer: {
    // width:'100%',
  },
  SecondFlatlistImage: {
    height: 130,
    width: 90,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  ColorHeading: {
    color: colors.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 16,
    marginVertical: '10@s',
  },
  colorheading2: {
    fontSize: 14,
    fontFamily: fonts.LatoMedium,
  },
  ButtonSize: {
    height: 40,
    width: '30%',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Spacification: {
    color: colors.textWhite,
    fontFamily: fonts.PoppinsSemiBold,
  },
  ColorMobileView: {
    // height: 100,
    width: '100%',
    marginVertical: '10@vs',
    // marginBottom:"50@s",
    zIndex: 1,
  },
  dropSSd: {
    backgroundColor: colors.dullWhite,
    height: '10@s',
    marginBottom: '20@s',
  },
  dropSSd1: {
    backgroundColor: colors.dullWhite,
    height: 40,
    // marginBottom:"20@s",
    marginVertical: '10@vs',
  },
  BackbottomButtonContainerMobile: {
    backgroundColor: colors.blurPrimary,
    height: '43@s',
    width: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10@s',
    marginLeft: '10@s',
    borderRadius: '5@s',
    overflow: 'hidden',
  },
  BackbottomButtonIconMobile: {
    fontSize: '17@s',
    color: colors.primary,
  },
  ForwordbottomButtonContainerMobile: {
    marginVertical: 10,
    // height:'100%'
  },
  nextStepMobile: {
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.textWhite,
    fontSize: '12@ms',
    width: '88%',
    height: '37@s',
    //  backgroundColor:'blue',
    textAlign: 'center',
    paddingVertical: '12@s',
  },
  modelContainerStyle: {
    marginHorizontal: 5,
    marginVertical: 4,
  },
  ModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  ModeView: {
    height: '170@vs',
    width: '310@s',
    backgroundColor: colors.textWhite,
    borderRadius: 5,
    elevation: 0.2,
  },
  ModalTitle: {
    paddingHorizontal: 20,
    marginTop: 13,
    alignSelf: 'center',
  },
  ModalHeading: {
    color: colors.black,
    fontSize: '15@s',
    fontFamily: fonts.bold,
  },
  deleteModalCrossIcon: {
    fontSize: 25,
    color: colors.light_grey,
  },
  ModalParagraph: {
    color: colors.textPrimeColor,
    fontFamily: fonts.LatoRegular,
    paddingHorizontal: '20@s',
    fontSize: '15@s',
    marginVertical: '15@s',
    textAlign: 'center',
  },
  ModalParagraphSecond: {
    color: colors.textPrimeColor,
    fontFamily: fonts.LatoRegular,
    fontSize: '15@s',
    textAlign: 'center',
    left: '-15@s',
  },
  ModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  Buttonss: {
    width: '45%',
    height: '40@s',
    borderRadius: '5@s',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  DeleteModal: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: 15,
    color: colors.primary,
  },
  CheckBoxView: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  productsattribut: {
    color: colors.textWhite,
    fontFamily: fonts.PoppinsSemiBold,
  },
  SencondHeadingTitle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
