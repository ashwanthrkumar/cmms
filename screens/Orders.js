import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStylesOrder";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { NavigationContainer } from '@react-navigation/native';








function OrdersMain({ navigation }) {


    return (
        <View style={[styles.orderSection, styles.orderSectionLayout]}>
            <LinearGradient
                style={[styles.ordersParent, styles.ellipseIconPosition]}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Text style={styles.orders}>ORDERS</Text>
                <View style={[styles.rectangleParent, styles.groupLayout1]}>
                    <View style={[styles.groupChild, styles.groupChildLayout]} />
                    <Text style={[styles.text, styles.textTypo3]}>28-10-2023</Text>
                </View>
                <View style={styles.rectangleGroup}>
                    <View style={[styles.groupChild, styles.groupChildLayout]} />
                    <View style={[styles.groupInner, styles.groupChildLayout]} />
                    <Text style={[styles.text, styles.textTypo3]}>20-10-2023</Text>
                    <Text style={[styles.text2, styles.textTypo3]}>18-10-2023</Text>
                </View>
                <View style={[styles.frameChild, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameInner, styles.frameLayout]} />
                <Text style={[styles.bag, styles.kgTypo]}>320 / bag</Text>
                <Text style={[styles.bag1, styles.bagTypo]}>320 / bag</Text>
                <Text style={[styles.bag2, styles.bagTypo]}>320 / bag</Text>
                <Text style={[styles.x10, styles.x10Typo]}>x 10</Text>
                <Text style={[styles.x20, styles.x20Typo]}>x 20</Text>
                <Text style={[styles.x201, styles.x20Typo]}>x 20</Text>
                <Text style={[styles.x200, styles.x10Typo]}> x 200</Text>
                <Text style={[styles.x2001, styles.x10Typo]}> x 200</Text>
                <Text style={[styles.x60, styles.x10Typo]}>x 60</Text>
                <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleLayout]} />
                    <Text style={[styles.kg, styles.kgTypo]}>58 / kg</Text>
                </View>
                <View style={[styles.groupView, styles.groupLayout]}>
                    <View style={[styles.groupChild1, styles.groupLayout]} />
                    <Text style={[styles.piece, styles.kgTypo]}>10 / piece</Text>
                </View>
                <View style={[styles.rectangleParent1, styles.groupLayout]}>
                    <View style={[styles.groupChild1, styles.groupLayout]} />
                    <Text style={[styles.piece, styles.kgTypo]}>10 / piece</Text>
                </View>
                <Image
                    style={[styles.iconCog, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/settings.png")}
                />
                <View style={[styles.lineView, styles.frameChildPosition]} />
                <View style={[styles.frameChild1, styles.frameChildPosition]} />
                <View style={[styles.frameChild2, styles.frameChildPosition]} />
                <Text style={[styles.text3, styles.textTypo2]}>#45638</Text>
                <Text style={[styles.text4, styles.textTypo2]}>#5638</Text>
                <Text style={[styles.text5, styles.textTypo2]}>#438</Text>
                <Text style={[styles.text6, styles.textTypo2]}>#7846</Text>
                <Text style={[styles.details, styles.detailsTypo1]}>{`Details >`}</Text>
                <Text style={[styles.details1, styles.detailsTypo]}>{`Details >`}</Text>
                <Text style={[styles.details2, styles.detailsTypo]}>{`Details >`}</Text>
                <Text
                    style={[styles.details3, styles.detailsTypo1]}
                >{`Details >`}</Text>
                <Text style={[styles.cement, styles.steelTypo]}>Cement</Text>
                <Text style={[styles.cement1, styles.cementTypo]}>Cement</Text>
                <Text style={[styles.cement2, styles.cementTypo]}>Cement</Text>
                <Text style={[styles.steel, styles.steelTypo]}>Steel</Text>
                <Text style={[styles.bricks, styles.steelTypo]}>Bricks</Text>
                <Text style={[styles.bricks1, styles.cementTypo]}>Bricks</Text>
                <Text style={[styles.text7, styles.textTypo1]}>₹3,200</Text>
                <Text style={[styles.text8, styles.textTypo]}>₹6,400</Text>
                <Text style={[styles.text9, styles.textTypo]}>₹6,400</Text>
                <Text style={[styles.text10, styles.textTypo]}>₹3,480</Text>
                <Text style={[styles.text11, styles.textTypo1]}>₹2,000</Text>
                <Text style={[styles.text12, styles.textTypo]}>₹2,000</Text>
            </LinearGradient>
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
                <Image
                    style={[styles.ellipseIcon, styles.ellipseLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <View style={styles.groupParent}>
                <Image
                    style={[styles.groupIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/group.png")}
                />
                <Image
                    style={styles.groupChild3}
                    contentFit="cover"
                    source={require("../assets/ellipse-2.png")}
                />
                <Text style={[styles.text13, styles.aTypo]}>1</Text>
            </View>
            <TouchableOpacity style={[styles.button, styles.buttonFlexBox]} onPress={() => navigation.navigate('CreateOrder')}>
                <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                    <Text style={[styles.labelText, styles.textTypo2]}>ENTER AN ORDER</Text>
                </View>
            </TouchableOpacity>

        </View>
    );


}

function CreateOrder({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Text>Details</Text>
        </View>
    );
}

const RootStack = createStackNavigator();

function Orders() {
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={OrdersMain} options={{ headerShown: false }} />
                    <RootStack.Screen name="Details" component={DetailsScreen} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    <RootStack.Screen name="CreateOrder" component={CreateOrder} />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
};














const styles = StyleSheet.create({
    orderSectionLayout: {
        height: 800,
        overflow: "hidden",
    },
    ellipseIconPosition: {
        left: 0,
        top: 0,
    },
    groupLayout1: {
        height: 18,
        width: 64,
        position: "absolute",
    },
    groupChildLayout: {
        borderRadius: Border.br_9xs,
        backgroundColor: Color.colorRoyalblue,
        left: 0,
    },
    textTypo3: {
        fontSize: FontSize.size_3xs,
        left: 6,
        color: Color.colorWhite,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    frameLayout: {
        height: 14,
        width: 39,
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
        position: "absolute",
    },
    kgTypo: {
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        fontSize: FontSize.size_6xs,
        color: Color.colorWhite,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    bagTypo: {
        left: 96,
        height: 9,
        width: 35,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        fontSize: FontSize.size_6xs,
        color: Color.colorWhite,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    x10Typo: {
        fontSize: FontSize.size_6xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    x20Typo: {
        left: 136,
        fontSize: FontSize.size_6xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    rectangleLayout: {
        width: 34,
        height: 14,
        position: "absolute",
    },
    groupLayout: {
        width: 37,
        height: 14,
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    frameChildPosition: {
        height: 1,
        width: 400,
        borderTopWidth: 1,
        borderColor: Color.colorDarkgray_100,
        borderStyle: "solid",
        left: "50%",
        marginLeft: -163.5,
        position: "absolute",
    },
    textTypo2: {
        fontSize: FontSize.m3LabelLarge_size,
        textAlign: "center",
    },
    detailsTypo1: {
        color: Color.colorDarkgray_200,
        textDecoration: "underline",
        fontSize: FontSize.size_2xs,
        left: 298,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    detailsTypo: {
        left: 297,
        color: Color.colorDarkgray_200,
        textDecoration: "underline",
        fontSize: FontSize.size_2xs,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    steelTypo: {
        fontSize: FontSize.size_xs,
        left: 23,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    cementTypo: {
        left: 22,
        fontSize: FontSize.size_xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo1: {
        left: 305,
        fontSize: FontSize.size_xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo: {
        left: 304,
        fontSize: FontSize.size_xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    ellipseLayout: {
        height: 36,
        width: 36,
        position: "absolute",
    },
    aTypo: {
        textAlign: "left",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    buttonFlexBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    orders: {
        top: 51,
        fontSize: 18,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 17,
        position: "absolute",
    },
    groupChild: {
        backgroundColor: Color.colorRoyalblue,
        height: 18,
        width: 64,
        position: "absolute",
        top: 0,
    },
    text: {
        top: 3,
        color: Color.colorWhite,
    },
    rectangleParent: {
        top: 87,
        left: 17,
        height: 18,
    },
    groupInner: {
        top: 113,
        backgroundColor: Color.colorRoyalblue,
        height: 18,
        width: 64,
        position: "absolute",
    },
    text2: {
        top: 116,
        color: Color.colorWhite,
    },
    rectangleGroup: {
        top: 250,
        height: 131,
        width: 64,
        left: 17,
        position: "absolute",
    },
    frameChild: {
        left: 95,
        top: 148,
    },
    frameItem: {
        left: 94,
        top: 314,
    },
    frameInner: {
        top: 427,
        left: 94,
    },
    bag: {
        top: 150,
        left: 97,
        width: 35,
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
    },
    bag1: {
        top: 316,
    },
    bag2: {
        top: 429,
    },
    x10: {
        top: 151,
        left: 137,
    },
    x20: {
        top: 317,
    },
    x201: {
        top: 430,
    },
    x200: {
        top: 172,
        left: 135,
    },
    x2001: {
        top: 338,
        left: 134,
    },
    x60: {
        top: 223,
        left: 132,
    },
    rectangleView: {
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
        left: 0,
        top: 0,
    },
    kg: {
        top: 1,
        left: 2,
        width: 29,
        height: 9,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
    },
    rectangleContainer: {
        top: 220,
        left: 95,
    },
    groupChild1: {
        backgroundColor: Color.colorRoyalblue,
        borderRadius: Border.br_9xs,
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
    },
    groupView: {
        top: 169,
        left: 95,
    },
    rectangleParent1: {
        top: 335,
        left: 94,
    },
    iconCog: {
        height: "2.63%",
        width: "5.83%",
        top: "6.1%",
        right: "27.78%",
        left: "78%",
        bottom: "91.13%",
    },
    lineView: {
        top: 114,
    },
    frameChild1: {
        top: 277,
    },
    frameChild2: {
        top: 390,
    },
    text3: {
        top: 123,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.m3LabelLarge_size,
        left: 17,
        position: "absolute",
    },
    text4: {
        top: 289,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.m3LabelLarge_size,
        left: 17,
        position: "absolute",
    },
    text5: {
        top: 402,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.m3LabelLarge_size,
        left: 17,
        position: "absolute",
    },
    text6: {
        top: 195,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        fontSize: FontSize.m3LabelLarge_size,
        left: 17,
        position: "absolute",
    },
    details: {
        top: 123,
    },
    details1: {
        top: 289,
    },
    details2: {
        top: 402,
    },
    details3: {
        top: 195,
    },
    cement: {
        top: 148,
    },
    cement1: {
        top: 314,
    },
    cement2: {
        top: 427,
    },
    steel: {
        top: 220,
    },
    bricks: {
        top: 169,
    },
    bricks1: {
        top: 335,
    },
    text7: {
        top: 148,
    },
    text8: {
        top: 314,
    },
    text9: {
        top: 427,
    },
    text10: {
        top: 222,
    },
    text11: {
        top: 169,
    },
    text12: {
        top: 335,
    },
    ordersParent: {
        width: 360,
        backgroundColor: "transparent",
        position: "absolute",
        overflow: "hidden",
        height: 800,
    },
    ellipseIcon: {
        left: 0,
        top: 0,
    },
    a: {
        top: 7,
        fontSize: 15,
        color: Color.colorRoyalblue,
        width: 11,
        height: 19,
        left: 11,
    },
    ellipseParent: {
        top: 43,
        left: 350,
    },
    groupIcon: {
        height: "80%",
        width: "80.97%",
        top: "40%",
        right: "19.03%",
        bottom: "0%",
        left: "90%",
    },
    groupChild3: {
        width: 8,
        height: 8,
        left: 30,
        top: 0,
        position: "absolute",
    },
    text13: {
        left: 32,
        fontSize: 6,
        width: 3,
        height: 6,
        color: Color.colorWhite,
        top: 0,
    },
    groupParent: {
        height: "3.13%",
        width: "5.28%",
        top: "5.75%",
        right: "18.61%",
        left: "76.11%",
        bottom: "91.13%",
        position: "absolute",
    },
    labelText: {
        letterSpacing: 0,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: FontFamily.m3LabelLarge,
        color: Color.colorWhite,
    },
    stateLayer: {
        alignSelf: "stretch",
        flexDirection: "row",
        paddingHorizontal: Padding.p_5xl,
        paddingVertical: Padding.p_3xs,
        flex: 1,
    },
    button: {
        top: 687,
        left: 26,
        borderRadius: Border.br_81xl,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        width: 345,
        height: 40,
        backgroundColor: Color.colorRoyalblue,
        position: "absolute",
        overflow: "hidden",
    },
    orderSection: {
        backgroundColor: Color.colorWhite,
        width: "100%",
        overflow: "hidden",
        flex: 1,
    },
});

export default Orders;
