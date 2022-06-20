import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '@SilalApp/common/components/CustomText';
import {Icon, CheckBox} from 'react-native-elements';
import {useTranslation} from 'react-i18next';
import colors from '@SilalApp/common/assets/colors';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {SwipeListView} from 'react-native-swipe-list-view';
import fonts from '@SilalApp/common/assets/fonts';
import {CustomButton} from '@SilalApp/common/components/native';
import Header from '../../../components/Header/index';

const Notes = () => {
  const {t} = useTranslation();
  const [addNote, setAddNote] = useState(2);
  const [check, setcheck] = useState(0);

  const data3 = [{id: 1}];
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingVertical: verticalScale(20),
        paddingHorizontal: scale(10),
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: verticalScale(15),
        }}>
        <Header title={t('Notes')} dostIcon={true} treeDot showIcon />
      </View>
      <View
        style={{
          height: '93%',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {addNote == 0 ? (
          <View style={{width: '100%', paddingHorizontal: scale(10)}}>
            <CustomText
              label="21 November 2021"
              color={colors.primary}
              fontFamily={fonts.PoppinsSemiBold}
              fontSize={16}
              marginBottom={verticalScale(10)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 25,
              }}>
              {/* <CheckBox
                checked={check}
                onPress={() => setcheck(0)}
                checkedColor=""
                uncheckedColor="red"
              /> */}
              <CheckBox
                checked={check}
                onPress={() => setcheck(!check)}
                checkedColor="#5AB3A8"
                uncheckedColor="#CCD4D6"
                backgroundColor={'red'}
              />
              <TextInput
                style={{
                  backgroundColor: 'transparent',
                  borderLeftColor: colors.black,
                  borderLeftWidth: 1,
                  height: '100%',
                  margin: 0,
                  padding: 0,
                  paddingLeft: scale(10),
                }}
              />
            </View>
          </View>
        ) : addNote == 1 ? (
          <View>
            <CustomText label="Ehllo" />
          </View>
        ) : addNote == 2 ? (
          <>
            <SwipeListView
              data={data3}
              renderItem={(data, rowMap) => (
                <View>
                  <View style={styles.noteDetail}>
                    <CustomText
                      label="20 November 2021"
                      textStyle={styles.date}
                    />
                    <CustomText
                      label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                      textStyle={styles.noteDetailText}
                    />
                  </View>

                  <View style={styles.borderView} />
                </View>
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={styles.rowBack}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FB5C5C',
                      position: 'absolute',
                      right: 1,
                      marginTop: 2,
                      width: 85,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: verticalScale(18),
                    }}>
                    <Text style={styles.BackButtonsText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-90}
            />

            {/* <View style={styles.noteDetail}>
       

            <View style={{marginHorizontal: 10, marginVertical: 5}}>
              <CustomText label="17 November 2021" textStyle={styles.date} />
              <CustomText
                label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                textStyle={styles.noteDetailText}
              />
            </View>

            <View style={styles.borderView} />
            <View style={{marginHorizontal: 10, marginVertical: 5}}>
              <CustomText label="16 November 2021" textStyle={styles.date} />
              <CustomText
                label="Sed ut perspiciatis unde omnis iste natus error sit volupta..."
                textStyle={styles.noteDetailText}
              />
            </View>

            <View style={styles.borderView} />
          </View> */}
          </>
        ) : (
          <View />
        )}
        {addNote == 0 ? (
          <CustomButton
            text={'Save note'}
            containerStyle={styles.saveNoteButton}
            textStyle={styles.textNote}
            onPress={() => setAddNote(2)}
          />
        ) : addNote == 2 ? (
          <TouchableOpacity activeOpacity={0.6} onPress={() => setAddNote(0)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Icon
                name="plus"
                type="antdesign"
                color={colors.white}
                size={28}
                style={styles.plus}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </ScrollView>
  );
};

export default Notes;

const styles = ScaledSheet.create({
  notesTitle: {
    fontFamily: fonts.bold,
    fontSize: '17@ms',
    color: colors.black,
  },
  noteDetail: {
    width: '100%',
    backgroundColor: colors.background,
    alignSelf: 'center',
    paddingVertical: '11@vs',
  },
  noteDetailText: {
    fontSize: '12@ms',
    fontFamily: fonts.LatoRegular,
    color: colors.textPrime,
  },
  borderView: {
    borderBottomColor: colors.borderColor2,
    borderBottomWidth: '1@s',
    width: '100%',
  },
  rowBack: {
    height: 55,
    backgroundColor: '#fff',
  },
  BackButtons: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackButtonsText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Lato-Medium',
  },
  saveNoteButton: {
    width: '100%',
    backgroundColor: colors.primaryBlur,
    height: '45@vs',
    borderRadius: '10@vs',
  },
  textNote: {
    fontSize: '15@ms',
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.primary,
  },
  plus: {
    backgroundColor: colors.primary,
    padding: '10@s',
    borderRadius: '99@s',
  },
});
