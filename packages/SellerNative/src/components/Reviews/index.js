import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, TextInput, } from 'react-native';
import { CustomButton, Raiting } from '@SilalApp/common/components/native';
import styles from './Styles';

const data2 = [
    {
        id: '1',

        Title: 'Ursula Landerskape',
        time: '14:38',
        Paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
        aboutOrder: 'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie'

    },
    {
        id: '2',
        Title: 'Ursula Landerskape',
        time: '14:38',
        Paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
        aboutOrder: 'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie'

    },
    {
        id: '3',
        Title: 'Ursula Landerskape',
        time: '14:38',
        Paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.',
        aboutOrder: 'Big Tasty Big McCombo, Chicken McNuggets (18 pcs.), Chicken Wings (3 pcs.), Shrimp Roll, Cheese Sauce, Coca-Cola Zero, Cherry Pie'


    },
];





const Reviews = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 25 }}>
                <View>
                    <Text style={styles.Title}>Restaurant’s name</Text>
                    <Text style={styles.subTitle}>8502 Preston Rd. Inglewood</Text>
                </View>
                <View style={styles.PeackTimeBackground}>
                    <Text style={styles.TextPeackTime}>PEAK HOURS 12 AM - 14 PM</Text>
                </View>
            </View>

            <View style={styles.DividerRow}>
                <View style={styles.DividerFirstView}>
                    <View style={styles.firstViewInerStyle}>
                        <Text style={styles.firstViewTitle} >Reviews</Text>
                    </View>
                    <FlatList
                        data={data2}
                        numColumns={1}
                        style={{ marginBottom: 100, height: 450 }}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.FlatListParagraphTitle}>
                                    <Text style={styles.ReviewsFlatListSecondaryMain}>{item.Title}</Text>
                                    <View style={{
                                        marginLeft: -20,
                                        marginTop: -3,
                                    }}>
                                        <Text style={{ paddingRight: 20 }}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: 138, marginTop: -50 }}>
                                    <Raiting />
                                </View>
                                <View style={styles.TextParagraphFlat}>
                                    <Text style={styles.FirstParagraphContent}>{item.Paragraph}</Text>
                                    <Text style={styles.ParagraphSecond}> <Text style={{ fontFamily: 'Poppins-Medium', color: '#002733' }}>Order : </Text> {item.aboutOrder}</Text>

                                    <View style={{ borderColor: '#E8E8E8', borderWidth: 1, marginVertical: 10, borderRadius: 5 }}>
                                        <TextInput placeholder='Type here' multiline={true} textAlignVertical='top' style={{ height: 80, }} />
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <CustomButton text="Reply" />
                                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}>
                                            <Text style={styles.ContactButton}>Contact support</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.BorderLine} />
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.SecondViewMainContainer}>
                    <Text style={styles.SecondViewTitle}>Reviews overview</Text>
                    <View style={styles.LineSecondView}>
                        <Text style={styles.TitleView}>Total </Text>
                        <Text style={styles.oneEightNine}>189</Text>
                    </View>
                    <View style={styles.SecondViewBorderLine} />
                    <View style={styles.LineSecondView}>
                        <Text style={styles.TitleView}>Answered </Text>
                        <Text style={styles.oneEightNine}>160</Text>
                    </View>
                    <View style={styles.SecondViewBorderLine} />
                    <View style={styles.LineSecondView}>
                        <Text style={styles.TitleView}>Total raiting </Text>
                        <Text style={styles.oneEightNine}>4.8</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Reviews

