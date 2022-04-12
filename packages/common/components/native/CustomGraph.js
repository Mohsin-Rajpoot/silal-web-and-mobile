

import React, { Component, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, StatusBar, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import * as Animatable from 'react-native-animatable';

const windowWidthF = Dimensions.get("window").height
const windowHeightF = Dimensions.get("window").width

var graphHeight = windowWidthF / 7;
var finalHeight = graphHeight * 2.2;
var ValueFirst = 28600;


var values = [
    { id: 1, earned: 12200, earnedBarHeight: 0, duration: "1/3" },
    { id: 2, earned: 14314, earnedBarHeight: 0, duration: "1/10" },
    { id: 3, earned: 18284, earnedBarHeight: 0, duration: "1/17" },
    { id: 4, earned: 25624, earnedBarHeight: 0, duration: "1/24" },
    { id: 5, earned: 21023, earnedBarHeight: 0, duration: "1/31" },
    { id: 6, earned: 9400, earnedBarHeight: 0, duration: "2/7" },
    { id: 7, earned: 11314, earnedBarHeight: 0, duration: "2/14" },

]

export default function CustomGraph() {
    const [showDurationPicker, setshowDurationPicker] = useState(false)


    const fadeAnim16 = useRef(new Animated.Value(0)).current;
    const fadeAnim17 = useRef(new Animated.Value(0)).current;
    const fadeAnim18 = useRef(new Animated.Value(0)).current;
    const fadeAnim19 = useRef(new Animated.Value(0)).current;
    const fadeAnim20 = useRef(new Animated.Value(0)).current;
    const fadeAnim21 = useRef(new Animated.Value(0)).current;
    const fadeAnim30 = useRef(new Animated.Value(0)).current;

    const [graphValue, setGraphValue] = useState([
        { id: 1, earned: 18200, earnedBarHeight: 0, duration: "1/3" },
        { id: 2, earned: 10314, earnedBarHeight: 0, duration: "1/10" },
        { id: 3, earned: 9984, earnedBarHeight: 0, duration: "1/17" },
        { id: 4, earned: 11624, earnedBarHeight: 0, duration: "1/24" },
        { id: 5, earned: 11023, earnedBarHeight: 0, duration: "1/31" },
        { id: 6, earned: 9400, earnedBarHeight: 0, duration: "2/7" },

    ])

    const animateFun = (value, value2) => {
        Animated.timing(value2, {
            toValue: value,
            duration: 1800,
          
        }).start();
        return value2
    }

    useEffect(() => {
        console.log("width", windowHeightF, "height", windowWidthF);
        for (var i = 0; i < values.length; i++) {
            var earnedPercentage = (values[i].earned / ValueFirst) * 100;
            var graphHeight = (finalHeight * earnedPercentage) / 100;
            values[i].earnedBarHeight = graphHeight
        }
        setGraphValue([...values])
    }, [])
    return (
        <>
            {/* <StatusBar translucent={false} barStyle="light-content" backgroundColor="#fff" /> */}
            <View style={styles.container}>
                <View style={styles.innercontainer}>
                    <View style={{ height: windowHeightF / 1.21, width: windowHeightF, flexDirection: "row" }}>
                        <View>
                            <View style={styles.graphHorizontalLinesView}>
                                <Text style={styles.digits}>${ValueFirst > 999999 ? 1 + "M" : (ValueFirst / 1000).toFixed(1)}</Text>
                                <View style={styles.horizontalLine} />
                            </View>
                            <View style={styles.graphHorizontalLinesView}>
                                <Text style={styles.digits}>${((ValueFirst / 1000) / 2).toFixed(1)}</Text>
                                <View style={styles.horizontalLine} />
                            </View>
                            <View style={styles.graphHorizontalLinesView}>
                                <Text style={styles.digits}>${(((ValueFirst / 2) / 2) / 1000).toFixed(1)}</Text>
                                <View style={styles.horizontalLine} />
                            </View>
                            <View style={styles.graphHorizontalLinesView}>
                                <Text style={styles.digits}>${ValueFirst * 0}k</Text>
                                <View style={styles.horizontalLine} />
                            </View>
                            <View style={styles.graphHorizontalLinesView}>
                                <Text style={styles.digits}>${ValueFirst * 0}k</Text>
                                <View style={styles.horizontalLine} />
                            </View>
                            <View style={styles.graphHorizontalLinesView}>
                                <Text style={styles.digits}>${ValueFirst * 0}k</Text>
                                <View style={styles.horizontalLine} />
                            </View>
                        </View>
                        <View style={styles.monthNameView}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={graphValue}
                                renderItem={({ item, index }) =>
                                    <View style={{ width: windowHeightF / 20, marginRight: 1, }}>
                                        <View style={{ position: "absolute", flexDirection: "row" }}>
                                            <LinearGradient colors={['#73D5C9', '#5AB3A8',]} style={{ borderRadius: 15, }}>
                                                <Animatable.View style={{
                                                    width: 28, height: item.id == 1 ?
                                                        animateFun(item.earnedBarHeight, fadeAnim16) : item.id == 2 ?
                                                            animateFun(item.earnedBarHeight, fadeAnim17) : item.id == 3 ?
                                                                animateFun(item.earnedBarHeight, fadeAnim18) : item.id == 4 ?
                                                                    animateFun(item.earnedBarHeight, fadeAnim19) : item.id == 5 ?
                                                                        animateFun(item.earnedBarHeight, fadeAnim20) : item.id == 6 ?
                                                                            animateFun(item.earnedBarHeight, fadeAnim21) : item.id == 7 ?
                                                                                animateFun(item.earnedBarHeight, fadeAnim30)
                                                                                : 0
                                                }}
                                                />
                                            </LinearGradient>
                                        </View>
                                        <View style={styles.durationListTextView}>
                                            <Text style={[styles.quarterlySepText, {}]}>28 PM</Text>
                                            {/* <Text style={[styles.quarterlySepText2, { position: 'absolute', marginTop: 3 }]}>29</Text> */}
                                        </View>
                                    </View>}
                                keyExtractor={item => item._id} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#045bd1',
    },
    innercontainer: {
        width: '100%',
        // height: windowWidthF / 2.2,
    },



    graphHorizontalLinesView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50,
        width: "100%",
    },
    digits: {
        // color: "#FFF",
        fontSize: 16,
        letterSpacing: 1,
        // paddingLeft: windowHeightF / 10,
        width: 50,


    },
    horizontalLine: {
        width: "70%",
        borderTopWidth: 2,
        borderColor: "#00273314",
        marginTop: 6,
        // marginLeft: -65
    },
    monthNameView: {
        // width: "100%",
        position: "absolute",
        left: windowHeightF / 5,
        alignSelf: "flex-end",
        bottom: -12,
        height: windowHeightF / 1.3,
    },


    durationListTextView: {
        position: "absolute",
        bottom: -7,
        height: 44,
    },

    quarterlySepText: {
        // color: "#fff",
        fontSize: 10,
        paddingHorizontal: "25%",
        height: 60,
        marginTop: -4,
        alignSelf: "center",
        textAlignVertical: "center",
        width: 80,
    },
    quarterlySepText2: {
        // color: "#fff",
        fontSize: 14,
        paddingHorizontal: "25%",
        height: 30,
        alignSelf: "center",
        textAlignVertical: "center",
    },






});


