import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomButton, LockOnLandscape, Camera } from '@SilalApp/common/components/native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import Svg, { Path } from "react-native-svg"
import Feather from "react-native-vector-icons/Feather"

const Secondary = "#002733";
let Primary = "#5AB3A8";
const AddItem = ({ navigation }) => {


    const [selectedCategory, setselectedCategory] = useState();
    const [Cusine, setCusine] = useState();
    const [checked, setchecked] = useState(false);
    const [loader, setLoader] = useState(false);
    const [order_state, set_order_state] = useState('All');


    const setcheck = (index) => {
        const val = data[index]
        val.checked = !val.checked
        data[index] = val
        setTimeout(() => {
            setData(data)
            setTimeout(() => {
                setLoader(!loader)
            }, 100);
        }, 200);
    }
    const [data, setData] = useState([
        {
            id: '1',
            Text: 'Glutten',
            checked: false,
        },

        {
            id: '2',
            Text: 'Cow’s milk',
            checked: false,

        },
        {
            id: '3',
            Text: 'Eggs',
            checked: false,
        },
        {
            id: '4',
            Text: 'True nuts',
            checked: false,
        },
        {
            id: '5',
            Text: 'Meat',
            checked: false,
        },

        {
            id: '2',
            Text: 'Fish',
            checked: false,
        },
        {
            id: '3',
            Text: 'Peanut',
            checked: false,
        },
        {
            id: '4',
            Text: 'Shellfish',
            checked: false,
        },
    ]);



    const [data2, setData2] = useState([
        {
            id: '1',
            SecondListText: 'Spicy',
            checked: false,

        },

        {
            id: '2',
            SecondListText: 'Organic',
            checked: false,

        },
        {
            id: '3',
            SecondListText: 'Vegan',
            checked: false,

        },
        {
            id: '4',
            SecondListText: 'Vegeterian',
            checked: false,

        },

    ]);

    const data3 = [
        {
            id: '1',
            Text: 'Glutten',
            checked: false,
        },

        {
            id: '2',
            Text: 'Cow’s milk',
            checked: false,

        },
        {
            id: '3',
            Text: 'Eggs',
            checked: false,
        },
        {
            id: '4',
            Text: 'True nuts',
            checked: false,
        },
    ];

    return (
        <SafeAreaView style={{ width: '100%', alignSelf: 'center' }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ width: '100%', alignSelf: 'center' }}>
                    {order_state == 'All' ?
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 5, marginTop: 5 }}>
                            <View style={{ width: '60%', }}>


                                <View style={{ backgroundColor: '#fff', elevation: 0.7, borderRadius: 5, }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.TextfieldTitle}>Category (!)</Text>
                                        <Text style={styles.TextfieldTitle}>Cuisine (!)</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.dropdownbox}>
                                            <Picker
                                                selectedValue={selectedCategory}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setselectedCategory(itemValue)
                                                }>
                                                <Picker.Item label="Salad" value="java" />
                                                <Picker.Item label="Salad Special" value="js" />
                                            </Picker>
                                        </View>
                                        <View style={styles.dropdownbox}>
                                            <Picker
                                                selectedValue={Cusine}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setCusine(itemValue)
                                                }>
                                                <Picker.Item label="Cusine" value="java" />
                                                <Picker.Item label="Cusine Special" value="js" />
                                            </Picker>
                                        </View>
                                    </View>


                                    <Text style={styles.TextfieldTitle}>Item name (!)</Text>
                                    <TextInput placeholder='Salad with shrimps and avocado' placeholderTextColor="#CCD4D6" style={styles.TextInput} />
                                    <Text style={styles.TextfieldTitle}>Item description</Text>
                                    <TextInput placeholder='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' multiline={true} textAlignVertical={'top'} placeholderTextColor="#CCD4D6" style={[styles.TextInput, { height: 95 }]} />
                                    <Text style={styles.TextfieldTitle}>Ingredients</Text>
                                    <TextInput placeholder='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                                        multiline={true} textAlignVertical={'top'} placeholderTextColor="#CCD4D6" style={[styles.TextInput, { height: 95 }]} />
                                    <Text style={styles.TextfieldTitle}>Ingredients</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: 15 }}>
                                        <TextInput placeholder='Calories' style={styles.IngrediantsTextInput} />
                                        <TextInput placeholder='Protein' style={styles.IngrediantsTextInput} />
                                        <TextInput placeholder='Fats' style={styles.IngrediantsTextInput} />
                                        <TextInput placeholder='Carbohydrates' style={styles.IngrediantsTextInput} />
                                    </View>

                                </View>

                                <View style={{
                                    backgroundColor: '#fff', borderRadius: 5, marginVertical: 20,
                                    paddingHorizontal: 20, elevation: 1, borderColor: '#CCD4D6', borderWidth: 0.3
                                }}>

                                    <Text style={{
                                        paddingTop: 17,
                                        color: Secondary,
                                        fontSize: 17,
                                        fontFamily: 'Lato-Regular'
                                    }}>
                                        Allergies</Text>
                                    <FlatList
                                        data={data}
                                        numColumns={4}
                                        style={{ marginBottom: 2, height: 110, }}

                                        renderItem={({ item, index }) => (
                                            <View style={{ flexDirection: 'row', width: '25%' }}>
                                                <CheckBox
                                                    checked={item.checked == true || item.checked == 'true' ? true : false}
                                                    onPress={() => setcheck(index)}
                                                    checkedColor="#5AB3A8"
                                                    uncheckedColor="#CCD4D6"
                                                />
                                                <Text style={{
                                                    paddingTop: 17,
                                                    marginLeft: -13,
                                                    color: Secondary,
                                                    fontSize: 17,
                                                    fontFamily: 'Lato-Regular'
                                                }}>
                                                    {item.Text}</Text>
                                            </View>
                                        )}
                                        keyExtractor={item => item.id}
                                    />
                                    <Text style={{
                                        paddingTop: 17,
                                        color: Secondary,
                                        fontSize: 17,
                                        fontFamily: 'Lato-Regular'
                                    }}>
                                        Food preferences</Text>
                                    <FlatList
                                        data={data2}
                                        numColumns={4}
                                        style={{ marginBottom: 10, height: 50, }}

                                        renderItem={({ item }) => (
                                            <View style={{ flexDirection: 'row', width: '25%' }}>
                                                <CheckBox
                                                    checked={checked}
                                                    onPress={() => setchecked(!checked)}
                                                    checkedColor="#5AB3A8"
                                                    uncheckedColor="#CCD4D6"
                                                />
                                                <Text style={{
                                                    paddingTop: 17,
                                                    marginLeft: -13,
                                                    color: Secondary,
                                                    fontSize: 17,
                                                    fontFamily: 'Lato-Regular'
                                                }}>{item.SecondListText}
                                                </Text>
                                            </View>
                                        )}
                                        keyExtractor={item => item.id}
                                    />

                                </View>
                                <View style={{
                                    backgroundColor: '#fff', borderRadius: 5, marginVertical: 5,
                                    paddingHorizontal: 20, elevation: 1, borderColor: '#CCD4D6', borderWidth: 0.3
                                }}>
                                    <Text style={{ color: Secondary, fontSize: 15, fontFamily: 'Poppins-SemiBold', paddingVertical: 15 }}>Select customisations</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                        <TextInput placeholder='Toppings' placeholderTextColor={Secondary} style={[styles.IngrediantsTextInput, { marginLeft: -4, fontSize: 15, fontFamily: 'Lato-Regular', backgroundColor: '#F2F4F5', width: '29%', marginHorizontal: 10 }]} />
                                        <TextInput placeholder='Sauces' placeholderTextColor={Secondary} style={[styles.IngrediantsTextInput, { fontSize: 15, fontFamily: 'Lato-Regular', backgroundColor: '#F2F4F5', width: '29%', marginHorizontal: 10 }]} />
                                        <TextInput placeholder='Drink' placeholderTextColor={Secondary} style={[styles.IngrediantsTextInput, { fontSize: 15, fontFamily: 'Lato-Regular', backgroundColor: '#F2F4F5', width: '29%', marginHorizontal: 10 }]} />
                                        <View style={styles.IngrediantsTextInput1} />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, }}>
                                        <View style={[styles.CustomizationBox, { marginLeft: -4, }]} >
                                            <View style={{ flexDirection: 'row', right: -17, position: 'absolute', top: -8 }}>
                                                <CheckBox
                                                    checked={checked}
                                                    onPress={() => setchecked(!checked)}
                                                    checkedColor="#000"
                                                    uncheckedColor="#fff"
                                                />
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 20, width: "60%", left: 10 }}>
                                                <Text style={{ color: '#fff', fontFamily: 'Lato-Bold', fontSize: 17 }}>Sandwiches Toppings</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.CustomizationBox,]}  >
                                            <View style={{ flexDirection: 'row', right: -17, position: 'absolute', top: -8 }}>
                                                <CheckBox
                                                    checked={checked}
                                                    onPress={() => setchecked(!checked)}
                                                    checkedColor="#000"
                                                    uncheckedColor="#fff"
                                                />
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 20, width: "60%", left: 10 }}>
                                                <Text style={{ color: '#fff', fontFamily: 'Lato-Bold', fontSize: 17 }}>Sauces</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.CustomizationBox,]}  >
                                            <View style={{ flexDirection: 'row', right: -17, position: 'absolute', top: -8 }}>
                                                <CheckBox
                                                    checked={checked}
                                                    onPress={() => setchecked(!checked)}
                                                    checkedColor="#000"
                                                    uncheckedColor="#fff"
                                                />
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 20, width: "60%", left: 10 }}>
                                                <Text style={{ color: '#fff', fontFamily: 'Lato-Bold', fontSize: 17 }}>Soft Drinks</Text>
                                            </View>
                                        </View>
                                        <View style={styles.IngrediantsTextInput1} />
                                    </View>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <View style={styles.SearchIcon}>
                                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Path d="M7.33268 2.33268C4.57126 2.33268 2.33268 4.57126 2.33268 7.33268C2.33268 10.0941 4.57126 12.3327 7.33268 12.3327C10.0941 12.3327 12.3327 10.0941 12.3327 7.33268C12.3327 4.57126 10.0941 2.33268 7.33268 2.33268ZM0.666016 7.33268C0.666016 3.65078 3.65078 0.666016 7.33268 0.666016C11.0146 0.666016 13.9993 3.65078 13.9993 7.33268C13.9993 8.87328 13.4768 10.2918 12.5992 11.4207L17.0886 15.9101C17.414 16.2355 17.414 16.7632 17.0886 17.0886C16.7632 17.414 16.2355 17.414 15.9101 17.0886L11.4207 12.5992C10.2918 13.4768 8.87328 13.9993 7.33268 13.9993C3.65078 13.9993 0.666016 11.0146 0.666016 7.33268Z" fill="#B3BEC2" />
                                                </Svg>
                                            </View>
                                            <TextInput
                                                placeholder='Search'
                                                placeholderTextColor="#B3BEC2"
                                                paddingHorizontal={42}
                                                style={styles.Input}

                                            />
                                        </View>
                                    </View>
                                    <View style={[styles.CustomizationBox, { marginVertical: 15, left: -10, backgroundColor: '#A5B4B8', }]}  >
                                        <View style={{ flexDirection: 'row', right: -17, position: 'absolute', top: -8 }}>
                                            <CheckBox
                                                checked={checked}
                                                onPress={() => setchecked(!checked)}
                                                checkedColor="#000"
                                                uncheckedColor="#fff"

                                            />
                                        </View>
                                        <View style={{ position: 'absolute', bottom: 20, width: "60%", left: 10 }}>
                                            <Text style={{ color: '#fff', fontFamily: 'Lato-Bold', fontSize: 17 }}>Toppings
                                                for salads</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '38%',marginTop:-10  }}>
                                <View style={{ alignSelf: 'center', elevation: 2, height: 110, width: '97%', backgroundColor: '#fff', marginVertical: 10, borderRadius: 5, paddingVertical: 10 }}>
                                    <Text style={[styles.TextfieldTitle, { left: -4, }]}>Set the price  (!)</Text>
                                    <TextInput placeholder='$' style={[styles.IngrediantsTextInput, { marginLeft: -4, fontSize: 15, fontFamily: 'Lato-Regular', backgroundColor: '#fff', width: '90%', marginHorizontal: 10, alignSelf: 'center' }]} />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff', width: '95%',
                                    alignSelf: 'center', borderRadius: 5, elevation: 1, alignItems: 'center', height: 415, 
                                }}>
                                    <View>
                                        <FlatList
                                            data={data3}
                                            numColumns={2}
                                            style={{ height: 130, }}
                                            renderItem={({ item, index }) => (
                                                <View style={[styles.CustomizationBox, {
                                                    marginVertical: 10, backgroundColor: '#F2F4F5',
                                                    width: '44%', height: 130, alignSelf: 'center'
                                                }]}>
                                                    <View style={{ flexDirection: 'row', right: -17, position: 'absolute', top: -8 }}>
                                                        <CheckBox
                                                            checked={checked}
                                                            onPress={() => setchecked(!checked)}
                                                            checkedColor="#000"
                                                            uncheckedColor="#fff"
                                                        />
                                                    </View>
                                                    <View style={{ position: 'absolute', bottom: 5, right: 20 }}>
                                                        <Svg width="110" height="110" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <Path d="M63.3333 10H16.6667C12.9848 10 10 12.9848 10 16.6667V63.3333C10 67.0152 12.9848 70 16.6667 70H63.3333C67.0152 70 70 67.0152 70 63.3333V16.6667C70 12.9848 67.0152 10 63.3333 10Z" stroke="#CCD4D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <Path d="M28.332 33.332C31.0935 33.332 33.332 31.0935 33.332 28.332C33.332 25.5706 31.0935 23.332 28.332 23.332C25.5706 23.332 23.332 25.5706 23.332 28.332C23.332 31.0935 25.5706 33.332 28.332 33.332Z" stroke="#CCD4D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <Path d="M70.0013 49.9987L53.3346 33.332L16.668 69.9987" stroke="#CCD4D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </Svg>
                                                    </View>
                                                </View>
                                            )}
                                            keyExtractor={item => item.id}
                                        />

                                        <View>
                                            <Text style={{
                                                position: 'absolute',
                                                right: 20,
                                                fontSize: 12, bottom: 5, fontFamily: 'Lato-Semibold', color: '#CCD4D6'
                                            }}>2 mb max</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', marginBottom: 20, }}>
                                            <TouchableOpacity style={{ backgroundColor: '#4C6870', height: 50, width: '90%', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                                <Feather name="upload" style={{ color: '#fff', fontSize: 25 }} />
                                                <Text style={{ fontSize: 15, fontFamily: 'Poppins-Medium', color: '#fff', paddingHorizontal: 5, paddingTop: 10 }}>Upload</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>


                                    <View style={{
                                        backgroundColor: '#fff', borderRadius: 5, marginVertical: 25,
                                        elevation: 1, borderColor: '#CCD4D6', borderWidth: 0.3, width: '100%'
                                    }}>

                                        <Text style={{
                                            paddingTop: 17,
                                            color: Secondary,
                                            fontSize: 17,
                                            fontFamily: 'Lato-Regular',
                                            marginHorizontal: 10
                                        }}>
                                            Imen qualities  (!)</Text>
                                        <FlatList
                                            data={data3}
                                            numColumns={2}
                                            style={{ marginBottom: 2, height: 200, }}

                                            renderItem={({ item, index }) => (
                                                <View style={{ flexDirection: 'row', width: '45%' }}>
                                                    <CheckBox
                                                        checked={item.checked == true || item.checked == 'true' ? true : false}
                                                        onPress={() => setcheck(index)}
                                                        checkedColor="#5AB3A8"
                                                        uncheckedColor="#CCD4D6"
                                                    />
                                                    <Text style={{
                                                        paddingTop: 17,
                                                        marginLeft: -13,
                                                        color: Secondary,
                                                        fontSize: 17,
                                                        fontFamily: 'Lato-Regular'
                                                    }}>
                                                        {item.Text}</Text>
                                                </View>
                                            )}
                                            keyExtractor={item => item.id}
                                        />
                                    </View>
                                    {/* ddd */}
                                    <View style={{ alignSelf: 'center', elevation: 2, height: 110, width: '97%', backgroundColor: '#fff', marginVertical: 10, borderRadius: 5, paddingVertical: 10 }}>
                                        <Text style={[styles.TextfieldTitle, { width: "80%" }]}>Estimated preparing time</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <TextInput placeholder='30' style={[styles.IngrediantsTextInput, { fontSize: 15, fontFamily: 'Lato-Regular', backgroundColor: '#fff', width: '50%', marginHorizontal: 14 }]} />
                                            <Text style={{
                                                color: Secondary,
                                                fontSize: 17,
                                                fontFamily: 'Lato-Regular'
                                            }}>minutes</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>

                        </View>
                        : null}
                    {order_state == 'completed' ?
                        <Text>Harris</Text> : null
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddItem

const styles = StyleSheet.create({
    TextInput: {
        width: '95%',
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 15,
        fontSize: 17,
        fontFamily: 'Lato-Regular',
        alignSelf: 'center',
        borderColor: '#CCD4D6'

    },
    IngrediantsTextInput: {
        width: '23%', borderRadius: 5, borderWidth: 0.3, borderColor: '#CCD4D6', paddingHorizontal: 10
    },
    IngrediantsTextInput1: {
        width: '13%',
    },
    TextfieldTitle: {
        color: Secondary, fontSize: 14, fontFamily: 'Lato-Regular', marginHorizontal: 20, paddingVertical: 10, width: "43%"
    },
    dropdownbox: {
        height: 50, width: '45%', elevation: 0.7, borderRadius: 5, borderColor: Secondary, marginVertical: 5, marginHorizontal: 15
    },
    CustomizationBox: {
        backgroundColor: '#F2F4F5', width: '29%', marginHorizontal: 10, backgroundColor: Primary,
        borderRadius: 5, borderWidth: 0.3, borderColor: '#CCD4D6', height: 140
    },
    SearchIcon: {
        fontSize: 20,
        marginRight: -24,
        color: '#B3BEC2'
    },
    Input: {
        height: 46,
        alignSelf: 'center',
        elevation: 1,
        width: "100%",
        borderRadius: 5,
        borderColor: Secondary,

    },
    HeaderButton: {
        height: 40, width: 140, alignItems: 'center', justifyContent: 'center', borderRadius: 5
    },
    HeaderButtonText: {
        color: '#fff', textAlign: 'center', fontFamily: 'Poppins-SemiBold'
    },
    // ////////State
    archive_orders_tab: {
        borderWidth: 5,
        height: 5,
        paddingHorizontal: 30,
        justifyContent: 'center',
        borderRadius: 5
    },
})