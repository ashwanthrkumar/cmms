import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStylesSettings";

const Settings = () => {
    return (
        <LinearGradient
            style={styles.settings}
            locations={[0, 1]}
            colors={["#fff", "#23639f"]}
        >
            <LinearGradient
                style={styles.settingsChild}
                locations={[0, 1]}
                colors={["#dfeaf6", "#6ea4e2"]}
            />
            <View style={[styles.settingsItem, styles.settingsLayout]} />
            <View style={[styles.settingsInner, styles.settingsLayout]} />
            <View style={[styles.rectangleView, styles.settingsLayout]} />
            <Text style={[styles.profile, styles.profileTypo]}>PROFILE</Text>
            <Text style={[styles.settings1, styles.profileTypo]}>SETTINGS</Text>
            <Text style={[styles.notifications, styles.profileTypo]}>
                NOTIFICATIONS
            </Text>
            <View style={[styles.settingsChild1, styles.settingsChildPosition1]} />
            <View style={[styles.settingsChild2, styles.settingsChildPosition1]} />
            <View style={[styles.settingsChild3, styles.settingsChildPosition1]} />
            <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/line.png")}
            />
            <Image
                style={[styles.settingsChild4, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/line.png")}
            />
            <Image
                style={[styles.settingsChild5, styles.settingsChildPosition]}
                contentFit="cover"
                source={require("../assets/line.png")}
            />
            <Image
                style={[styles.settingsChild6, styles.settingsChildPosition]}
                contentFit="cover"
                source={require("../assets/line.png")}
            />
            <Text style={[styles.personalInformation, styles.faqTypo]}>
                Personal Information
            </Text>
            <Text style={[styles.resetPassword, styles.faqTypo]}>Reset Password</Text>
            <Text style={[styles.remainders, styles.faqTypo]}>Remainders</Text>
            <Text style={[styles.privacy, styles.faqTypo]}>Privacy</Text>
            <Text style={[styles.faq, styles.faqTypo]}>FAQ</Text>
            <Text style={[styles.about, styles.faqTypo]}>About</Text>
            <Text style={[styles.logOut, styles.faqTypo]}>Log Out</Text>
            <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/right.png")}
            />
            <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/right.png")}
            />
            <Image
                style={[styles.vectorIcon3, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/right.png")}
            />
            <Image
                style={[styles.vectorIcon4, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/right.png")}
            />
            <Image
                style={[styles.vectorIcon5, styles.vectorIconLayout1]}
                contentFit="cover"
                source={require("../assets/right.png")}
            />
            <Image
                style={[styles.vectorIcon6, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/right.png")}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    settingsLayout: {
        height: 21,
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
        left: 36,
        position: "absolute",
    },
    profileTypo: {
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.size_sm,
        position: "absolute",
    },
    settingsChildPosition1: {
        width: 318,
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_3xs,
        left: "50%",
        marginLeft: -159,
        position: "absolute",
    },
    vectorIconPosition: {
        height: 1,
        width: 281,
        marginLeft: -140,
        left: "50%",
        position: "absolute",
    },
    settingsChildPosition: {
        marginLeft: -141,
        height: 1,
        width: 281,
        left: "50%",
        position: "absolute",
    },
    faqTypo: {
        color: Color.colorBlack,
        left: 55,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.size_sm,
        position: "absolute",
    },
    vectorIconLayout1: {
        maxHeight: "100%",
        maxWidth: "100%",
        left: "83.33%",
        right: "14.36%",
        width: "2.31%",
        height: "0.9%",
        position: "absolute",
        overflow: "hidden",
    },
    vectorIconLayout: {
        left: "83.59%",
        right: "14.1%",
        maxHeight: "100%",
        maxWidth: "100%",
        width: "2.31%",
        height: "0.9%",
        position: "absolute",
        overflow: "hidden",
    },
    settingsChild: {
        top: 0,
        left: 0,
        width: 390,
        position: "absolute",
        backgroundColor: "transparent",
        height: 800,
    },
    settingsItem: {
        top: 38,
        width: 74,
    },
    settingsInner: {
        top: 327,
        width: 80,
    },
    rectangleView: {
        top: 213,
        width: 118,
    },
    profile: {
        top: 39,
        left: 46,
    },
    settings1: {
        top: 328,
        left: 43,
    },
    notifications: {
        top: 214,
        left: 44,
    },
    settingsChild1: {
        top: 81,
        height: 102,
    },
    settingsChild2: {
        top: 372,
        height: 250,
    },
    settingsChild3: {
        top: 256,
        height: 41,
    },
    vectorIcon: {
        top: 132,
    },
    settingsChild4: {
        top: 428,
    },
    settingsChild5: {
        top: 493,
    },
    settingsChild6: {
        top: 558,
    },
    personalInformation: {
        top: 103,
    },
    resetPassword: {
        top: 149,
    },
    remainders: {
        top: 269,
    },
    privacy: {
        top: 395,
    },
    faq: {
        top: 452,
    },
    about: {
        top: 517,
    },
    logOut: {
        top: 580,
    },
    vectorIcon1: {
        top: "16.5%",
        bottom: "85.72%",
    },
    vectorIcon2: {
        top: "24%",
        bottom: "79.97%",
    },
    vectorIcon3: {
        top: "42%",
        bottom: "64.97%",
    },
    vectorIcon4: {
        top: "61.5%",
        bottom: "49.22%",
    },
    vectorIcon5: {
        top: "70.5%",
        bottom: "42.1%",
    },
    vectorIcon6: {
        top: "80%",
        bottom: "33.85%",
    },
    settings: {
        flex: 1,
        width: "100%",
        backgroundColor: "transparent",
        overflow: "hidden",
        height: 800,
    },
});

export default Settings;
