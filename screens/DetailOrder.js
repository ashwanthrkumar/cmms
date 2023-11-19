import * as React from "react";
import { Pressable, StyleSheet, View, Text, Touchablewithoutfeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../styling/OrderDetailStyle";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AssignPartner from "./AssignPartner";
import CustHistory from "./CustHistory";
function DetailMain({ navigation }) {
    const handleButtonClick = () => {
        alert('Downloading Order Recipt');
    };
    return (
        <View style={styles.ordersDetailsSection}>
            <LinearGradient
                style={styles.ordersDetailsSectionChild}
                locations={[0, 1]}
                colors={["#8dc3ff", "#d2e7ff"]}
            />
            <View style={styles.ordersDetailsSectionItem} />
            <Text style={[styles.bag, styles.bagTypo]}>320 / bag</Text>
            <Text style={[styles.x10, styles.customerTypo]}>x 10</Text>
            <Text style={[styles.x200, styles.customerTypo]}> x 200</Text>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <Text style={[styles.piece, styles.bagTypo]}>10 / piece</Text>
            </View>
            <Text style={[styles.cement, styles.cementTypo]}>Cement</Text>
            <Text style={[styles.bricks, styles.cementTypo]}>Bricks</Text>
            <Text style={[styles.text, styles.textTypo]}>₹3,200</Text>
            <Text style={[styles.text1, styles.textTypo]}>₹2,000</Text>
            <Text style={[styles.text2, styles.textTypo]}>₹5,200</Text>
            <Text
                style={[styles.customerName, styles.customerNamePosition]}
            >{`CUSTOMER NAME: `}</Text>
            <Text style={[styles.customerPhNo, styles.text3Position]}>
                CUSTOMER Ph. No.:
            </Text>
            <Text style={[styles.cityState, styles.cityStatePosition]}>
                CITY/ STATE
            </Text>
            <Text style={[styles.order, styles.orderTypo1]}>ORDER</Text>
            <Text style={[styles.trackOrderProgress, styles.orderTypo1]}>
                TRACK ORDER PROGRESS
            </Text>
            <Text style={[styles.customerAddress, styles.orderTypo]}>{`CUSTOMER 
ADDRESS: `}</Text>
            <Text style={[styles.ashwanthRKumar, styles.text3Typo]}>
                Ashwanth R Kumar
            </Text>
            <Text style={[styles.text3, styles.text3Typo]}>+91 6364371531</Text>
            <Text style={[styles.bangaloreKarnataka, styles.text3Typo]}>
                Bangalore/ Karnataka
            </Text>
            <Text style={[styles.no11348th, styles.text3Typo]}>{`No. 11/34, 8th Cross,
Manjunathnagar, Magadi Road`}</Text>
            <Image
                style={[styles.ordersDetailsSectionInner, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/straightline.png")}
            />
            <View style={styles.rectangleView} />
            <View
                style={[styles.ordersDetailsSectionChild1, styles.ordersChildLayout]}
            />
            <View
                style={[styles.ordersDetailsSectionChild2, styles.ordersChildLayout]}
            />

            <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/straightline.png")}
            />
            <Image
                style={styles.ordersDetailsSectionChild4}
                contentFit="cover"
                source={require("../assets/straightline.png")}
            />
            <Text onPress={() => navigation.navigate('AssignPartner')}
                style={[styles.assignDeliveryPartner, styles.customerHistoryTypo]}
            >{`ASSIGN
DELIVERY PARTNER`}</Text>
            <Text style={[styles.orderReceived, styles.orderTypo]}>
                ORDER RECEIVED
            </Text>
            <Text style={[styles.sourcingOfMaterial, styles.sourcingOfMaterialTypo]}>
                SOURCING OF MATERIAL STARTED
            </Text>

            <Text style={[styles.pm, styles.orderTypo]}>05:00 PM</Text>
            <Text style={[styles.pm1, styles.pm1Typo]}>08:00 PM</Text>
            <Text onPress={() => navigation.navigate('CustomerHistory')}
                style={[styles.customerHistory, styles.customerHistoryTypo]}
            >{`CUSTOMER
HISTORY`}</Text>
            <Image
                style={[styles.iconIdentification, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/assign.png")}
            />
            <Image
                style={[styles.iconNotes, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/history.png")}
            />
            <View style={[styles.lineParent, styles.lineParentLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View style={[styles.addProgressWrapper, styles.lineParentLayout]}>
                    <Text style={[styles.addProgress, styles.orderTypo1]}>
                        + Add Progress
                    </Text>
                </View>
            </View>

            <View style={styles.downloadOrderReciptParent}>
                <Text onPress={handleButtonClick} style={[styles.downloadOrderRecipt, styles.orderTypo]}>
                    DOWNLOAD ORDER RECIPT
                </Text>
                <Image
                    style={[styles.iconDownload, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/download.png")}
                />
            </View>
        </View>
    );
};


const RootStack = createStackNavigator();

function DetailOrder() {
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={DetailMain} options={{ headerShown: false }} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    <RootStack.Screen name="AssignPartner" component={AssignPartner} />
                    <RootStack.Screen name="CustomerHistory" component={CustHistory} />
                    {/* <RootStack.Screen name="Settings" component={Settings} />
                    <RootStack.Screen name="DetailOrder" component={DetailOrder} /> */}
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    bagTypo: {
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.size_6xs,
        textAlign: "center",
        position: "absolute",
    },
    customerTypo: {
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
    cementTypo: {
        fontSize: FontSize.size_xs,
        left: 35,
        color: Color.colorBlack,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo: {
        left: 317,
        fontSize: FontSize.size_xs,
        color: Color.colorBlack,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    customerNamePosition: {
        top: 42,
        textAlign: "center",
    },
    text3Position: {
        top: 72,
        textAlign: "center",
    },
    cityStatePosition: {
        top: 147,
        textAlign: "center",
    },
    orderTypo1: {
        fontSize: FontSize.size_mini,
        textAlign: "center",
        position: "absolute",
    },
    orderTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    text3Typo: {
        fontFamily: FontFamily.robotoItalic,
        fontStyle: "italic",
        fontSize: FontSize.size_smi,
        color: Color.colorBlack,
        position: "absolute",
    },
    vectorIconPosition: {
        height: 1,
        width: 317,
        marginLeft: -158,
        left: "50%",
        position: "absolute",
    },
    ordersChildLayout: {
        height: 46,
        backgroundColor: Color.colorGainsboro,
        borderRadius: Border.br_3xs,
        width: 317,
        position: "absolute",
    },
    customerHistoryTypo: {
        top: 324,
        textAlign: "left",
        color: Color.colorBlack,
        fontSize: FontSize.size_4xs,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    sourcingOfMaterialTypo: {
        left: 128,
        textAlign: "left",
        color: Color.colorBlack,
        fontSize: FontSize.size_4xs,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    pm1Typo: {
        left: 49,
        textAlign: "left",
        fontSize: FontSize.size_smi,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    lineParentLayout: {
        height: 18,
        position: "absolute",
    },
    groupLayout: {
        width: 53,
        borderTopWidth: 1,
        borderColor: Color.colorDarkgray,
        borderStyle: "solid",
        top: 10,
        height: 1,
        position: "absolute",
    },
    ordersDetailsSectionChild: {
        width: 390,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
        height: "100%",
    },
    ordersDetailsSectionItem: {
        width: 39,
        height: 14,
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
        left: 107,
        top: 213,
        position: "absolute",
    },
    bag: {
        top: 215,
        left: 109,
        width: 35,
    },
    x10: {
        top: 214,
        left: 150,
        fontSize: FontSize.size_4xs,
        textAlign: "center",
        color: Color.colorBlack,
    },
    x200: {
        top: 235,
        left: 148,
        fontSize: FontSize.size_4xs,
        textAlign: "center",
        color: Color.colorBlack,
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
    },
    rectangleParent: {
        top: 234,
        width: 37,
        left: 107,
    },
    cement: {
        top: 213,
    },
    bricks: {
        top: 234,
    },
    text: {
        top: 213,
    },
    text1: {
        top: 234,
    },
    text2: {
        top: 266,
    },
    customerName: {
        fontSize: FontSize.size_smi,
        left: 35,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    customerPhNo: {
        fontSize: FontSize.size_smi,
        left: 35,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    cityState: {
        fontSize: FontSize.size_smi,
        left: 35,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    order: {
        marginLeft: -24,
        top: 180,
        left: "50%",
        fontSize: FontSize.size_mini,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    trackOrderProgress: {
        marginLeft: -90,
        top: 440,
        left: "50%",
        fontSize: FontSize.size_mini,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    customerAddress: {
        top: 102,
        fontSize: FontSize.size_smi,
        left: 35,
    },
    ashwanthRKumar: {
        left: 246,
        top: 42,
        textAlign: "center",
    },
    text3: {
        left: 258,
        top: 72,
        textAlign: "center",
    },
    bangaloreKarnataka: {
        left: 231,
        top: 147,
        textAlign: "center",
    },
    no11348th: {
        left: 183,
        textAlign: "right",
        top: 102,
    },
    ordersDetailsSectionInner: {
        top: 259,
    },
    rectangleView: {
        left: 37,
        height: 114,
        backgroundColor: Color.colorGainsboro,
        borderRadius: Border.br_3xs,
        top: 305,
        width: 317,
        position: "absolute",
    },
    ordersDetailsSectionChild1: {
        top: 475,
        left: 36,
    },
    ordersDetailsSectionChild2: {
        top: 534,
        left: 35,
    },
    ordersDetailsSectionChild3: {
        top: 593,
        left: 35,
    },
    vectorIcon: {
        top: 363,
    },
    ordersDetailsSectionChild4: {
        marginLeft: -0.5,
        width: 1,
        height: 58,
        top: 305,
        left: "50%",
        position: "absolute",
    },
    assignDeliveryPartner: {
        left: 90,
    },
    orderReceived: {
        top: 493,
        left: 129,
        fontSize: FontSize.size_4xs,
    },
    sourcingOfMaterial: {
        top: 552,
    },
    deliveryPartnerAssigned: {
        top: 611,
    },
    pm: {
        top: 491,
        left: 50,
        fontSize: FontSize.size_smi,
    },
    pm1: {
        top: 550,
    },
    pm2: {
        top: 609,
    },
    customerHistory: {
        left: 268,
    },
    iconIdentification: {
        width: "6.15%",
        right: "78.72%",
        left: "15.13%",
        bottom: "56.5%",
        top: "49.8%",
        height: "3%",
        maxWidth: "100%",
    },
    iconNotes: {
        width: "5.86%",
        right: "33.89%",
        left: "60.26%",
        bottom: "56.5%",
        top: "49.8%",
        height: "3%",
        maxWidth: "100%",
    },
    groupItem: {
        left: 0,
    },
    groupInner: {
        left: 159,
    },
    addProgress: {
        fontFamily: FontFamily.robotoRegular,
        color: Color.colorDarkgray,
        left: 0,
        top: 0,
    },
    addProgressWrapper: {
        left: 54,
        width: 300,
        top: 0,
    },
    lineParent: {
        top: 600,
        left: 86,
        width: 500,
    },
    downloadOrderRecipt: {
        top: 9,
        left: 34,
        fontSize: FontSize.size_4xs,
    },
    iconDownload: {
        height: "100%",
        width: "19.05%",
        top: "0%",
        right: "80.95%",
        bottom: "0%",
        left: "0%",
    },
    downloadOrderReciptParent: {
        top: 380,
        left: 121,
        width: 147,
        height: 28,
        position: "absolute",
    },
    ordersDetailsSection: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: "100%",
        //top: -30,
    },
});

export default DetailOrder;
