//import liraries
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


// create a component
const HomeScreen = () => {
    return (
        <View style={styles.home}>
            <LinearGradient
                style={[styles.homeChild, styles.homeChildPosition2]}
                locations={[0, 1]}
                colors={["#fff", "#3162bf"]}
            />
            <LinearGradient
                style={[styles.ellipseParent, styles.homeChildPosition2]}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Image
                    style={[styles.frameChild, styles.frameChildPosition]}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.a, styles.issueTypoa]}>A</Text>
                <Image
                    style={[styles.groupIcon, styles.iconLayoutnotify]}
                    contentFit="cover"
                    source={require("../assets/group.png")}
                />
                <Image
                    style={styles.frameItemnotify}
                    contentFit="cover"
                    source={require("../assets/ellipse-2.png")}
                />
                <Text style={styles.textnotify}>1</Text>
                <Image
                    style={styles.frameIcon}
                    contentFit="cover"
                    source={require("../assets/frame.png")}
                />
                <Text style={[styles.welcome, styles.ashwanthTypo]}>WELCOME</Text>
                <Text style={[styles.ashwanthRKumar, styles.ashwanthTypo]}>
                    Ashwanth R Kumar
                </Text>
                <View style={[styles.frameInner, styles.frameInnerPosition]} />
                <Image
                    style={[styles.vectorIcon, styles.frameInnerPosition]}
                    contentFit="cover"
                    source={require("../assets/vector-1.png")}
                />
                <Image
                    style={styles.frameChild1}
                    contentFit="cover"
                    source={require("../assets/vector-3.png")}
                />
                <Text style={[styles.moneyIn, styles.moneyTypo]}>MONEY IN</Text>
                <Text style={[styles.materials, styles.tasksTypo]}>MATERIALS</Text>
                <Text style={[styles.tasks, styles.tasksTypo]}>TASKS</Text>
                <Text style={[styles.moneyOut, styles.moneyTypo]}>MONEY OUT</Text>
                <Text style={[styles.text1, styles.textTypo2]}>₹ 50,968</Text>
                <Text style={[styles.text2, styles.textTypo2]}>₹ 45,474</Text>
                <Image
                    style={[styles.iconDownload, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/download.png")}
                />
                <Image
                    style={[styles.iconDownload1, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/upload.png")}
                />
                <Image
                    style={[styles.iconWheelBarrow, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/wheel.png")}
                />
                <Image
                    style={[styles.iconTasks, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/task.png")}
                />
            </LinearGradient>


            <View style={[styles.fill, styles.fillPosition]} />

            <View style={[styles.homeItem, styles.homeLayout]} />
            <View style={[styles.homeInner, styles.homeLayout]} />
            <Text style={[styles.recentActivity, styles.ashwanthTypo]}>
                RECENT ACTIVITY
            </Text>
            <Text style={[styles.ashwanth, styles.ashwanthTypo]}>Ashwanth</Text>
            <Text style={[styles.ashwanth1, styles.ashwanthTypo]}>Ashwanth</Text>
            <Text style={[styles.remaining, styles.remainingTypo]}>Remaining</Text>
            <Text style={[styles.remaining1, styles.remainingTypo]}>Remaining</Text>
            <Text
                style={[styles.no11348th, styles.no11348thTypo]}
            >{`No. 11/34, 8th Cross, Manjunathnagar,
        Magadi Road, Bangalore- 23`}</Text>
            <Text
                style={[styles.no11348th1, styles.no11348thTypo]}
            >{`No. 11/34, 8th Cross, Manjunathnagar,
        Magadi Road, Bangalore- 23`}</Text>
            <Text style={[styles.type, styles.timeTypo]}>Type</Text>
            <Text style={[styles.type1, styles.type1Position]}>Type</Text>
            <Text style={[styles.request, styles.timeTypo]}>Request</Text>
            <Text style={[styles.request1, styles.type1Position]}>Request</Text>
            <Text style={[styles.text4, styles.pmTypo]}>70</Text>
            <Text style={[styles.text5, styles.pm1Typo]}>70</Text>
            <Text style={[styles.pm, styles.pmTypo]}>28-10-2023 15:06 PM</Text>
            <Text style={[styles.pm1, styles.pm1Typo]}>28-10-2023 15:06 PM</Text>
            <Text style={[styles.quantity, styles.timeTypo]}>Quantity</Text>
            <Text style={[styles.quantity1, styles.type1Typo]}>Quantity</Text>
            <Text style={[styles.time, styles.timeTypo]}>Time</Text>
            <Text style={[styles.time1, styles.type1Typo]}>Time</Text>
            <Text style={[styles.request2, styles.issueTypo]}>Request</Text>
            <Text style={[styles.request3, styles.issue1Typo]}>Request</Text>
            <Text style={[styles.issue, styles.issueTypo]}>Issue</Text>
            <Text style={[styles.issue1, styles.issue1Typo]}>Issue</Text>
            <View style={[styles.rectangleView, styles.homeChild2Layout]} />
            <View style={[styles.homeChild1, styles.homeChildLayout1]} />
            <View style={[styles.homeChild2, styles.homeChild2Layout]} />
            <View style={[styles.homeChild3, styles.homeChildLayout1]} />
            <Text style={[styles.text6, styles.textTypo1]}>70</Text>
            <Text style={[styles.text7, styles.textTypo]}>70</Text>
            <Text style={[styles.text8, styles.textTypo1]}>0</Text>
            <Text style={[styles.text9, styles.textTypo]}>0</Text>
            <Image
                style={[styles.homeChild4, styles.homeChildPosition1]}
                contentFit="cover"
                source={require("../assets/vector-3.png")}
            />
            <Image
                style={[styles.homeChild5, styles.homeChildPosition]}
                contentFit="cover"
                source={require("../assets/vector-5.png")}
            />
            <Image
                style={[styles.homeChild6, styles.homeChildPosition1]}
                contentFit="cover"
                source={require("../assets/vector-4.png")}
            />
            <Image
                style={[styles.homeChild7, styles.homeChildPosition]}
                contentFit="cover"
                source={require("../assets/vector-6.png")}
            />
            <View style={[styles.homeChild8, styles.homeChildLayout]} />
            <View style={[styles.homeChild9, styles.text11Position]} />
            <Text style={[styles.issue2, styles.issueTypo1]}>ISSUE</Text>
            <Text style={[styles.issue3, styles.issueTypo1]}>ISSUE</Text>
            <Text style={[styles.text10, styles.text10Position]}>70</Text>
            <Text style={[styles.text11, styles.text11Position]}>70</Text>
            <Image
                style={[styles.ellipseIcon, styles.frameChildPosition1]}
                contentFit="cover"
                source={require("../assets/ellipse-3.png")}
            />
            <Image
                style={[styles.iconPlus, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/plus.png")}
            />
        </View>
    );

};

// define your styles
const styles = StyleSheet.create({
    homeChildPosition2: {
        backgroundColor: "transparent",
        width: '100%',
        left: 0,
        position: "absolute",
    },
    frameChildPosition: {
        left: 350,
        position: "absolute",
    },
    frameChildPosition1: {
        left: 350,
        position: "absolute",
    },
    issueTypo1: {
        color: Color.colorRoyalblue,
        textAlign: "left",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "500",
        position: "absolute",
    },
    issueTypoa: {
        color: Color.colorRoyalblue,
        left: 362,
        fontSize: 15,
        fontFamily: FontFamily.robotoBold,
    },
    iconLayout1: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    iconLayoutnotify: {
        left: 320,
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    ashwanthTypo: {
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    frameInnerPosition: {
        height: 145,
        left: "50%",
        top: 108,
        position: "absolute",
    },
    moneyTypo: {
        fontSize: FontSize.size_3xs,
        top: 151,
        textAlign: "center",
        color: Color.black,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    tasksTypo: {
        top: 211,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.black,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo2: {
        top: 131,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    iconLayout: {
        bottom: "41.8%",
        top: "43.45%",
        width: "11.89%",
        height: "14.75%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    fillPosition: {
        bottom: "96.49%",
        position: "absolute",
    },
    text3Clr: {
        color: Color.black,
        left: 16,
    },
    homeLayout: {
        height: 199,
        width: 325,
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_smi,
        left: "50%",
        position: "absolute",
    },
    remainingTypo: {
        fontSize: FontSize.size_5xs,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    no11348thTypo: {
        color: Color.colorLightsteelblue,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_7xs,
        textAlign: "left",
        position: "absolute",
    },
    timeTypo: {
        fontSize: FontSize.size_4xs,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
    },
    type1Position: {
        left: 54,
        fontSize: FontSize.size_4xs,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
    },
    pmTypo: {
        top: 429,
        fontSize: FontSize.size_4xs,
        fontFamily: FontFamily.robotoRegular,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
    },
    pm1Typo: {
        top: 651,
        fontSize: FontSize.size_4xs,
        fontFamily: FontFamily.robotoRegular,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
    },
    type1Typo: {
        top: 622,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    issueTypo: {
        top: 369,
        fontSize: FontSize.size_5xs,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    issue1Typo: {
        top: 591,
        fontSize: FontSize.size_5xs,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    homeChild2Layout: {
        height: 29,
        width: 28,
        borderRadius: Border.br_9xs,
        top: 335,
        position: "absolute",
        backgroundColor: Color.colorWhite,
    },
    homeChildLayout1: {
        top: 557,
        height: 29,
        width: 28,
        borderRadius: Border.br_9xs,
        position: "absolute",
        backgroundColor: Color.colorWhite,
    },
    textTypo1: {
        fontSize: FontSize.size_smi,
        top: 342,
        textAlign: "center",
        color: Color.colorRoyalblue,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo: {
        top: 564,
        fontSize: FontSize.size_smi,
        textAlign: "center",
        color: Color.colorRoyalblue,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    homeChildPosition1: {
        width: 254,
        marginLeft: -145,
        height: 1,
        left: "50%",
        position: "absolute",
    },
    homeChildPosition: {
        marginLeft: -145,
        width: 254,
        height: 1,
        left: "50%",
        position: "absolute",
    },
    homeChildLayout: {
        height: 26,
        width: 72,
        backgroundColor: Color.colorGainsboro_100,
        borderRadius: Border.br_8xs,
    },
    text11Position: {
        top: 694,
        position: "absolute",
    },
    text10Position: {
        top: 472,
        position: "absolute",
    },
    homeChild: {
        top: 593,
        height: 485,
    },
    frameChild: {
        width: 36,
        height: 36,
        top: 43,
    },
    a: {
        top: 50,
        left: 318,
        fontSize: 20,
        width: 11,
        height: 19,
        textAlign: "left",
    },
    groupIcon: {
        height: "6.9%",
        width: "4.27%",
        top: "17.59%",
        right: "18.5%",
        bottom: "75.52%",
        left: "77.22%",
        position: "absolute",
    },
    frameItem: {
        width: 8,
        height: 8,
        left: 289,
        top: 46,
        position: "absolute",
    },
    frameItemnotify: {
        width: 8,
        height: 8,
        left: 335,
        top: 46,
        position: "absolute",
    },
    text: {
        left: 291,
        width: 3,
        height: 6,
        color: Color.colorWhite,
        fontSize: FontSize.size_7xs,
        top: 46,
        textAlign: "left",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textnotify: {
        left: 337,
        width: 3,
        height: 6,
        color: Color.colorWhite,
        fontSize: FontSize.size_7xs,
        top: 46,
        textAlign: "left",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    frameIcon: {
        top: 52,
        left: 285,
        width: 23,
        height: 18,
        position: "absolute",
        overflow: "hidden",
    },
    welcome: {
        fontSize: 16,
        color: Color.black,
        left: 16,
        top: 43,
    },
    ashwanthRKumar: {
        top: 65,
        fontSize: 12,
        color: Color.black,
        left: 16,
    },
    frameInner: {
        borderRadius: 17,
        backgroundColor: "#eeecec",
        borderStyle: "solid",
        borderColor: "#dadada",
        borderWidth: 1,
        width: 325,
        marginLeft: -165,
        height: 145,
        left: "50%",
        top: 108,
    },
    vectorIcon: {
        marginLeft: -0.25,
        width: 1,
        height: 145,
        left: "50%",
        top: 108,
    },
    frameChild1: {
        top: 180,
        height: 1,
        width: 295,
        left: "50%",
        marginLeft: -147,
        position: "absolute",
    },
    moneyIn: {
        left: 110,
    },
    materials: {
        left: 111,
    },
    tasks: {
        left: 260,
    },
    moneyOut: {
        left: 260,
    },
    text1: {
        color: "#3cbb00",
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        left: 110,
    },
    text2: {
        color: "#eb2828",
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        left: 260,
    },
    iconDownload: {
        right: "73.11%",
        left: "15%",
    },
    iconDownload1: {
        right: "31.73%",
        left: "54%",
    },
    iconWheelBarrow: {
        height: "9.66%",
        width: "7.78%",
        top: "70%",
        right: "75%",
        bottom: "20.34%",
        left: "17.22%",
        position: "absolute",
    },
    iconTasks: {
        height: "7.27%",
        width: "6.94%",
        top: "71.03%",
        right: "34.72%",
        bottom: "21.69%",
        left: "56%",
        position: "absolute",
    },
    ellipseParent: {
        top: 0,
        height: 290,
        overflow: "hidden",
    },
    wifiIcon: {
        height: "1.42%",
        width: "4.07%",
        top: "1.93%",
        right: "14.26%",
        bottom: "96.66%",
        left: "81.67%",
        position: "absolute",
    },
    dataIcon: {
        height: "1.55%",
        width: "3.44%",
        top: "1.96%",
        right: "10%",
        left: "86.56%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },

    text3: {
        top: 13,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        opacity: 0.6,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "left",
        position: "absolute",
    },
    homeItem: {
        borderRadius: 17,

        borderStyle: "solid",

        borderWidth: 1,
        width: 500,
        marginLeft: -165,
        height: 145,
        left: "50%",
        top: 316,
        //marginLeft: -165,
        //width: 300,
        //top: 316,
    },
    homeInner: {
        marginLeft: -165,
        top: 538,
        borderWidth: 1,
    },
    recentActivity: {
        top: 282,
        left: 34,
        color: "#a4a4a4",
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
    },
    ashwanth: {
        top: 340,
        left: 52,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.colorWhite,
    },
    ashwanth1: {
        top: 562,
        left: 53,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.colorWhite,
    },
    remaining: {
        top: 491,
        left: 253,
    },
    remaining1: {
        top: 713,
        left: 254,
    },
    no11348th: {
        top: 359,
        left: 51,
    },
    no11348th1: {
        top: 581,
        left: 53,
    },
    type: {
        top: 400,
        fontSize: FontSize.size_4xs,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 53,
    },
    type1: {
        top: 622,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    request: {
        top: 427,
        fontFamily: FontFamily.robotoRegular,
        left: 53,
    },
    request1: {
        top: 649,
        fontFamily: FontFamily.robotoRegular,
    },
    text4: {
        left: 166,
    },
    text5: {
        left: 167,
    },
    pm: {
        left: 221,
    },
    pm1: {
        left: 222,
    },
    quantity: {
        left: 154,
        top: 400,
        fontSize: FontSize.size_4xs,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    quantity1: {
        left: 155,
        fontSize: FontSize.size_4xs,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
    },
    time: {
        top: 400,
        fontSize: FontSize.size_4xs,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 254,
    },
    time1: {
        left: 255,
        fontSize: FontSize.size_4xs,
        color: Color.colorWhite,
        textAlign: "left",
        position: "absolute",
    },
    request2: {
        left: 238,
    },
    request3: {
        left: 239,
    },
    issue: {
        left: 283,
    },
    issue1: {
        left: 284,
    },
    rectangleView: {
        left: 239,
    },
    homeChild1: {
        left: 240,
    },
    homeChild2: {
        left: 279,
    },
    homeChild3: {
        left: 280,
    },
    text6: {
        left: 245,
    },
    text7: {
        left: 246,
    },
    text8: {
        left: 288,
    },
    text9: {
        left: 289,
    },
    homeChild4: {
        top: 418,
        left: -50,
    },
    homeChild5: {
        top: 640,
    },
    homeChild6: {
        top: 449,
    },
    homeChild7: {
        top: 671,
    },
    homeChild8: {
        top: 472,
        position: "absolute",
        left: 52,
    },
    homeChild9: {
        height: 26,
        width: 72,
        backgroundColor: Color.colorGainsboro_100,
        borderRadius: Border.br_8xs,
        left: 53,
    },
    issue2: {
        top: 477,
        left: 68,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "left",
    },
    issue3: {
        top: 699,
        left: 69,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "left",
    },
    text10: {
        left: 264,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.colorWhite,
        textAlign: "left",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    text11: {
        left: 265,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.colorWhite,
        textAlign: "left",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    ellipseIcon: {
        top: 696,
        width: 39,
        height: 39,
    },
    iconPlus: {
        height: "2.1%",
        width: "4.67%",
        top: "96.5%",
        right: "6.86%",
        bottom: "9.46%",
        left: "92%",
        position: "absolute",
    },
    home: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

//make this component available to the app
export default HomeScreen;
