import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Track = () => {
    return (
        <View style={[styles.trackSectioon, styles.trackSectioonLayout]}>
            <LinearGradient
                style={[
                    styles.screenshot202310302206181Parent,
                    styles.frameChildPosition,
                ]}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Image
                    style={styles.screenshot202310302206181}
                    contentFit="cover"
                    source={require("../assets/screenshot-20231030-220618-1.png")}
                />
                <LinearGradient
                    style={[styles.frameChild, styles.frameChildPosition]}
                    locations={[0, 1]}
                    colors={["#c0ddff", "rgba(217, 217, 217, 0)"]}
                />
                <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/vector-8.png")}
                />
                <View style={[styles.ellipseParent, styles.groupLayout]}>
                    <Image
                        style={[styles.groupChild, styles.groupPosition]}
                        contentFit="cover"
                        source={require("../assets/ellipse-4.png")}
                    />
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                    <Image
                        style={[styles.groupItem, styles.groupPosition]}
                        contentFit="cover"
                        source={require("../assets/ellipse-41.png")}
                    />
                    <Text style={styles.text}>3</Text>
                </View>
                <View style={[styles.ellipseContainer, styles.groupLayout]}>
                    <Image
                        style={[styles.groupChild, styles.groupPosition]}
                        contentFit="cover"
                        source={require("../assets/ellipse-42.png")}
                    />
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={[styles.groupView, styles.groupLayout]}>
                    <Image
                        style={[styles.groupChild, styles.groupPosition]}
                        contentFit="cover"
                        source={require("../assets/ellipse-43.png")}
                    />
                    <Text style={styles.text}>4</Text>
                </View>
                <View style={[styles.rectangleParent, styles.groupParentLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.ramesh, styles.rameshTypo]}>RAMESH</Text>
                    <Image
                        style={styles.groupIcon}
                        contentFit="cover"
                        source={require("../assets/group-45847.png")}
                    />
                </View>
                <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.ashwanth, styles.rameshTypo]}>ASHWANTH</Text>
                    <Image
                        style={styles.groupIcon}
                        contentFit="cover"
                        source={require("../assets/group-458471.png")}
                    />
                </View>
                <Image
                    style={[styles.frameInner, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-5.png")}
                />
                <Image
                    style={[styles.frameChild1, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-6.png")}
                />
                <Text style={[styles.text4, styles.textTypo]}>1</Text>
                <Text style={[styles.text5, styles.textTypo]}>2</Text>
                <Text style={[styles.mahentashKumar, styles.rameshTypo]}>
                    Mahentash Kumar
                </Text>
                <Text style={[styles.mohanShinde, styles.rameshTypo]}>
                    Mohan Shinde
                </Text>
            </LinearGradient>
            <Text
                style={[styles.no11348th, styles.no11348thTypo]}
            >{`No. 11/34, 8th Cross, Manjunathnagar,
Magadi Road, Bangalore- 23`}</Text>
            <Text
                style={[styles.no11348th1, styles.no11348thTypo]}
            >{`No. 11/34, 8th Cross, Manjunathnagar,
Magadi Road, Bangalore- 23`}</Text>
            <View style={[styles.groupParent, styles.groupParentLayout]}>
                <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.ashwanth, styles.rameshTypo]}>GURURAJ</Text>
                    <Image
                        style={styles.groupIcon}
                        contentFit="cover"
                        source={require("../assets/group-458472.png")}
                    />
                </View>
                <Image
                    style={[styles.groupChild7, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-7.png")}
                />
                <Text style={[styles.text6, styles.textTypo]}>3</Text>
                <Text style={[styles.tanishPrasad, styles.nithinReddyTypo]}>
                    Tanish Prasad
                </Text>
                <Text
                    style={[styles.no11348th2, styles.no11348thTypo]}
                >{`No. 11/34, 8th Cross, Manjunathnagar,
Magadi Road, Bangalore- 23`}</Text>
            </View>
            <View style={[styles.groupContainer, styles.groupParentLayout]}>
                <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.ashwanth, styles.rameshTypo]}>TANYA</Text>
                    <Image
                        style={styles.groupIcon}
                        contentFit="cover"
                        source={require("../assets/group-458473.png")}
                    />
                </View>
                <Image
                    style={[styles.groupChild7, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-71.png")}
                />
                <Text style={[styles.text6, styles.textTypo]}>4</Text>
                <Text style={[styles.nithinReddy, styles.nithinReddyTypo]}>
                    Nithin Reddy
                </Text>
                <Text
                    style={[styles.no11348th2, styles.no11348thTypo]}
                >{`No. 11/34, 8th Cross, Manjunathnagar,
Magadi Road, Bangalore- 23`}</Text>
            </View>
            <Text style={[styles.deliveryPartner, styles.deliveryTypo]}>
                DELIVERY PARTNER
            </Text>
            <Text style={[styles.deliveryPartner1, styles.deliveryTypo]}>
                DELIVERY PARTNER
            </Text>
            <Text style={[styles.deliveryPartner2, styles.deliveryTypo]}>
                DELIVERY PARTNER
            </Text>
            <Text style={[styles.deliveryPartner3, styles.deliveryTypo]}>
                DELIVERY PARTNER
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    trackSectioonLayout: {
        height: 800,
        overflow: "hidden",
    },
    frameChildPosition: {
        width: 360,
        backgroundColor: "transparent",
        left: 0,
        position: "absolute",
    },
    groupLayout: {
        height: 20,
        width: 14,
        position: "absolute",
    },
    groupPosition: {
        height: 28,
        left: -7,
        top: 0,
        position: "absolute",
    },
    groupParentLayout: {
        height: 60,
        width: 327,
    },
    rectangleBorder: {
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        borderRadius: Border.br_11xl,
        position: "absolute",
    },
    rameshTypo: {
        textAlign: "center",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        position: "absolute",
    },
    frameChildLayout: {
        height: 31,
        width: 31,
        position: "absolute",
    },
    textTypo: {
        fontSize: FontSize.size_lg,
        textAlign: "center",
        letterSpacing: 0,
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        position: "absolute",
    },
    no11348thTypo: {
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_7xs,
        color: Color.colorBlack,
        textAlign: "left",
        position: "absolute",
    },
    nithinReddyTypo: {
        top: 21,
        textAlign: "center",
        color: Color.colorBlack,
        letterSpacing: 0,
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        position: "absolute",
    },
    deliveryTypo: {
        fontFamily: FontFamily.robotoBold,
        fontWeight: "600",
        left: 231,
        fontSize: FontSize.size_7xs,
        color: Color.colorBlack,
        textAlign: "left",
        position: "absolute",
    },
    screenshot202310302206181: {
        top: 39,
        width: 441,
        height: 374,
        left: 0,
        position: "absolute",
    },
    frameChild: {
        top: 365,
        borderRadius: 41,
        height: 435,
        backgroundColor: "transparent",
    },
    frameItem: {
        top: 376,
        width: 42,
        height: 5,
        left: 159,
        position: "absolute",
    },
    groupChild: {
        width: 28,
    },
    text: {
        left: 4,
        fontSize: FontSize.size_5xs,
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        top: 0,
        position: "absolute",
    },
    ellipseParent: {
        top: 160,
        left: 78,
    },
    groupItem: {
        width: 24,
    },
    ellipseGroup: {
        top: 137,
        left: 343,
    },
    ellipseContainer: {
        top: 248,
        left: 159,
    },
    groupView: {
        top: 332,
        left: 324,
    },
    rectangleView: {
        height: 60,
        width: 327,
        left: 0,
        top: 0,
    },
    rectangleLineargradient: {
        top: 19,
        left: 172,
        width: 139,
        height: 23,
        backgroundColor: "transparent",
    },
    ramesh: {
        top: 12,
        left: 55,
    },
    groupIcon: {
        height: "12.05%",
        width: "2.75%",
        top: "45%",
        right: "7.34%",
        bottom: "42.95%",
        left: "89.91%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    rectangleParent: {
        top: 413,
        left: 16,
        width: 327,
        position: "absolute",
    },
    ashwanth: {
        top: 11,
        left: 55,
    },
    rectangleGroup: {
        top: 493,
        left: 16,
        width: 327,
        position: "absolute",
    },
    frameInner: {
        top: 427,
        left: 33,
        height: 31,
        width: 31,
    },
    frameChild1: {
        top: 507,
        left: 33,
        height: 31,
        width: 31,
    },
    text4: {
        top: 433,
        left: 43,
        fontSize: FontSize.size_lg,
    },
    text5: {
        top: 513,
        left: 43,
        fontSize: FontSize.size_lg,
    },
    mahentashKumar: {
        top: 434,
        left: 209,
    },
    mohanShinde: {
        top: 514,
        left: 218,
    },
    screenshot202310302206181Parent: {
        backgroundColor: "transparent",
        top: 0,
        overflow: "hidden",
        height: 800,
    },
    no11348th: {
        top: 442,
        left: 71,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_7xs,
    },
    no11348th1: {
        top: 522,
        left: 71,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_7xs,
    },
    rectangleContainer: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    groupChild7: {
        top: 14,
        left: 17,
    },
    text6: {
        top: 20,
        left: 27,
    },
    tanishPrasad: {
        left: 203,
    },
    no11348th2: {
        top: 29,
        left: 55,
    },
    groupParent: {
        top: 573,
        left: 16,
        width: 327,
        position: "absolute",
    },
    nithinReddy: {
        left: 206,
    },
    groupContainer: {
        top: 653,
        left: 16,
        width: 327,
        position: "absolute",
    },
    deliveryPartner: {
        top: 422,
    },
    deliveryPartner1: {
        top: 502,
    },
    deliveryPartner2: {
        top: 583,
    },
    deliveryPartner3: {
        top: 661,
    },
    trackSectioon: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        overflow: "hidden",
    },
});

export default Track;
