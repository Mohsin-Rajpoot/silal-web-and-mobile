
import React, { useState, useRef } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions,
    SafeAreaView, FlatList, Pressable, Modal, ScrollView, Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
} from 'react-native-popup-menu';
import { CheckBox } from 'react-native-elements';
import { CustomButton, LockOnLandscape, SearchBox } from '@SilalApp/common/components/native';

export default function Archive_orders({ title, navigation }) {

    const [checked, setchecked] = useState(false);
    const [loader, setLoader] = useState(false);

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
    var [data,setData] = useState([
        {
            id: '1',
            Title: 'Embedded Software Engineer',
            SubTitle: 'Newyork',
            year: "22/03/2022",
            image: require('../Assets/image8.png'),
            checked:false

        },
        {
            id: '2',
            Title: 'Web Developer',
            SubTitle: 'Lahore',
            year: "22/03/2022",
            checked:false

        },
        {
            id: '3',
            Title: 'Embedded Software Engineer',
            SubTitle: 'USA',
            year: '22/03 /2022',
            checked:false

        },
        {
            id: '4',
            Title: 'Embedded Software Engineer',
            SubTitle: 'USA',
            year: '22/03/2022',
            checked:false

        },
        {
            id: '5',
            Title: 'Embedded Software last',
            SubTitle: 'USA',
            year: '22/03/2022',
            checked:false

        },
        {
            id: '6',
            Title: 'Embedded Software last',
            SubTitle: 'USA',
            year: '22/03/2022',
            checked:false

        },
        {
            id: '7',
            Title: 'Embedded Software full last',
            SubTitle: 'USA',
            year: '22/03/2022',
            checked:false

        },
        {
            id: '8',
            Title: 'Embedded Software full last',
            SubTitle: 'USA',
            year: '22/03/2022',
            checked:false

        },

    ]);
  
    const render_all_oredrs = (item,index) => {

        return (
            <View>

                <View style={[styles.render_all_orders, { paddingTop: 5 }]}>
                    <View>
                    <CheckBox
                                                    checked={item.checked == true || item.checked == 'true' ? true : false}
                                                    onPress={() => setcheck(index)}
                                                    checkedColor="#5AB3A8"
                                                    uncheckedColor="#CCD4D6"
                                                />
                    </View>
                    <View style={[styles.render_all_order_single, { width: '10%', marginTop: 5 }]}>
                        <Image source={require('../Assets/image12.png')} style={{ height: 45, width: 45, resizeMode: 'contain', borderRadius: 5 }} />
                    </View>
                    <View style={[styles.render_all_order_single, { width: '10%', }]}>
                        <Text style={{ fontFamily: 'Lato-Regular', }}>Cheesecakes with sour cream and citrus hon</Text>
                    </View>
                    <View style={[styles.render_all_order_single, { width: '15%', justifyContent: 'flex-start', flexDirection: 'row', left: 20 }]}>
                        <Text style={{ fontFamily: 'Lato-Regular' }}>723DN2</Text>
                    </View>
                    <View style={[styles.render_all_order_single, { width: '10%', justifyContent: 'flex-start', flexDirection: 'row' }]}>
                        <Text style={{ marginLeft: -15 }}>11.14.2021</Text>
                    </View>
                    <View style={[styles.render_all_order_single, { width: '13%', }]}>
                        <Text style={{ fontFamily: 'Lato-Regular', alignSelf: 'flex-start', paddingHorizontal: 25 }}>230 g</Text>

                    </View>
                    <View style={[styles.render_all_order_single, {
                        width: '10%',


                    }]}>
                        <Text style={{ fontFamily: 'Lato-Regular', }}>18 portions</Text>
                    </View>
                    <View style={[styles.render_all_order_single, { width: '14%', }]}>
                        <Text style={{ fontFamily: 'Lato-Regular', }}>$ 2.50</Text>
                    </View>
                    <View style={[styles.render_all_order_single, { width: '8%', }]} >
                        <Menu>
                            <MenuTrigger style={styles.trigger}>
                                <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                                    <Entypo name='dots-three-vertical' style={[styles.cross_icon, { color: '#4C6870', fontSize: 20 }]} />
                                </View>
                            </MenuTrigger>
                            <MenuOptions customStyles={{ optionText: { padding: 5 } }}>
                                <MenuOption value="Normal" text='Edit' />
                                <MenuOption value="Normal" text='Freeze Listing' />
                                <MenuOption value="Normal" text='Delete' />
                            </MenuOptions>
                        </Menu>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.9, borderColor: '#00273314' }} />

            </View>

        )
    }

    const header_alloredrs = () => {
        return (
            <View style={styles.all_orders_header}>
                <View style={[styles.all_orders, { width: '5%' }]}>
                    <Text style={styles.all_orders_heading_txt}></Text>
                </View>
                <View style={[styles.all_orders, { width: '12%' }]}>
                    <Text style={styles.all_orders_heading_txt}>Photo</Text>
                </View>
                <View style={[styles.all_orders, { width: '8%' }]} >
                    <Text style={styles.all_orders_heading_txt}>Item name</Text>
                </View>
                <View style={[styles.all_orders, { width: '14%' }]} >
                    <Text style={styles.all_orders_heading_txt}>Item ID</Text>
                </View>
                <View style={[styles.all_orders, { width: '12%' }]} >
                    <Text style={styles.all_orders_heading_txt}>Last purchase</Text>
                </View>
                <View style={[styles.all_orders, { width: '15%' }]} >
                    <Text style={styles.all_orders_heading_txt}>Weight</Text>
                </View>
                <View style={[styles.all_orders, { width: '12%' }]} >
                    <Text>On stock</Text>
                </View>
                <View style={[styles.all_orders, { width: '14%' }]} >
                    <Text style={styles.all_orders_heading_txt}>Price</Text>
                </View>
                <View style={[styles.all_orders, { width: '8%' }]} >
                    <Text style={styles.all_orders_heading_txt}>Action</Text>
                </View>

            </View>
        )
    }
    return (

        <View style={{ height: '90%', padding: 20 }}>
            <MenuProvider >



                <View style={{ width: '100%', alignSelf: 'center' }}>                    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name='keyboard-backspace' style={{ fontSize: 40, color: '#002733', fontFamily: 'Poppins-Bold' }} />
                            <Text style={{ fontSize: 25, color: '#002733', fontFamily: 'Poppins-Bold' }} >Salads</Text>
                        </TouchableOpacity>
                        <SearchBox placeholder='Search' />
                        <View style={{ right: 10, position: 'relative' }}>
                            <CustomButton
                                text="Add new item"
                                onPress={() => navigation.navigate('ItemCreaterFirstStep')}

                            />
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#fff',
                    width: '100%', paddingVertical: 10, paddingHorizontal: 10, elevation: 1, borderRadius: 5,
                }}>
                    <View style={{ width: '98%', justifyContent: 'center', alignSelf: 'center', }}>
                        {header_alloredrs()}
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={data}
                            
                            style={{ height: 450 }}
                            renderItem={({ item,index }) => (
                                render_all_oredrs(item,index)
                            )}
                        />
                    </View>
                </View>
                <View style={styles.pagination_view}>
                    <Text style={{ fontFamily: 'Lato-Regular' }}>Showing 1-9 of 86</Text>
                    <View style={styles.pagination_numbring}>
                        <Ionicons name='chevron-back' style={{ color: '#d1d8da', fontSize: 24 }} />
                        <Text style={{ fontFamily: 'Lato-Regular', color: 'black' }}>1</Text>
                        <Text>2</Text>
                        <Text>3</Text>
                        <Text>4</Text>
                        <MaterialCommunityIcons name='chevron-right-circle' style={{ color: '#4c6870', fontSize: 24 }} />
                    </View>
                </View>



            </MenuProvider>


        </View>


    );
}
const styles = StyleSheet.create({

    title: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Poppins-Light',
        margin: 10
    },
    single_order: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    filter_box: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    filter: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 40,
        width: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    order_header: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderid_text: {
        fontSize: 15,
        color: '#CCD4D6',
        fontWeight: 'bold',
    },
    order_timer: {
        backgroundColor: '#F2A341',
        borderRadius: '0 0 5 5'
    },
    order_title: {
        width: '70%',
        fontSize: 17
    },
    order_item: {
        flexDirection: 'row',
        marginTop: 20,
    },
    cross_icon: {
        color: "#CCD4D6",
        fontSize: 16,
    },
    more_order: {
        width: 60,
        backgroundColor: '#E6F4F2',
        padding: 3,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: 5
    },
    accept_btn: {
        backgroundColor: '#5AB3A8',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center'
    },
    accept_btn_txt: {
        color: 'white',
        fontSize: 15
    },
    order_recve_name: {
        fontSize: 17,
        fontWeight: '400',
        color: 'black'
    },
    order_recve_phone_view: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    order_recve_loc_view: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    ready_btn: {
        flex: 1,
        backgroundColor: '#5AB3A8',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    delivryby_btn: {
        backgroundColor: '#fdf1e3',
        padding: 5,
        borderRadius: 5
    },
    delivryby_btn_txt: {
        color: '#F2A341'
    },
    all_orders: {
        backgroundColor: '#F2F4F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    all_orders_header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 50,
        backgroundColor: '#F2F4F5',
        padding: 10,
        marginVertical: 8
    },
    render_all_orders: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        // padding: 10
    },
    render_all_order_single: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height: '100%',
        width: '50%',
        alignSelf: 'flex-end',
        backgroundColor: "white",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    orderid_text: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    modal_header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modal_recuring: {
        backgroundColor: '#5AB3A8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 20
    },
    modal_fields: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    order_item: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    modal_title_second: {
        color: 'black',
        fontSize: 15
    },
    modal_title_first: {
        color: '#CCD4D6',
        fontSize: 15,
        width: 150
    },
    archive_orders_tab: {
        borderBottomWidth: 4,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    calndr_date: {
        backgroundColor: 'white',
        height: 40,
        width: 200,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    all_orders_heading_txt: {
        fontFamily: 'Lato-Bold'
    },
    toast: {
        backgroundColor: '#FFFFFF',
        // marginHorizontal:30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    trigger: {
        // padding: 10,
        // margin: 10,
        // backgroundColor:'red'
    },
    modal_data_heading: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#F2F4F5',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    pagination_view: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 20
    },
    pagination_numbring: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    }
});

