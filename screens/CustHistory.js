import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../styling/CustHistoryStyle";

const CustHistory = () => {
    return (
        <View style={styles.customerHistory}>
            <LinearGradient
                style={styles.customerHistoryChild}
                locations={[0, 1]}
                colors={["#8dc3ff", "#d2e7ff"]}
            />
            <Text
                style={[styles.customerName, styles.julyFlexBox]}
            >{`CUSTOMER NAME: `}</Text>
            <Text style={[styles.orderNoContainer, styles.orderContainerTypo]}>
                <Text style={styles.orderNo}>Order No. -</Text>
                <Text style={styles.text}> #7657456</Text>
            </Text>
            <Text style={[styles.orderNoContainer1, styles.orderContainerTypo]}>
                <Text style={styles.orderNo}>Order No. -</Text>
                <Text style={styles.text}> #56437</Text>
            </Text>
            <Text style={[styles.july132023, styles.cementTypo]}>
                July 13, 2023 | 05: 00 PM
            </Text>
            <Text style={[styles.july92023, styles.cementTypo]}>
                July 9, 2023 | 05: 00 PM
            </Text>
            <Text style={[styles.mostRecentOrders, styles.julyFlexBox]}>
                MOST RECENT ORDERS
            </Text>
            <Text style={[styles.ashwanthRKumar, styles.julyFlexBox]}>
                Ashwanth R Kumar
            </Text>
            <Text style={[styles.text2, styles.textTypo]}>₹5,200</Text>
            <Text style={[styles.text3, styles.textTypo]}>₹3,200</Text>
            <View style={[styles.customerHistoryItem, styles.customerLayout]} />
            <View style={[styles.customerHistoryInner, styles.text5Position]} />
            <Text style={[styles.bag, styles.bagFlexBox]}>320 / bag</Text>
            <Text style={[styles.bag1, styles.bag1Typo]}>320 / bag</Text>
            <Text style={[styles.x10, styles.x10Typo]}>x 10</Text>
            <Text style={[styles.x101, styles.x10Typo]}>x 10</Text>
            <Text style={[styles.x200, styles.x200Typo]}> x 200</Text>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.piece, styles.bagFlexBox]}>10 / piece</Text>
            </View>
            <Text style={[styles.cement, styles.bagTypo]}>Cement</Text>
            <Text style={[styles.cement1, styles.bag1Typo]}>Cement</Text>
            <Text style={[styles.bricks, styles.x200Typo]}>Bricks</Text>
            <Text style={[styles.text4, styles.text4Position]}>₹3,200</Text>
            <Text style={[styles.text5, styles.text5Position]}>₹3,200</Text>
            <Text style={[styles.text6, styles.textTypo]}>₹2,000</Text>
            <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector-7.png")}
            />
            <Image
                style={[styles.customerHistoryChild1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector-7.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    julyFlexBox: {
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    orderContainerTypo: {
        left: 52,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.size_smi,
        position: "absolute",
    },
    cementTypo: {
        fontSize: FontSize.size_3xs,
        left: 52,
    },
    textTypo: {
        fontSize: FontSize.size_xs,
        left: 302,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    customerLayout: {
        height: 14,
        width: 39,
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
        left: 110,
    },
    text5Position: {
        top: 254,
        position: "absolute",
    },
    bagFlexBox: {
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        color: Color.colorWhite,
        fontSize: FontSize.size_6xs,
    },
    bag1Typo: {
        top: 256,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    x10Typo: {
        left: 153,
        fontSize: FontSize.size_4xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    x200Typo: {
        top: 161,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    groupChildLayout: {
        width: 37,
        height: 14,
        position: "absolute",
    },
    bagTypo: {
        top: 144,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    text4Position: {
        top: 142,
        position: "absolute",
    },
    vectorIconLayout: {
        height: 1,
        width: 304,
        left: "50%",
        position: "absolute",
    },
    customerHistoryChild: {
        width: 390,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
        height: 800,
    },
    customerName: {
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        fontSize: FontSize.size_smi,
        top: 47,
        left: 35,
    },
    orderNo: {
        color: Color.colorBlack,
    },
    text: {
        color: Color.colorRed,
    },
    orderNoContainer: {
        top: 102,
    },
    orderNoContainer1: {
        top: 214,
    },
    july132023: {
        top: 123,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    july92023: {
        top: 235,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    mostRecentOrders: {
        top: 73,
        fontSize: 15,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        left: 35,
    },
    ashwanthRKumar: {
        left: 246,
        fontStyle: "italic",
        fontFamily: FontFamily.robotoItalic,
        fontSize: FontSize.size_smi,
        top: 47,
    },
    text2: {
        top: 103,
        position: "absolute",
        fontSize: FontSize.size_xs,
        left: 302,
    },
    text3: {
        top: 215,
        position: "absolute",
        fontSize: FontSize.size_xs,
        left: 302,
    },
    customerHistoryItem: {
        top: 142,
        position: "absolute",
    },
    customerHistoryInner: {
        height: 14,
        width: 39,
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
        left: 110,
    },
    bag: {
        width: 35,
        left: 112,
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        color: Color.colorWhite,
        fontSize: FontSize.size_6xs,
        top: 144,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    bag1: {
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        color: Color.colorWhite,
        fontSize: FontSize.size_6xs,
        width: 35,
        left: 112,
    },
    x10: {
        top: 143,
        fontSize: FontSize.size_4xs,
    },
    x101: {
        top: 255,
        fontSize: FontSize.size_4xs,
    },
    x200: {
        left: 151,
        fontSize: FontSize.size_4xs,
    },
    groupChild: {
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
        width: 37,
        left: 0,
        top: 0,
    },
    piece: {
        top: 2,
        left: 3,
        width: 32,
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        color: Color.colorWhite,
        fontSize: FontSize.size_6xs,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    rectangleParent: {
        top: 160,
        width: 37,
        left: 110,
    },
    cement: {
        fontSize: FontSize.size_3xs,
        left: 52,
        color: Color.colorBlack,
    },
    cement1: {
        fontSize: FontSize.size_3xs,
        left: 52,
        color: Color.colorBlack,
    },
    bricks: {
        fontSize: FontSize.size_3xs,
        left: 52,
    },
    text4: {
        fontSize: FontSize.size_xs,
        left: 302,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    text5: {
        fontSize: FontSize.size_xs,
        left: 302,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    text6: {
        top: 158,
        position: "absolute",
        fontSize: FontSize.size_xs,
        left: 302,
    },
    vectorIcon: {
        marginLeft: -151.5,
        top: 194,
    },
    customerHistoryChild1: {
        marginLeft: -152.5,
        top: 286,
    },
    customerHistory: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: 800,
    },
});

export default CustHistory;
