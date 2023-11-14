import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStylesTD";

const TrackDetail = () => {
    const buttonclicked = () => {

        alert('Button clicked!');
    };
    return (
        <View style={[styles.trackSectioon1, styles.groupParentLayout]}>
            <LinearGradient
                style={[styles.groupParent, styles.groupPosition]}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                    <View style={[styles.groupChild, styles.groupBorder]} />
                    <Image
                        style={styles.screenshot202310302206182}
                        contentFit="cover"
                        source={require("../assets/map.png")}
                    />
                    <LinearGradient
                        style={[styles.groupItem, styles.groupBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.ashwanth, styles.addressTypo]}>ASHWANTH</Text>
                    <Text style={[styles.address, styles.addressTypo]}>ADDRESS:</Text>
                    <Image
                        style={[styles.groupInner, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/upup.png")}
                    />
                </View>
                <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-6.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>1</Text>
                <Text style={[styles.mohanShinde, styles.addressTypo]}>
                    Mohan Shinde
                </Text>
                <TouchableOpacity onPress={buttonclicked} style={[styles.button, styles.buttonFlexBox]}>
                    <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                        <Text style={[styles.labelText, styles.textTypo]}>
                            DOWNLOAD RECIPT
                        </Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
            <Text
                style={[styles.no11348th, styles.no11348thFlexBox]}
            >{`No. 11/34, 8th Cross, Manjunathnagar,
Magadi Road, Bangalore- 23`}</Text>
            <Text style={[styles.deliveryPartner, styles.no11348thFlexBox]}>
                DELIVERY PARTNER
            </Text>
            <Image
                style={[styles.iconTruck, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/truck.png")}
            />
            <Image
                style={[styles.iconLiveRedSign, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/live.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    groupParentLayout: {
        height: 800,
        overflow: "hidden",
    },
    groupPosition: {
        left: 0,
        top: 0,
    },
    groupChildLayout: {
        height: 502,
        width: 420,
    },
    groupBorder: {
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        borderRadius: Border.br_11xl,
        position: "absolute",
    },
    addressTypo: {
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.size_3xs,
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    textTypo: {
        color: Color.colorWhite,
        textAlign: "center",
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
    },
    buttonFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    no11348thFlexBox: {
        textAlign: "left",
        color: Color.colorBlack,
        position: "absolute",
    },
    groupChild: {
        height: 502,
        width: 340,
        left: 0,
        top: 0,
    },
    screenshot202310302206182: {
        marginLeft: -148.5,
        top: 18,
        left: "43%",
        borderRadius: 34,
        width: 297,
        height: 364,
        position: "absolute",
    },
    groupItem: {
        top: 461,
        left: 172,
        width: 139,
        height: 23,
        backgroundColor: "transparent",
    },
    ashwanth: {
        top: 463,
        left: 54,
    },
    address: {
        top: 413,
        left: 48,
    },
    groupInner: {
        height: "1.79%",
        width: "2.21%",
        top: "93.25%",
        right: "7.61%",
        bottom: "4.96%",
        left: "90.18%",
    },
    rectangleParent: {
        top: 51,
        left: 16,
        position: "absolute",
    },
    frameChild: {
        top: 507,
        left: 33,
        width: 31,
        height: 31,
        position: "absolute",
    },
    text: {
        top: 513,
        left: 43,
        fontSize: 18,
        position: "absolute",
    },
    mohanShinde: {
        top: 514,
        left: 218,
    },
    labelText: {
        fontSize: FontSize.m3LabelLarge_size,
    },
    stateLayer: {
        alignSelf: "stretch",
        flexDirection: "row",
        paddingHorizontal: Padding.p_5xl,
        paddingVertical: Padding.p_3xs,
        flex: 1,
    },
    button: {
        top: 572,
        left: 26,
        borderRadius: Border.br_81xl,
        backgroundColor: "#3162bf",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        width: 335,
        height: 40,
        position: "absolute",
        overflow: "hidden",
    },
    groupParent: {
        width: 360,
        backgroundColor: "transparent",
        position: "absolute",
        overflow: "hidden",
        height: 800,
    },
    no11348th: {
        top: 460,
        left: 134,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_3xs,
        textAlign: "left",
    },
    deliveryPartner: {
        top: 502,
        left: 231,
        fontSize: 6,
        fontWeight: "600",
        fontFamily: FontFamily.robotoBold,
    },
    iconTruck: {
        height: "2.7%",
        width: "6.94%",
        top: "35.38%",
        right: "47.78%",
        bottom: "61.93%",
        left: "45.28%",
    },
    iconLiveRedSign: {
        height: "2.25%",
        width: "14.47%",
        top: "9.38%",
        right: "42.75%",
        bottom: "88.38%",
        left: "42.78%",
    },
    trackSectioon1: {
        backgroundColor: Color.colorWhite,
        width: "100%",
        overflow: "hidden",
        flex: 1,
    },
});

export default TrackDetail;
