import React, { useState, useRef } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, ScrollView, Modal } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomButton, LockOnLandscape, Camera } from '@SilalApp/common/components/native';
import AddItem from '../AddItem';
import Customisation_Templete from '../Customisation_Templete';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-easy-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';




const ItemCreaterFirstStep = ({ navigation }) => {

  const [order_state, set_order_state] = useState('All');
  const [Showmodal, setShowmodal] = useState(false)
  const [Openmodal, setOpenmodal] = useState(false)

  const toastRef = useRef();

  return (
    <View style={styles.MainContainer}>
      <SafeAreaView style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{ width: '100%', alignSelf: 'center' }}>
            <View style={styles.Header}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name='keyboard-backspace' style={styles.BackArrow} />
                <Text style={styles.backTitle} >Create new item</Text>
              </TouchableOpacity>
              <View style={{ marginHorizontal: 5, marginVertical: 4 }}>
                <Modal visible={Openmodal}
                  animationType="slideInRight"
                  transparent={true} >

                  <View
                    style={styles.ModalContainerPreview}>
                    <Entypo onPress={() => setOpenmodal(false)} name='cross' style={styles.CrossPreview} />
                    <View style={styles.MobileViewModal}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10 }}>
                        <Ionicons name='chevron-back-sharp' style={styles.IconModalMobile} />
                        <Ionicons name="ios-cart-outline" style={styles.IconModalMobile} />
                      </View>
                    </View>
                    <View style={styles.heartIcon}>
                      <AntDesign name="hearto" style={styles.iconStyleHeart} />
                    </View>
                    <ScrollView>
                      <View style={{ marginHorizontal: 45, }}>
                        <Text style={styles.TitleModalPreview}>Nepolitana Pizza, 30 sm </Text>

                        <Text style={styles.paragaphPreview}>
                          The release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                      </View>


                      <View style={styles.ParagraphPadingHorizontal}>
                        <Text style={styles.TitleModalPreview}>Ingrediants</Text>
                        <Text style={styles.paragaphPreview}>
                          The release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginHorizontal: 40 }}>
                        <View style={{ width: 60 }}>
                          <Text style={styles.Cal}>221 cal</Text>
                          <Text style={{ color: '#4C6870' }}>Calories</Text>
                        </View>

                        <View style={{ width: 60 }}>
                          <Text style={styles.Cal}>11g</Text>
                          <Text style={{ color: '#4C6870' }}>Protiens</Text>
                        </View>
                        <View style={{ width: 60, paddingLeft: 5 }}>
                          <Text style={styles.Cal}>11g</Text>
                          <Text style={{ color: '#4C6870' }}>Fats</Text>
                        </View>

                        <View style={{ width: 90 }}>
                          <Text style={styles.Cal}>221 cal</Text>
                          <Text style={{ color: '#4C6870' }}>Carbohydrats</Text>
                        </View>
                      </View>
                      <Text style={styles.AlertModal}>Allergies (!): Eggs, Glutten.</Text>
                      <View style={{ flexDirection: 'row', marginHorizontal: 42, }}>
                        <TouchableOpacity style={styles.ModalTertiaryButton}>
                          <Text style={styles.ButtonText}>Save As Draft</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => toastRef.current.show(
                            <View style={styles.ToastMainView}>
                              <Ionicons name='md-checkmark-circle' style={styles.IconToast} />
                              <Text style={styles.ToastParagraph}>The "Name" item has been Submitted for Quelity assurance </Text>
                              <TouchableOpacity onPress={() => { toastRef.current.close(), alert('undo') }}>
                                <Text style={styles.ActionToast}>OK</Text>
                              </TouchableOpacity>
                            </View>
                            , 3000
                          )}
                          style={styles.PrimaryButtonModal}>
                          <Text style={styles.TextPrimaryButton}>Request to publish</Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </View>
                </Modal>
              </View>
              <View style={{ right: 10, flexDirection: 'row', }}>
                <View>
                  <TouchableOpacity
                    onPress={() => setOpenmodal(true)}
                    style={{ width: 70, }} >
                    <Text style={styles.PreviewHeader}>Preview</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5, marginVertical: 4 }}>
                  <Modal visible={Showmodal}
                    animationType="slideInRight"
                    transparent={true} >
                    <View
                      style={styles.ModalContainer}>
                      <View style={styles.ModeView}>
                        <View style={styles.ModalTitle}>
                          <Text style={styles.ModalHeading}>Save as drafts?</Text>
                          <Entypo onPress={() => setShowmodal(false)} name='cross' style={{ fontSize: 25, color: '#CCD4D6' }} />
                        </View>
                        <Text style={styles.ModalParagraph}>
                          You have not finished creating the item.
                          If you exit, the data will not be saved.</Text>
                        <View style={styles.ModalButtonContainer}>
                          <TouchableOpacity
                            onPress={() => toastRef.current.show(
                              <View style={styles.ToastMainView}>
                                <Ionicons name='md-checkmark-circle' style={styles.IconToast} />
                                <Text style={styles.ToastParagraph}>Item Deleted</Text>
                                <TouchableOpacity onPress={() => { toastRef.current.close(), alert('undo') }}>
                                  <Text style={styles.ActionToast}>UNDO</Text>
                                </TouchableOpacity>
                              </View>
                              , 3000
                            )}
                            style={[{ backgroundColor: '#CCD4D6', }, styles.Buttonss]}>
                            <Text style={styles.DeleteModal}>Delete</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => toastRef.current.show(
                              <View style={styles.ToastMainView}>
                                <Ionicons name='md-checkmark-circle' style={styles.IconToast} />
                                <Text style={styles.ToastParagraph}>Untitled template saved as a draft</Text>
                                <TouchableOpacity onPress={() => { toastRef.current.close(), alert('undo') }}>
                                  <Text style={styles.ActionToast}>OK</Text>
                                </TouchableOpacity>
                              </View>
                              , 3000
                            )}
                            style={[{ backgroundColor: '#5AB3A8' }, styles.Buttonss]}>
                            <Text style={[{ color: '#fff' }, styles.DeleteModal]}>Save as draft</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
                  <TouchableOpacity onPress={() => setShowmodal(true)}
                    style={[styles.HeaderButton, { backgroundColor: '#A7D5D0', }]}>
                    <Text style={styles.HeaderButtonText}>Save as draft</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5, marginVertical: 4 }}>
                  <TouchableOpacity

                    onPress={() => toastRef.current.show(
                      <View style={styles.ToastMainView}>
                        <Ionicons name='md-checkmark-circle' style={styles.IconToast} />
                        <Text style={styles.ToastParagraph}>Order #247HW9 Successfully declined</Text>
                        <TouchableOpacity onPress={() => { toastRef.current.close(), alert('undo') }}>
                          <Text style={styles.ActionToast}>UNDO</Text>
                        </TouchableOpacity>
                      </View>
                      , 3000
                    )}
                    style={[styles.HeaderButton, { backgroundColor: '#5AB3A8', }]}>
                    <Text style={styles.HeaderButtonText}>Publish</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 15, marginHorizontal: 17 }}>
              <TouchableOpacity onPress={() => set_order_state('All')} >
                <Text style={{ color: order_state == 'All' ? '#002733' : '#4C6870', fontFamily: 'Poppins-SemiBold', paddingHorizontal: 20 }}>Add item</Text>
                <View style={[styles.archive_orders_tab, { borderColor: order_state == 'All' ? '#5AB3A8' : '#e8edee', }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => set_order_state('completed')} >
                <Text style={{ color: order_state == 'completed' ? '#002733' : '#4C6870', fontFamily: 'Poppins-SemiBold', paddingHorizontal: 20 }}>Customisations Templates</Text>
                <View style={[styles.archive_orders_tab, { borderColor: order_state == 'completed' ? '#5AB3A8' : '#e8edee', }]} />
              </TouchableOpacity>
            </View>

            {order_state == 'All' ?
              <AddItem />

              : null}
            {order_state == 'completed' ?
              <View>
                <Customisation_Templete />
              </View>
              : null
            }

          </View>
          <Toast ref={toastRef}
            style={styles.Tost}
            position='bottom'
            positionValue={250}
            fadeInDuration={750}
            fadeOutDuration={800}
            opacity={1}
            textStyle={{ color: 'red' }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default ItemCreaterFirstStep

