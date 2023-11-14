import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStylesS";
import MatStats from "./MatStats"
import MonStats from "./MonStats"
import DriStats from "./DriStats"
import LocStats from "./LocStats"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function StatsMain({ navigation }) {
    const handleCardButtonClick = () => {

        alert('Button inside the card clicked!');
    };
    return (

        <View style={[styles.statsSection, styles.statsSectionLayout]}>
            <LinearGradient
                style={[styles.stasticsParent, styles.statsSectionLayout]}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Text style={styles.stastics}>STASTICS</Text>
                <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                    <View style={[styles.groupChild, styles.colorLayout]} />
                    <Text style={[styles.history, styles.textTypo2]}>HISTORY</Text>
                </View>
                <Image
                    style={[styles.iconCog, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/settings.png")}
                />
                <View style={[styles.ellipseParent, styles.groupItemLayout]}>
                    <Image
                        style={[styles.groupItem, styles.groupItemLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-1.png")}
                    />
                    <Text style={[styles.a, styles.aClr]}>A</Text>
                </View>
                <View style={[styles.groupParent, styles.iconCogPosition]}>
                    <Image
                        style={styles.groupIcon}
                        contentFit="cover"
                        source={require("../assets/group.png")}
                    />
                    <Image
                        style={styles.groupInner}
                        contentFit="cover"
                        source={require("../assets/ellipse-2.png")}
                    />
                    <Text style={[styles.text, styles.textTypo2]}>1</Text>
                </View>
                <Image
                    style={[styles.frameChild, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-6.png")}
                />
                <Image
                    style={[styles.frameItem, styles.frameLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-6.png")}
                />
                <Text style={[styles.profitGenerated, styles.materialsSoldTypo]}>
                    PROFIT GENERATED
                </Text>
                <Text style={[styles.materialsSold, styles.materialsSoldTypo]}>
                    MATERIALS SOLD
                </Text>
                <Text style={[styles.text1, styles.textTypo1]}>34,56,245</Text>
                <Text style={[styles.text2, styles.textTypo1]}>1,99,234</Text>
                <Image
                    style={styles.frameInner}
                    contentFit="cover"
                    source={require("../assets/graph.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector-1.png")}
                />
                <Image
                    style={[styles.frameChild1, styles.lineLayout]}
                    contentFit="cover"
                    source={require("../assets/vector-3.png")}
                />
            </LinearGradient>

            <Text onPress={() => navigation.navigate('Material Stats')} style={[styles.materials, styles.statsTypo1]}>MATERIALS</Text>
            <Text onPress={() => navigation.navigate('Driver Stats')} style={[styles.driver, styles.statsTypo1]}>DRIVER</Text>
            <Text onPress={() => navigation.navigate('Money Stats')} style={[styles.money, styles.statsTypo]}>MONEY</Text>
            <Text onPress={() => navigation.navigate('Location Stats')} style={[styles.location, styles.statsTypo]}>LOCATION</Text>
            <Text onPress={() => navigation.navigate('Material Stats')} style={[styles.stats, styles.statsTypo1]}>STATS</Text>
            <Text onPress={() => navigation.navigate('Driver Stats')} style={[styles.stats1, styles.statsTypo1]}>STATS</Text>
            <Text onPress={() => navigation.navigate('Money Stats')} style={[styles.stats2, styles.statsTypo]}>STATS</Text>
            <Text onPress={() => navigation.navigate('Location Stats')} style={[styles.stats3, styles.statsTypo]}>STATS</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Material Stats')}>
                <Image
                    style={[styles.iconWheelBarrow, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/barrow.png")}
                />
            </TouchableWithoutFeedback>
            <View style={styles.chart}>
                <View style={[styles.chart1, styles.chartPosition]}>
                    <View style={[styles.legend, styles.chartPosition]}>
                        <Image
                            style={[styles.maskIcon, styles.maskIconPosition]}
                            contentFit="cover"
                            source={require("../assets/graph.png")}
                        />

                    </View>
                </View>
                <View style={[styles.chart2, styles.chartPosition]}>
                    <View style={[styles.bg, styles.chartPosition]} />
                    <View style={[styles.chart3, styles.textPosition]}>
                        <Image
                            style={styles.shapeIcon}
                            contentFit="cover"
                            source={require("../assets/chart.png")}
                        />
                        <View style={[styles.text7, styles.textPosition]}>
                            <Text style={[styles.text8, styles.textTypo]}>{`$23,994
`}</Text>
                            <Text style={[styles.text9, styles.textTypo]}>Total</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Money Stats')}>
                <Image
                    style={[styles.iconWallet, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/wallet.png")}
                /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Driver Stats')}>
                <Image
                    style={[styles.iconTruckDriver, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/driver.png")}
                /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Location Stats')}>
                <Image
                    style={[styles.iconAlternateMapMarker, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/loc.png")}
                /></TouchableWithoutFeedback>
        </View>
    );
};



const RootStack = createStackNavigator();

function Stats() {
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={StatsMain} options={{ headerShown: false }} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    <RootStack.Screen name="Material Stats" component={MatStats} />
                    <RootStack.Screen name="Money Stats" component={MonStats} />
                    <RootStack.Screen name="Driver Stats" component={DriStats} />
                    <RootStack.Screen name="Location Stats" component={LocStats} />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
};







const styles = StyleSheet.create({
    statsSectionLayout: {
        height: 800,
        overflow: "hidden",
    },
    groupChildLayout: {
        width: 49,
        height: 15,
        position: "absolute",
    },
    colorLayout: {
        borderRadius: 4,
        left: 0,
    },
    textTypo2: {
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    groupItemLayout: {
        height: 36,
        width: 36,
        position: "absolute",
    },
    aClr: {
        color: Color.colorRoyalblue,
        textAlign: "left",
    },
    iconCogPosition: {
        bottom: "91%",
        position: "absolute",
    },
    frameLayout: {
        height: 7,
        width: 7,
        left: 193,
        position: "absolute",
    },
    materialsSoldTypo: {
        fontSize: FontSize.size_2xs,
        left: 208,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo1: {
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        fontSize: FontSize.size_4xs,
        left: 208,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    lineLayout: {
        height: 1,
        position: "absolute",
    },
    statsTypo1: {
        left: 97,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    statsTypo: {
        left: 258,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    chartPosition: {
        right: "0%",
        top: "0%",
        left: "0%",
        position: "absolute",
        width: "100%",
    },
    maskIconPosition: {
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        position: "absolute",
    },
    text8Layout: {
        height: 21,
        left: 0,
    },
    infoPosition1: {
        height: 14,
        width: 51,
        marginTop: -4.16,
        top: "50%",
        position: "absolute",
    },
    textLayout: {
        lineHeight: 11,
        fontSize: 7,
        left: 10,
    },
    textPosition: {
        top: "50%",
        position: "absolute",
    },
    infoPosition: {
        width: 58,
        height: 14,
        top: "50%",
        marginTop: -4.16,
        position: "absolute",
    },
    textTypo: {
        color: Color.colorDimgray,
        fontFamily: FontFamily.aderoTrial,
        display: "none",
        textAlign: "center",
        position: "absolute",
    },
    stastics: {
        top: 51,
        left: 16,
        fontSize: 18,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    groupChild: {
        backgroundColor: Color.colorRoyalblue,
        height: 15,
        width: 49,
        position: "absolute",
        top: 0,
    },
    history: {
        top: 2,
        left: 4,
        fontSize: FontSize.size_3xs,
        color: Color.colorWhite,
        textAlign: "center",
    },
    rectangleParent: {
        top: 54,
        left: 103,
        height: 15,
    },
    iconCog: {
        height: "2.63%",
        width: "5.83%",
        top: "6.38%",
        right: "27.78%",
        left: "66.39%",
        bottom: "91%",
        position: "absolute",
    },
    groupItem: {
        left: 0,
        top: 0,
    },
    a: {
        top: 7,
        fontSize: FontSize.size_xl,
        width: 11,
        height: 19,
        textAlign: "left",
        left: 10,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        color: Color.colorRoyalblue,
        position: "absolute",
    },
    ellipseParent: {
        top: 44,
        left: 330,
    },
    groupIcon: {
        height: "80%",
        width: "80.97%",
        top: "20%",
        right: "19.03%",
        left: "0%",
        bottom: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    groupInner: {
        width: 8,
        height: 8,
        left: 11,
        top: 0,
        position: "absolute",
    },
    text: {
        left: 13,
        fontSize: 6,
        width: 3,
        height: 6,
        textAlign: "left",
        top: 0,
    },
    groupParent: {
        height: "3.13%",
        width: "5.28%",
        top: "5.88%",
        right: "18.61%",
        left: "76.11%",
    },
    frameChild: {
        top: 128,
    },
    frameItem: {
        top: 170,
    },
    profitGenerated: {
        top: 125,
    },
    materialsSold: {
        top: 168,
    },
    text1: {
        top: 138,
    },
    text2: {
        top: 181,
    },
    frameInner: {
        top: 470,
        left: 26,
        width: 327,
        height: 250,
        position: "absolute",
    },
    rectangleView: {
        marginLeft: -152,
        top: 282,
        borderRadius: 25,
        backgroundColor: "#e7e7e7",
        width: 305,
        height: 160,
        left: "50%",
        position: "absolute",
    },
    vectorIcon: {
        marginLeft: -0.5,
        top: 284,
        width: 1,
        height: 158,
        left: "50%",
        position: "absolute",
    },
    frameChild1: {
        top: 362,
        left: 29,
        width: 304,
    },
    stasticsParent: {
        width: 390,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
        overflow: "hidden",
    },
    materials: {
        top: 316,
    },
    driver: {
        top: 391,
    },
    money: {
        top: 317,
    },
    location: {
        top: 388,
    },
    stats: {
        top: 328,
    },
    stats1: {
        top: 403,
    },
    stats2: {
        top: 329,
    },
    stats3: {
        top: 400,
    },
    iconWheelBarrow: {
        height: 25,
        width: 26,
        top: "43%",
        right: "76.11%",
        bottom: "57.63%",
        left: "16.11%",
        position: "absolute",
    },
    maskIcon: {
        display: "none",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    text3: {
        marginTop: -5.55,
        fontFamily: FontFamily.adobeBlank,
        width: 44,
        height: 10,
        top: "50%",
        position: "absolute",
        textAlign: "left",
        color: Color.colorRoyalblue,
    },
    color: {
        marginTop: -2.77,
        backgroundColor: Color.colorLightslategray,
        width: 6,
        display: "none",
        height: 6,
        borderRadius: 4,
        left: 0,
    },
    info: {
        left: 11,
    },
    info1: {
        left: 64,
    },
    info2: {
        left: 118,
    },
    info3: {
        left: 177,
    },
    rectangle: {
        borderStyle: "solid",
        borderColor: Color.colorAliceblue,
        borderWidth: 0.6,
    },
    line: {
        right: 27,
        bottom: 20,
        left: 0,
    },
    legend1: {
        right: -27,
        bottom: 6,
        position: "absolute",
        overflow: "hidden",
    },
    legend: {
        height: "100%",
        right: "0%",
        bottom: "0%",
        overflow: "hidden",
    },
    chart1: {
        height: "100%",
        right: "0%",
        bottom: "0%",
    },
    bg: {
        display: "none",
        height: "100%",
        right: "0%",
        bottom: "0%",
        backgroundColor: Color.colorWhite,
    },
    shapeIcon: {
        height: "99.79%",
        width: "99.51%",
        right: "0.25%",
        bottom: "0.21%",
        left: "0.25%",
        top: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    text8: {
        fontSize: 11,
        lineHeight: 17,
        width: 80,
        height: 21,
        left: 0,
        top: 0,
    },
    text9: {
        top: 17,
        width: 60,
        lineHeight: 11,
        fontSize: 7,
        left: 10,
        height: 15,
    },
    text7: {
        marginTop: -13.31,
        marginLeft: -39.94,
        height: 32,
        width: 80,
        left: "50%",
        overflow: "hidden",
    },
    chart3: {
        marginTop: -61.57,
        marginLeft: -60.18,
        width: 121,
        height: 121,
        left: "50%",
        overflow: "hidden",
    },
    chart2: {
        height: "85.71%",
        bottom: "14.29%",
    },
    chart: {
        top: 90,
        left: -1,
        width: 208,
        height: 182,
        position: "absolute",
    },
    iconWallet: {
        height: 25,
        width: 26,
        top: "43%",
        right: "30.69%",
        bottom: "57.5%",
        left: "56%",
        position: "absolute",
    },
    iconTruckDriver: {
        height: 28,
        width: 26,
        top: "53%",
        right: "77.78%",
        bottom: "47.86%",
        left: "15.83%",
        position: "absolute",
    },
    iconAlternateMapMarker: {
        height: 33,
        width: 26,
        top: "53%",
        right: "37%",
        bottom: "48.38%",
        //left: "46% ",
        position: "absolute",
    },
    statsSection: {
        flex: 1,
        overflow: "hidden",
        width: "100%",
        height: 800,
        backgroundColor: Color.colorWhite,
    },
});

export default Stats;
