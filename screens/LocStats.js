import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyless1";

const LocStats = () => {
    return (
        <View style={[styles.materialStats, styles.materialStatsLayout]}>
            <LinearGradient
                style={[styles.stasticsParent, styles.materialStatsLayout]}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Text style={styles.stastics}>STASTICS</Text>
                <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Text style={styles.history}>HISTORY</Text>
                </View>
                <Image
                    style={styles.iconCog}
                    contentFit="cover"
                    source={require("../assets/settings.png")}
                />
                <View style={[styles.ellipseParent, styles.groupItemLayout]}>
                    <Image
                        style={[styles.groupItem, styles.groupItemLayout]}
                        contentFit="cover"
                        source={require("../assets/ellipse-1.png")}
                    />
                    <Text style={[styles.a, styles.aTypo]}>A</Text>
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
                <View style={[styles.frameChild, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameItemLayout]} />
                <View style={[styles.frameInner, styles.frameLayout]} />
            </LinearGradient>
            <View style={styles.materialsParent}>
                <Text style={[styles.materials, styles.statsTypo]}>MATERIALS</Text>
                <Text style={[styles.stats, styles.statsTypo]}>STATS</Text>
                <Image
                    style={[styles.iconWheelBarrow, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/barrow.png")}
                />
            </View>
            <View style={[styles.materialStatsChild, styles.frameItemLayout]} />
            <Text style={[styles.cement, styles.text1Typo]}>CEMENT</Text>
            <Text style={[styles.text1, styles.textClr]}>12,389</Text>
            <Text style={[styles.text2, styles.textTypo]}>1,28,393</Text>
            <Text style={[styles.text3, styles.textTypo]}>45,456</Text>
            <Text style={[styles.text4, styles.text4Typo]}>3872</Text>
            <Text style={[styles.bagsSold, styles.soldTypo1]}>BAGS SOLD</Text>
            <Text style={[styles.blocksSold, styles.soldTypo]}>BLOCKS SOLD</Text>
            <Text style={[styles.tonsSold, styles.soldTypo]}>TONS SOLD</Text>
            <Text style={[styles.rodsSold, styles.soldTypo1]}>RODS SOLD</Text>
            <Text style={[styles.bricks, styles.sandTypo]}>BRICKS</Text>
            <Text style={[styles.sand, styles.sandTypo]}>SAND</Text>
            <Text style={[styles.steel, styles.text4Typo]}>STEEL</Text>
            <View style={styles.barchartFrame732}>
                <View style={[styles.verticalGridLinesParent, styles.verticalLayout]}>
                    <Image
                        style={styles.verticalGridLines}
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
                <View style={[styles.verticalGridLinesGroup, styles.verticalLayout]}>
                    <Image
                        style={[styles.verticalGridLines1, styles.gridPosition]}
                        contentFit="cover"
                        source={require("../assets/vector-1.png")}
                    />
                    <Image
                        style={[styles.verticalGridLines1, styles.gridPosition]}
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
            <Text style={[styles.topSellingMaterials, styles.text1Typo]}>
                TOP SELLING MATERIALS
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    materialStatsLayout: {
        overflow: "hidden",
        height: 800,
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
    frameLayout: {

        height: 135,
        width: 135,
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_lg,
        top: 472,
        position: "absolute",
    },
    frameItemLayout: {
        top: 315,
        height: 135,
        width: 135,
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_lg,
        position: "absolute",
    },
    statsTypo: {
        left: 39,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    text1Typo: {
        fontFamily: FontFamily.interBold,
        textAlign: "left",
        fontWeight: "700",
        position: "absolute",
    },
    textClr: {
        color: Color.colorMediumspringgreen,
        fontSize: FontSize.size_2xl,
        top: 349,
    },
    textTypo: {
        top: 515,
        color: Color.colorMediumspringgreen,
        fontSize: FontSize.size_2xl,
        fontFamily: FontFamily.interBold,
        textAlign: "left",
        fontWeight: "700",
        position: "absolute",
    },
    text4Typo: {
        left: 233,
        fontFamily: FontFamily.interBold,
        textAlign: "left",
        fontWeight: "700",
        position: "absolute",
    },
    soldTypo1: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.interBold,
        textAlign: "left",
        color: Color.colorBlack,
        fontWeight: "700",
        position: "absolute",
    },
    soldTypo: {
        top: 540,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.interBold,
        textAlign: "left",
        color: Color.colorBlack,
        fontWeight: "700",
        position: "absolute",
    },
    sandTypo: {
        top: 568,
        fontFamily: FontFamily.interBold,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        color: Color.colorBlack,
        fontWeight: "700",
        position: "absolute",
    },
    verticalLayout: {
        height: 100,
        width: 297,
        position: "absolute",
    },
    gridPosition: {
        width: 277,
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
    stastics: {
        top: 51,
        left: 16,
        fontSize: 18,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        color: Color.colorBlack,
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
        top: 54,
        left: 103,
        height: 15,
        width: 49,
        position: "absolute",
    },
    iconCog: {
        height: "2.63%",
        width: "5.83%",
        top: "6.38%",
        right: "27.78%",
        left: "66.39%",
        maxHeight: "100%",
        maxWidth: "100%",
        bottom: "91%",
        position: "absolute",
        overflow: "hidden",
    },
    groupItem: {
        left: 0,
        top: 0,
    },
    a: {
        top: 7,
        fontSize: 20,
        color: Color.colorRoyalblue,
        width: 11,
        height: 19,
        left: 11,
    },
    ellipseParent: {
        top: 44,
        left: 307,
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
        top: "5.88%",
        right: "18.61%",
        left: "76.11%",
        bottom: "91%",
        position: "absolute",
    },
    frameChild: {
        left: 193,
    },
    frameItem: {
        left: 193,
    },
    frameInner: {
        left: 37,
    },
    stasticsParent: {
        width: 390,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
    },
    materials: {
        top: 5,
    },
    stats: {
        top: 17,
    },
    iconWheelBarrow: {
        height: "96.55%",
        width: "29.79%",
        top: "0%",
        right: "70.21%",
        bottom: "3.45%",
    },
    materialsParent: {
        top: 109,
        left: 133,
        width: 94,
        height: 29,
        position: "absolute",
    },
    materialStatsChild: {
        left: 36,
    },
    cement: {
        left: 66,
        fontSize: FontSize.size_mid,
        top: 412,
        color: Color.colorBlack,
    },
    text1: {
        left: 67,
        fontFamily: FontFamily.interBold,
        textAlign: "left",
        fontWeight: "700",
        position: "absolute",
    },
    text2: {
        left: 58,
    },
    text3: {
        left: 222,
    },
    text4: {
        color: Color.colorMediumspringgreen,
        fontSize: FontSize.size_2xl,
        top: 349,
    },
    bagsSold: {
        top: 374,
        left: 69,
    },
    blocksSold: {
        left: 61,
    },
    tonsSold: {
        left: 225,
    },
    rodsSold: {
        top: 375,
        left: 226,
    },
    bricks: {
        left: 71,
    },
    sand: {
        left: 235,
    },
    steel: {
        fontSize: FontSize.size_mid,
        top: 412,
        color: Color.colorBlack,
    },
    verticalGridLines: {
        width: 278,
        height: 85,
        left: 20,
        top: 4,
        position: "absolute",
    },
    horizontalGridLines: {
        height: 86,
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
        width: 350,
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
        height: 66,
        left: 138,
        top: 5,
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
        top: -30,
        left: 75,
    },
    verticalGridLines1: {
        height: 85,
    },
    verticalGridLinesGroup: {
        top: 835,
        left: 74,
    },
    barchartFrame732: {
        top: 201,
        left: -44,
        width: 376,
        height: 74,
        position: "absolute",
    },
    topSellingMaterials: {
        marginLeft: -57,
        top: 291,
        left: "50%",
        fontSize: 9,
        color: Color.colorBlack,
        fontFamily: FontFamily.interBold,
    },
    materialStats: {
        backgroundColor: "#969696",
        flex: 1,
        width: "100%",
    },
});

export default LocStats;
