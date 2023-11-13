import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStylesPayments";


const Payments = () => {
    return (
        <View style={styles.paymentSection}>
            <LinearGradient
                style={styles.paymentParent}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Text style={[styles.payment, styles.paymentFlexBox]}>PAYMENT</Text>
                <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                    <View style={[styles.groupChild, styles.groupChildLayout]} />
                    <Text style={[styles.history, styles.text3Typo]}>HISTORY</Text>
                </View>
                <Text style={[styles.totalBalance, styles.paymentFlexBox]}>
                    TOTAL BALANCE
                </Text>
                <Text style={[styles.lastPaymentAdded, styles.paymentFlexBox]}>
                    LAST PAYMENT ADDED
                </Text>
                <Text style={[styles.text, styles.textTypo]}>₹1,78,054</Text>
                <Text style={styles.text1}>₹1,700</Text>
                <Image
                    style={[styles.iconCog, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/settings.png")}
                />
                <View style={styles.frameChild} />
                <View style={[styles.frameItem, styles.groupViewLayout]} />
                <LinearGradient
                    style={[styles.frameInner, styles.frameInnerLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector-7.png")}
                />

                <Text style={[styles.ashwanth, styles.text2Typo]}>ASHWANTH</Text>
                <Text style={[styles.text2, styles.text2Typo]}>₹1,700</Text>
                <Image
                    style={[styles.iconChevronCircleDown6, styles.groupParentLayout]}
                    contentFit="cover"
                    source={require("../assets/up.png")}
                />
            </LinearGradient>
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
                <Image
                    style={[styles.groupItem, styles.groupItemLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.a, styles.textFlexBox]}>A</Text>
            </View>
            <View style={[styles.groupParent, styles.groupParentLayout]}>
                <Image
                    style={[styles.groupIcon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/group.png")}
                />
                <Image
                    style={styles.groupInner}
                    contentFit="cover"
                    source={require("../assets/ellipse-2.png")}
                />
                <Text style={[styles.text3, styles.textFlexBox]}>1</Text>
            </View>

            <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <LinearGradient
                    style={[styles.rectangleLineargradient, styles.frameInnerLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={[styles.ramesh, styles.text5Typo]}>RAMESH</Text>
                <Text style={[styles.text5, styles.text5Typo]}>₹700</Text>
                <Image
                    style={[styles.iconChevronCircleDown, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/up.png")}
                />
                <View style={[styles.viewDetailsParent, styles.viewParentLayout]}>
                    <Text style={[styles.viewDetails, styles.textTypo]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <LinearGradient
                    style={[styles.rectangleLineargradient, styles.frameInnerLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={[styles.ramesh, styles.text5Typo]}>ARUN</Text>
                <Text style={[styles.text5, styles.text5Typo]}>₹25,000</Text>
                <Image
                    style={[styles.iconChevronCircleDown, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/down.png")}
                />
                <View style={[styles.viewDetailsParent, styles.viewParentLayout]}>
                    <Text style={[styles.viewDetails, styles.textTypo]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.groupView, styles.groupViewLayout]}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <LinearGradient
                    style={[styles.rectangleLineargradient, styles.frameInnerLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={[styles.ramesh, styles.text5Typo]}>RAKSHITH</Text>
                <Text style={[styles.text5, styles.text5Typo]}>₹50,000</Text>
                <Image
                    style={[styles.iconChevronCircleDown, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/up.png")}
                />
                <View style={[styles.viewDetailsParent, styles.viewParentLayout]}>
                    <Text style={[styles.viewDetails, styles.textTypo]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <LinearGradient
                    style={[styles.rectangleLineargradient, styles.frameInnerLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={[styles.ramesh, styles.text5Typo]}>ARJUN</Text>
                <Text style={[styles.text5, styles.text5Typo]}>₹2,456</Text>
                <Image
                    style={[styles.iconChevronCircleDown, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/down.png")}
                />
                <View style={[styles.viewDetailsParent, styles.viewParentLayout]}>
                    <Text style={[styles.viewDetails, styles.textTypo]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleParent2, styles.groupViewLayout]}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <LinearGradient
                    style={[styles.rectangleLineargradient, styles.frameInnerLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={[styles.ramesh, styles.text5Typo]}>ARJUN</Text>
                <Text style={[styles.text5, styles.text5Typo]}>₹2,456</Text>
                <Image
                    style={[styles.iconChevronCircleDown, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/up.png")}
                />
                <View style={[styles.viewDetailsParent, styles.viewParentLayout]}>
                    <Text style={[styles.viewDetails, styles.textTypo]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.viewDetailsParent3, styles.viewParentLayout]}>
                <Text style={[styles.viewDetails, styles.textTypo]}>VIEW DETAILS</Text>
                <Image
                    style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/right.png")}
                />
            </View>
            <View style={[styles.rectangleParent3, styles.groupViewLayout]}>
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <LinearGradient
                    style={[styles.rectangleLineargradient, styles.frameInnerLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={[styles.ramesh, styles.text5Typo]}>RAMESH</Text>
                <Text style={[styles.text5, styles.text5Typo]}>₹700</Text>
                <Image
                    style={[styles.iconChevronCircleDown, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/down.png")}
                />
                <View style={[styles.viewDetailsParent, styles.viewParentLayout]}>
                    <Text style={[styles.viewDetails, styles.textTypo]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    paymentFlexBox: {
        textAlign: "center",
        position: "absolute",
    },
    groupChildLayout: {
        height: 15,
        width: 49,
        position: "absolute",
    },
    text3Typo: {
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    textTypo: {
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        color: Color.black,
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    groupViewLayout: {
        height: 60,
        width: 327,
        position: "absolute",
    },
    frameInnerLayout: {
        height: 23,
        width: 106,
        borderWidth: 1,
        borderRadius: Border.br_11xl,
        borderColor: Color.black,
        borderStyle: "solid",
        backgroundColor: "transparent",
        position: "absolute",
    },
    text2Typo: {
        left: 76,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.black,
        position: "absolute",
    },
    groupItemLayout: {
        height: 36,
        width: 36,
        position: "absolute",
    },
    textFlexBox: {
        textAlign: "left",
        position: "absolute",
    },
    groupParentLayout: {
        height: "3.13%",
        position: "absolute",
    },
    iconPosition: {
        left: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    fillPosition: {
        bottom: "96.49%",
        position: "absolute",
    },
    text5Typo: {
        left: 60,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.black,
        position: "absolute",
    },
    viewParentLayout: {
        width: 84,
        height: 20,
        position: "absolute",
    },
    payment: {
        top: 50,
        fontSize: 18,
        color: Color.black,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 17,
    },
    groupChild: {
        borderRadius: 4,
        backgroundColor: Color.colorRoyalblue,
        left: 0,
        top: 0,
    },
    history: {
        top: 2,
        left: 4,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        position: "absolute",
    },
    rectangleParent: {
        top: 53,
        left: 103,
    },
    totalBalance: {
        top: 102,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 17,
    },
    lastPaymentAdded: {
        top: 110,
        left: 260,
        fontSize: 9,
        fontFamily: FontFamily.robotoRegular,
        color: Color.black,
        textAlign: "center",
    },
    text: {
        top: 132,
        fontSize: 20,
        letterSpacing: 0,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "300",
        //lineHeight: 20,
        textAlign: "center",
        left: 17,
        position: "absolute",
    },
    text1: {
        left: 291,
        fontSize: 13,
        top: 126,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.black,
        position: "absolute",
    },
    iconCog: {
        height: "2.63%",
        width: "5.83%",
        top: "6.25%",
        right: "27.78%",
        left: "78%",
        bottom: "91.13%",
        position: "absolute",
    },
    frameChild: {
        left: 278,
        borderRadius: 10,
        borderWidth: 0.5,
        width: 66,
        height: 20,
        borderColor: Color.black,
        borderStyle: "solid",
        top: 126,
        position: "absolute",
    },
    frameItem: {
        top: 225,
        borderWidth: 1,
        borderRadius: Border.br_11xl,
        width: 400,
        borderColor: Color.black,
        borderStyle: "solid",
        left: 16,
    },
    frameInner: {
        top: 244,
        left: 221,
    },
    vectorIcon: {
        marginLeft: -159,
        top: 188,
        left: "50%",
        width: 340,
        height: 1,
        position: "absolute",
    },
    ashwanth: {
        top: 234,
        fontSize: FontSize.size_3xs,
    },
    text2: {
        top: 254,
        fontSize: FontSize.size_5xl,
    },
    paymentParent: {
        width: 360,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
        overflow: "hidden",
        height: 800,
    },
    groupItem: {
        left: 0,
        top: 0,
    },
    a: {
        top: 7,
        fontSize: 18,
        color: Color.colorRoyalblue,
        width: 11,
        height: 19,
        left: 10,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    ellipseParent: {
        top: 43,
        left: 345,
    },
    groupIcon: {
        height: "80%",
        width: "80.97%",
        top: "20%",
        right: "19.03%",
        bottom: "0%",
    },
    groupInner: {
        width: 8,
        height: 8,
        left: 11,
        top: 0,
        position: "absolute",
    },
    text3: {
        left: 13,
        fontSize: 6,
        width: 3,
        height: 6,
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        top: 0,
    },
    groupParent: {
        width: "5.28%",
        top: "6.25%",
        right: "18.61%",
        left: "80%",
        bottom: "91.13%",
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
    fill: {
        height: "1.5%",
        width: "1.85%",
        top: "2.01%",
        right: "5.37%",
        left: "92.78%",
        borderRadius: 1,
        backgroundColor: Color.materialThemeSysLightOnSurface,
    },
    text4: {
        top: 13,
        opacity: 0.6,
        left: 16,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        color: Color.black,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
    },
    rectangleView: {
        borderWidth: 1,
        borderRadius: Border.br_11xl,
        width: 327,
        borderColor: Color.black,
        borderStyle: "solid",
        left: 0,
        top: 0,
    },
    rectangleLineargradient: {
        top: 19,
        left: 205,
    },
    ramesh: {
        top: 9,
        fontSize: FontSize.size_3xs,
    },
    text5: {
        top: 29,
        fontSize: FontSize.size_5xl,
    },
    iconChevronCircleDown: {
        height: "41.67%",
        width: "7.65%",
        top: "28.33%",
        right: "86.54%",
        bottom: "30%",
        left: "5.81%",
        position: "absolute",
    },
    viewDetails: {
        letterSpacing: 0,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        textAlign: "center",
        left: 17,
        position: "absolute",
        fontSize: FontSize.size_3xs,
        top: 0,
    },
    iconAngleDoubleRight: {
        height: "36.14%",
        width: "10.71%",
        top: "30%",
        right: "89.29%",
        bottom: "33.86%",
    },
    viewDetailsParent: {
        top: 21,
        left: 216,
    },
    rectangleGroup: {
        top: 704,
        left: 16,
    },
    rectangleContainer: {
        top: 464,
        left: 16,
    },
    groupView: {
        top: 544,
        left: 16,
    },
    rectangleParent1: {
        top: 384,
        left: 16,
    },
    rectangleParent2: {
        top: 624,
        left: 16,
    },
    viewDetailsParent3: {
        top: 246,
        left: 232,
    },
    rectangleParent3: {
        top: 304,
        left: 16,
    },
    iconChevronCircleDown6: {
        width: "6.94%",
        top: "30.5%",
        right: "83.33%",
        bottom: "66.63%",
        left: "9.72%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    paymentSection: {
        //backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: 800,
    },
});


export default Payments;
