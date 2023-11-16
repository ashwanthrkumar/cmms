import * as React from "react";
import { Pressable, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStylesDS";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./Profile";
import IndDri from "./IndDri";
import { NavigationContainer } from '@react-navigation/native';
function DriverMain({ navigation }) {

    return (
        <View style={[styles.driverStats, styles.driverStatsLayout]}>
            <LinearGradient
                style={styles.driverStatsChild}
                locations={[0, 1]}
                colors={["#dfeaf6", "#d2e7ff"]}
            />
            <View style={[styles.driversParent, styles.driverStatsLayout]}>
                <Text style={[styles.drivers, styles.driversTypo]}>DRIVERS</Text>
                <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Text style={[styles.history, styles.driversTypo]}>HISTORY</Text>
                </View>
                <Image
                    style={styles.iconCog}
                    contentFit="cover"
                    source={require("../assets/settings.png")}
                />
                <View style={[styles.ellipseParent, styles.parentLayout]}>
                    <Image
                        style={[styles.groupItem, styles.parentLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-1.png")}
                    />
                    <Text onPress={() => navigation.navigate('Profile')} style={[styles.a, styles.aTypo]}>A</Text>
                </View>
                <View style={styles.groupParent}>
                    <Image
                        style={[styles.groupIcon, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/group.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.groupInnerLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-2.png")}
                    />
                    <Text style={[styles.text, styles.aTypo]}>1</Text>
                </View>
                <View style={styles.verticalGridLinesParent}>
                    <Image
                        style={[styles.verticalGridLines, styles.gridPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-1.png")}
                    />
                    <Image
                        style={[styles.horizontalGridLines, styles.gridPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-3.png")}
                    />
                    <View style={styles.leftLabels}>
                        <Text style={[styles.leftLabel732, styles.leftTypo]}>400K</Text>
                        <Text style={[styles.leftLabel7321, styles.leftLabel7321Position]}>
                            300K
                        </Text>
                        <Text style={[styles.leftLabel7322, styles.leftTypo]}>200K</Text>
                        <Text style={[styles.leftLabel7323, styles.leftTypo]}>100K</Text>
                        <Text style={[styles.leftLabel7324, styles.leftTypo]}>0K</Text>
                    </View>
                    <View style={[styles.bottomLabels, styles.groupInnerLayout]}>
                        <Text style={[styles.bottomLabel732, styles.bottomTypo]}>10/1</Text>
                        <Text style={[styles.bottomLabel7321, styles.bottomTypo]}>
                            10/2
                        </Text>
                        <Text style={[styles.bottomLabel7322, styles.bottomTypo]}>
                            10/3
                        </Text>
                        <Text style={[styles.bottomLabel7323, styles.bottomTypo]}>
                            10/4
                        </Text>
                        <Text style={[styles.bottomLabel7324, styles.bottomTypo]}>
                            10/5
                        </Text>
                        <Text style={[styles.bottomLabel7325, styles.bottomTypo]}>
                            10/6
                        </Text>
                        <Text style={[styles.bottomLabel7326, styles.bottomTypo]}>
                            10/7
                        </Text>
                        <Text style={[styles.bottomLabel7327, styles.bottomTypo]}>
                            10/8
                        </Text>
                        <Text style={[styles.bottomLabel7328, styles.bottomTypo]}>
                            10/9
                        </Text>
                        <Text style={[styles.bottomLabel7329, styles.rect73209Position]}>
                            10/10
                        </Text>
                    </View>
                    <View style={[styles.dataSeries, styles.seriesLayout]}>
                        <View style={[styles.series0, styles.seriesLayout]}>
                            <View style={[styles.rect7320, styles.rectLayout1]} />
                            <View style={[styles.rect73201, styles.rectLayout]} />
                            <View style={[styles.rect73202, styles.rectLayout1]} />
                            <View style={[styles.rect73203, styles.rectLayout]} />
                            <View style={[styles.rect73204, styles.rectLayout1]} />
                            <View style={[styles.rect73205, styles.rectLayout1]} />
                            <View style={[styles.rect73206, styles.rectLayout1]} />
                            <View style={[styles.rect73207, styles.rectLayout1]} />
                            <View style={[styles.rect73208, styles.rectLayout1]} />
                            <View style={[styles.rect73209, styles.rectLayout1]} />
                        </View>
                    </View>
                </View>
                <View style={[styles.driverParent, styles.parentLayout]}>
                    <Text style={[styles.driver, styles.statsTypo]}>DRIVER</Text>
                    <Text style={[styles.stats, styles.statsTypo]}>STATS</Text>
                    <Image
                        style={[styles.iconTruckDriver, styles.iconPosition]}
                        contentFit="cover"
                        source={require("../assets/driver.png")}
                    />
                </View>
                <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.ashwanth, styles.mohanTypo]}>Ashwanth</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('IndDri')}
                        style={[styles.viewDetailsParent, styles.leftLabel7321Position]}
                    >
                        <Text style={[styles.viewDetails, styles.mohanTypo]}>
                            VIEW DETAILS
                        </Text>
                        <Image
                            style={[styles.iconAngleDoubleRight, styles.iconPosition]}
                            contentFit="cover"
                            source={require("../assets/right.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.mohan, styles.mohanTypo]}>Mohan</Text>
                    <View
                        style={[styles.viewDetailsParent, styles.leftLabel7321Position]}
                    >
                        <Text style={[styles.viewDetails, styles.mohanTypo]}>
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
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.anirudh, styles.mohanTypo]}>Anirudh</Text>
                    <View
                        style={[styles.viewDetailsParent, styles.leftLabel7321Position]}
                    >
                        <Text style={[styles.viewDetails, styles.mohanTypo]}>
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
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.anirudh, styles.mohanTypo]}>Chiranth</Text>
                    <View
                        style={[styles.viewDetailsParent, styles.leftLabel7321Position]}
                    >
                        <Text style={[styles.viewDetails, styles.mohanTypo]}>
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
                    <View style={[styles.rectangleView, styles.rectangleBorder]} />
                    <LinearGradient
                        style={[styles.rectangleLineargradient, styles.rectangleBorder]}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.dhanay, styles.mohanTypo]}>Dhanay</Text>
                    <View
                        style={[styles.viewDetailsParent, styles.leftLabel7321Position]}
                    >
                        <Text style={[styles.viewDetails, styles.mohanTypo]}>
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
        </View>
    );
};

const RootStack = createStackNavigator();

function DriStats() {
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={DriverMain} options={{ headerShown: false }} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    <RootStack.Screen name="Profile" component={Profile} />
                    <RootStack.Screen name="IndDri" component={IndDri} options={{ headerShown: false }} />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    driverStatsLayout: {
        overflow: "hidden",
        height: 800,
    },
    driversTypo: {
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    parentLayout: {
        height: 36,
        position: "absolute",
    },
    aTypo: {
        textAlign: "left",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    iconPosition: {
        left: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    groupInnerLayout: {
        height: 8,
        position: "absolute",
    },
    gridPosition: {
        left: 20,
        top: 4,
        position: "absolute",
    },
    leftTypo: {
        textAlign: "right",
        color: Color.colorSlategray,
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_8xs,
        width: 15,
        height: 8,
        left: 0,
    },
    leftLabel7321Position: {
        top: 21,
        position: "absolute",
    },
    bottomTypo: {
        width: 20,
        fontSize: FontSize.size_6xs,
        color: Color.colorSlategray,
        fontFamily: FontFamily.interRegular,
        height: 8,
        textAlign: "center",
        position: "absolute",
    },
    rect73209Position: {
        left: 249,
        top: 0,
    },
    seriesLayout: {
        width: 271,
        height: 70,
        position: "absolute",
    },
    rectLayout1: {
        width: 23,
        backgroundColor: Color.colorRoyalblue,
        position: "absolute",
    },
    rectLayout: {
        height: 5,
        top: 66,
        width: 23,
        backgroundColor: Color.colorRoyalblue,
        position: "absolute",
    },
    statsTypo: {
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        fontSize: FontSize.size_xs,
        left: 36,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    groupViewLayout: {
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
    mohanTypo: {
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    driverStatsChild: {
        width: 390,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
        height: 800,
    },
    drivers: {
        top: 29,
        left: 21,
        fontSize: 18,
        color: Color.colorBlack,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    groupChild: {
        borderRadius: 4,
        backgroundColor: Color.colorRoyalblue,
        height: 15,
        width: 49,
        left: 0,
        top: 0,
        position: "absolute",
    },
    history: {
        top: 2,
        left: 4,
        color: Color.colorWhite,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    rectangleParent: {
        top: 32,
        left: 103,
        height: 15,
        width: 49,
        position: "absolute",
    },
    iconCog: {
        height: "2.63%",
        width: "5.83%",
        top: "3.63%",
        right: "27.78%",
        left: "66.39%",
        maxHeight: "100%",
        maxWidth: "100%",
        bottom: "93.75%",
        position: "absolute",
        overflow: "hidden",
    },
    groupItem: {
        width: 36,
        height: 36,
        left: 0,
        top: 0,
    },
    a: {
        top: 7,
        fontSize: 16,
        color: Color.colorRoyalblue,
        width: 11,
        height: 19,
        left: 11,
    },
    ellipseParent: {
        top: 22,
        left: 307,
        width: 36,
        height: 36,
    },
    groupIcon: {
        height: "80%",
        width: "80.97%",
        top: "20%",
        right: "19.03%",
        bottom: "0%",
        left: "0%",
    },
    groupInner: {
        width: 8,
        left: 11,
        top: 0,
    },
    text: {
        left: 13,
        fontSize: 6,
        width: 3,
        height: 6,
        color: Color.colorWhite,
        top: 0,
    },
    groupParent: {
        height: "3.13%",
        width: "5.28%",
        top: "3.13%",
        right: "18.61%",
        left: "76.11%",
        bottom: "93.75%",
        position: "absolute",
    },
    verticalGridLines: {
        width: 278,
        height: 85,
    },
    horizontalGridLines: {
        width: 277,
        height: 86,
    },
    leftLabel732: {
        top: 0,
        position: "absolute",
    },
    leftLabel7321: {
        textAlign: "right",
        color: Color.colorSlategray,
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_8xs,
        width: 15,
        height: 8,
        left: 0,
    },
    leftLabel7322: {
        top: 43,
        position: "absolute",
    },
    leftLabel7323: {
        top: 64,
        position: "absolute",
    },
    leftLabel7324: {
        top: 85,
        position: "absolute",
    },
    leftLabels: {
        height: 94,
        width: 15,
        left: 0,
        top: 0,
        position: "absolute",
    },
    bottomLabel732: {
        left: 0,
        top: 0,
    },
    bottomLabel7321: {
        left: 28,
        top: 0,
    },
    bottomLabel7322: {
        left: 55,
        top: 0,
    },
    bottomLabel7323: {
        left: 83,
        top: 0,
    },
    bottomLabel7324: {
        left: 111,
        top: 0,
    },
    bottomLabel7325: {
        left: 138,
        top: 0,
    },
    bottomLabel7326: {
        left: 166,
        top: 0,
    },
    bottomLabel7327: {
        left: 194,
        top: 0,
    },
    bottomLabel7328: {
        left: 221,
        top: 0,
    },
    bottomLabel7329: {
        width: 20,
        fontSize: FontSize.size_6xs,
        color: Color.colorSlategray,
        fontFamily: FontFamily.interRegular,
        height: 8,
        textAlign: "center",
        position: "absolute",
    },
    bottomLabels: {
        top: 92,
        left: 24,
        width: 269,
    },
    rect7320: {
        top: 10,
        height: 61,
        left: 0,
    },
    rect73201: {
        left: 28,
    },
    rect73202: {
        top: 36,
        height: 34,
        left: 55,
    },
    rect73203: {
        left: 83,
    },
    rect73204: {
        height: 51,
        top: 19,
        left: 111,
    },
    rect73205: {
        top: 5,
        height: 66,
        left: 138,
    },
    rect73206: {
        top: 39,
        height: 32,
        left: 166,
    },
    rect73207: {
        top: 61,
        height: 10,
        left: 194,
    },
    rect73208: {
        top: 27,
        height: 44,
        left: 221,
    },
    rect73209: {
        height: 70,
        left: 249,
        top: 0,
    },
    series0: {
        height: 70,
        left: 0,
        top: 0,
    },
    dataSeries: {
        left: 23,
        height: 70,
        top: 19,
    },
    verticalGridLinesParent: {
        top: 166,
        left: 27,
        width: 297,
        height: 100,
        position: "absolute",
    },
    driver: {
        top: 3,
        width: 43,
        height: 15,
    },
    stats: {
        top: 18,
        width: 38,
        height: 14,
    },
    iconTruckDriver: {
        height: "100%",
        width: "30.7%",
        top: "0%",
        right: "69.3%",
        bottom: "0%",
        left: "0%",
    },
    driverParent: {
        top: 98,
        left: 141,
        width: 79,
    },
    rectangleView: {
        height: 60,
        width: 327,
        left: 0,
        top: 0,
    },
    rectangleLineargradient: {
        left: 205,
        width: 106,
        height: 23,
        top: 19,
        backgroundColor: "transparent",
    },
    ashwanth: {
        left: 32,
        fontSize: FontSize.size_2xl,
        top: 20,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
    },
    viewDetails: {
        left: 17,
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
        left: 216,
        width: 84,
        height: 20,
    },
    rectangleGroup: {
        top: 309,
        left: 16,
        width: 327,
        position: "absolute",
    },
    mohan: {
        left: 34,
        fontSize: FontSize.size_2xl,
        top: 20,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
    },
    rectangleContainer: {
        top: 393,
        left: 16,
        width: 327,
        position: "absolute",
    },
    anirudh: {
        left: 31,
        fontSize: FontSize.size_2xl,
        top: 20,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
    },
    groupView: {
        top: 477,
        left: 16,
        width: 327,
        position: "absolute",
    },
    rectangleParent1: {
        top: 561,
        left: 16,
        width: 327,
        position: "absolute",
    },
    dhanay: {
        left: 35,
        fontSize: FontSize.size_2xl,
        top: 20,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
    },
    rectangleParent2: {
        top: 645,
        left: 16,
        width: 327,
        position: "absolute",
    },
    driversParent: {
        left: 15,
        width: 360,
        top: 0,
        position: "absolute",
    },
    driverStats: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
    },
});

export default DriStats;

