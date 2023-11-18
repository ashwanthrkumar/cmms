import * as React from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize } from "../styling/GlobalStylesMS";
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./Profile";
import { NavigationContainer } from '@react-navigation/native';
import Settings from "./Settings";
function MonMain({ navigation }) {
    return (
        <View style={[styles.moneyStats, styles.moneyLayout]}>
            <LinearGradient
                style={[styles.moneyParent, styles.moneyLayout]}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Text style={styles.money}>MONEY</Text>
                <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Text style={styles.history}>HISTORY</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
                    <Image
                        style={[styles.iconCog, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/settings.png")}
                    /></TouchableWithoutFeedback>
                <View style={[styles.ellipseParent, styles.groupItemLayout]}>
                    <Image
                        style={[styles.groupItem, styles.groupItemLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-1.png")}
                    />
                    <Text onPress={() => navigation.navigate('Profile')} style={[styles.a, styles.aTypo]}>A</Text>
                </View>
                <View style={[styles.groupParent, styles.iconCogPosition]}>
                    <Image
                        style={[styles.groupIcon, styles.iconLayout2]}
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
                <View style={[styles.frameChild, styles.childLayout]} />
                <View style={[styles.frameItem, styles.itemLayout]} />
                <View style={styles.moneyGroup}>
                    <Text style={[styles.money1, styles.statsTypo]}>MONEY</Text>
                    <Text style={[styles.stats, styles.statsTypo]}>STATS</Text>
                    <Image
                        style={[styles.iconWallet, styles.iconLayout2]}
                        contentFit="cover"
                        source={require("../assets/wallet.png")}
                    />
                </View>
                <View style={[styles.verticalGridLinesParent, styles.verticalLayout]}>
                    <Image
                        style={[styles.verticalGridLines, styles.verticalPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-1.png")}
                    />
                    <Image
                        style={[styles.verticalGridLines, styles.verticalPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-3.png")}
                    />
                    <View style={styles.leftLabels}>
                        <Text style={[styles.leftLabel732, styles.leftTypo]}>400K</Text>
                        <Text style={[styles.leftLabel7321, styles.leftTypo]}>300K</Text>
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
            </LinearGradient>

            <View style={[styles.moneyStatsChild, styles.childLayout]} />
            <View style={[styles.moneyStatsItem, styles.itemLayout]} />
            <Image
                style={[styles.iconDownload, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/upload.png")}
            />
            <Image
                style={[styles.iconDownload1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/upload.png")}
            />
            <Image
                style={[styles.iconDownload2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/download.png")}
            />
            <Image
                style={[styles.iconDownload3, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/download.png")}
            />
            <Text style={[styles.todaysMoneyStatistics, styles.moneyTypo2]}>
                TODAY’S MONEY STATISTICS
            </Text>
            <Text style={[styles.monthsMoneyStatistics, styles.moneyTypo2]}>
                MONTH’S MONEY STATISTICS
            </Text>
            <Text style={[styles.moneyIn, styles.moneyTypo1]}>MONEY IN</Text>
            <Text style={[styles.moneyIn1, styles.moneyTypo]}>MONEY IN</Text>
            <Text style={[styles.moneyOut, styles.moneyTypo1]}>MONEY OUT</Text>
            <Text style={[styles.moneyOut1, styles.moneyTypo]}>MONEY OUT</Text>
            <Text style={[styles.text2, styles.textTypo1]}>₹ 50,968</Text>
            <Text style={[styles.text3, styles.textTypo1]}>₹ 50,968</Text>
            <Text style={[styles.text4, styles.textTypo]}>₹ 45,474</Text>
            <Text style={[styles.text5, styles.textTypo]}>₹ 45,474</Text>
            <View style={styles.barchartFrame732}>
                <View style={[styles.verticalGridLinesGroup, styles.verticalLayout]}>
                    <Image
                        style={[styles.verticalGridLines1, styles.verticalPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-1.png")}
                    />
                    <Image
                        style={styles.horizontalGridLines1}
                        contentFit="cover"
                        source={require("../assets/vector-3.png")}
                    />
                    <View style={styles.leftLabels}>
                        <Text style={[styles.leftLabel732, styles.leftTypo]}>400K</Text>
                        <Text style={[styles.leftLabel7321, styles.leftTypo]}>300K</Text>
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
                <View
                    style={[styles.verticalGridLinesContainer, styles.verticalLayout]}
                >
                    <Image
                        style={[styles.verticalGridLines, styles.verticalPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-1.png")}
                    />
                    <Image
                        style={[styles.verticalGridLines, styles.verticalPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-3.png")}
                    />
                    <View style={styles.leftLabels}>
                        <Text style={[styles.leftLabel732, styles.leftTypo]}>400K</Text>
                        <Text style={[styles.leftLabel7321, styles.leftTypo]}>300K</Text>
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
            </View>
        </View>
    );
};

const RootStack = createStackNavigator();

function MonStats() {
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={MonMain} options={{ headerShown: false }} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    <RootStack.Screen name="Profile" component={Profile} />
                    <RootStack.Screen name="Settings" component={Settings} />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    moneyLayout: {
        overflow: "hidden",
        height: 800,
    },
    iconLayout2: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    groupItemLayout: {
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
    iconCogPosition: {
        bottom: "91%",
        position: "absolute",
    },
    groupInnerLayout: {
        height: 8,
        position: "absolute",
    },
    childLayout: {
        height: 135,
        width: 135,
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_lg,
        top: 315,
        position: "absolute",
    },
    itemLayout: {
        top: 500,
        height: 135,
        width: 135,
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_lg,
        position: "absolute",
    },
    statsTypo: {
        left: 38,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.black,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    verticalLayout: {
        height: 100,
        width: 297,
        position: "absolute",
    },
    verticalPosition: {
        height: 85,
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
    fillPosition: {
        bottom: "96.49%",
        position: "absolute",
    },
    iconLayout1: {
        bottom: "23.33%",
        top: "86%",
        width: "9.89%",
        height: "3.35%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    iconLayout: {
        bottom: "49.15%",
        top: "57%",
        width: "9.89%",
        height: "3.35%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    moneyTypo2: {
        fontFamily: FontFamily.interBold,
        fontSize: FontSize.size_4xs,
        left: "50%",
        textAlign: "left",
        color: Color.black,
        fontWeight: "700",
        position: "absolute",
    },
    moneyTypo1: {
        top: 394,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.black,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    moneyTypo: {
        top: 575,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.black,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo1: {
        color: Color.colorLimegreen,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    textTypo: {
        color: Color.colorCrimson,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    money: {
        top: 8,
        left: 27,
        fontSize: 18,
        textAlign: "center",
        color: Color.black,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
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
        position: "absolute",
    },
    rectangleParent: {
        top: 13,
        left: 103,
        height: 15,
        width: 49,
        position: "absolute",
    },
    iconCog: {
        height: "2.63%",
        width: "5.83%",
        top: 8,
        right: "27.78%",
        left: 265,
        bottom: "91%",
        position: "absolute",
    },
    groupItem: {
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
        top: 0,
        left: 340,
    },
    groupIcon: {
        height: "80%",
        width: "80.97%",
        top: "20%",
        right: "19.03%",
        bottom: "0%",
        left: "0%",
        position: "absolute",
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
        top: 5,
        right: "18.61%",
        left: 305,
    },
    frameChild: {
        left: 200,
    },
    frameItem: {
        left: 200,
    },
    money1: {
        top: 4,
        left: 38,
    },
    stats: {
        top: 16,
    },
    iconWallet: {
        height: "101.82%",
        width: "42.47%",
        top: "-5.36%",
        right: "59.59%",
        bottom: "3.54%",
        left: "-2.05%",
        position: "absolute",
    },
    moneyGroup: {
        top: 70,
        left: 160,
        width: 73,
        height: 28,
        position: "absolute",
    },
    verticalGridLines: {
        width: 277,
    },
    leftLabel732: {
        top: 0,
    },
    leftLabel7321: {
        top: 21,
    },
    leftLabel7322: {
        top: 43,
    },
    leftLabel7323: {
        top: 64,
    },
    leftLabel7324: {
        top: 85,
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
        top: 1070,
        left: 838,
    },
    moneyParent: {
        width: 392,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
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
    text1: {
        top: 13,
        left: 16,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        opacity: 0.6,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "left",
        color: Color.black,
        position: "absolute",
    },
    moneyStatsChild: {
        left: 50,
    },
    moneyStatsItem: {
        left: 50,
    },
    iconDownload: {
        right: "31.34%",
        left: "54%",
    },
    iconDownload1: {
        right: "31.17%",
        left: "54%",
    },
    iconDownload2: {
        right: "74.78%",
        left: "13.33%",
    },
    iconDownload3: {
        right: "74.95%",
        left: "13.16%",
    },
    todaysMoneyStatistics: {
        marginLeft: -100,
        top: 270,
    },
    monthsMoneyStatistics: {
        marginLeft: -105,
        top: 470,
    },
    moneyIn: {
        left: 95,
    },
    moneyIn1: {
        left: 94,
    },
    moneyOut: {
        left: 252,
    },
    moneyOut1: {
        left: 251,
    },
    text2: {
        top: 369,
        left: 95,
    },
    text3: {
        top: 550,
        left: 94,
    },
    text4: {
        top: 369,
        left: 252,
    },
    text5: {
        top: 550,
        left: 251,
    },
    verticalGridLines1: {
        width: 278,
    },
    horizontalGridLines1: {
        height: 86,
        width: 277,
        left: 20,
        top: 4,
        position: "absolute",
    },
    verticalGridLinesGroup: {
        top: -30,
        left: 75,
    },
    verticalGridLinesContainer: {
        top: 835,
        left: 74,
    },
    barchartFrame732: {
        top: 182,
        left: -43,
        width: 376,
        height: 74,
        position: "absolute",
    },
    moneyStats: {
        backgroundColor: "#add1f0",
        flex: 1,
        width: "100%",
    },
});

export default MonStats;
