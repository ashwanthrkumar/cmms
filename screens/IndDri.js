import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStylesID";

const IndDri = () => {
    return (
        <View style={[styles.individualStats1, styles.bgBg]}>
            <LinearGradient
                style={styles.individualStats1Child}
                locations={[0, 1]}
                colors={["#dfeaf6", "#d2e7ff"]}
            />
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupBorder]} />
                <LinearGradient
                    style={[styles.groupItem, styles.groupBorder]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={[styles.mohan, styles.mohanFlexBox]}>Mohan</Text>
                <Text style={[styles.deliveryHistory, styles.textTypo]}>
                    Delivery History
                </Text>
                <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
                    <LinearGradient
                        style={styles.groupInner}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.viewDetails, styles.text10Typo1]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>#23923</Text>
                </View>
                <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
                    <LinearGradient
                        style={styles.groupInner}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.viewDetails, styles.text10Typo1]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>#23923</Text>
                </View>
                <View style={[styles.groupView, styles.groupParentLayout]}>
                    <LinearGradient
                        style={styles.groupInner}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.viewDetails, styles.text10Typo1]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>#23923</Text>
                </View>
                <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
                    <LinearGradient
                        style={styles.groupInner}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.viewDetails, styles.text10Typo1]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>#23923</Text>
                </View>
                <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
                    <LinearGradient
                        style={styles.groupInner}
                        locations={[0, 1]}
                        colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                    />
                    <Text style={[styles.viewDetails, styles.text10Typo1]}>
                        VIEW DETAILS
                    </Text>
                    <Image
                        style={[styles.iconAngleDoubleRight, styles.iconGroupLayout]}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                    <Text style={[styles.text, styles.textTypo]}>#23923</Text>
                </View>
                <Image
                    style={[styles.groupIcon, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require("../assets/upup.png")}
                />
                <View style={styles.chart}>
                    <View style={[styles.bg, styles.iconPosition]} />
                    <View style={[styles.grid, styles.gridPosition]}>
                        <View style={[styles.grid1, styles.iconPosition]}>
                            <View style={styles.verticalLines}>
                                <View style={[styles.row, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>20/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row2, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>19/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row4, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>18/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row6, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>17/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row8, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>16/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row10, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>15/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row12, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>14/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row14, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>13/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row16, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>12/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row18, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>11/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row20, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>10/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row22, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>9/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row24, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>8/12</Text>
                                        <View style={[styles.line, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row26, styles.rowPosition]}>
                                    <View style={[styles.row1, styles.iconPosition]}>
                                        <View style={styles.container} />
                                        <Text style={[styles.number, styles.text5Typo]}>7/12</Text>
                                        <View style={[styles.line26, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                        <View style={[styles.line1, styles.linePosition1]}>
                                            <View
                                                style={[styles.rectangle, styles.rectangleBorder]}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.horizontalLines}>
                                <View style={styles.row28}>
                                    <View style={[styles.rectangle28, styles.rectangleBorder]} />
                                    <Text style={[styles.text5, styles.text5Typo]}>100</Text>
                                    <View style={[styles.line28, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                    <View style={[styles.line29, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                </View>
                                <View style={[styles.row29, styles.row29Position]}>
                                    <View style={[styles.rectangle28, styles.rectangleBorder]} />
                                    <Text style={[styles.text5, styles.text5Typo]}>200</Text>
                                    <View style={[styles.line30, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                    <View style={[styles.line29, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                </View>
                                <View style={[styles.row210, styles.rowLayout]}>
                                    <View style={[styles.rectangle28, styles.rectangleBorder]} />
                                    <Text style={[styles.text5, styles.text5Typo]}>300</Text>
                                    <View style={[styles.line30, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                    <View style={[styles.line29, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                </View>
                                <View style={[styles.row211, styles.rowLayout]}>
                                    <View style={[styles.rectangle28, styles.rectangleBorder]} />
                                    <Text style={[styles.text5, styles.text5Typo]}>400</Text>
                                    <View style={[styles.line30, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                    <View style={[styles.line29, styles.linePosition]}>
                                        <View style={[styles.rectangle, styles.rectangleBorder]} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image
                        style={[styles.chartIcon, styles.gridPosition]}
                        contentFit="cover"
                        source={require("../assets/indchart.png")}
                    />
                    <View style={[styles.bubble, styles.row29Position]}>
                        <View style={[styles.pointer, styles.iconPosition]}>
                            <Image
                                style={[styles.bubbleIcon, styles.iconPosition]}
                                contentFit="cover"
                                source={require("../assets/up.png")}
                            />
                            <Text style={[styles.text9, styles.row29Position]}>
                                O 23.4 / H 42.3 / L 43.2 / C 85.6
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={[styles.drivers, styles.aTypo]}>DRIVERS</Text>
            <View style={[styles.rectangleParent3, styles.rectangleLayout]}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Text style={[styles.history, styles.text10Typo]}>HISTORY</Text>
            </View>
            <Image
                style={[styles.iconCog, styles.iconCogPosition]}
                contentFit="cover"
                source={require("../assets/settings.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
                <Image
                    style={[styles.ellipseIcon, styles.ellipseLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.a, styles.aPosition]}>A</Text>
            </View>
            <View style={[styles.groupParent, styles.iconCogPosition]}>
                <Image
                    style={[styles.groupIcon1, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require("../assets/group.png")}
                />
                <Image
                    style={[styles.groupChild4, styles.aPosition]}
                    contentFit="cover"
                    source={require("../assets/ellipse-2.png")}
                />
                <Text style={[styles.text10, styles.text10Typo]}>1</Text>
            </View>
            <View style={styles.driverParent}>
                <Text style={[styles.driver, styles.statsTypo]}>DRIVER</Text>
                <Text style={[styles.stats, styles.statsTypo]}>STATS</Text>
                <Image
                    style={[styles.iconTruckDriver, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/driver.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bgBg: {
        backgroundColor: Color.colorWhite,
        width: "100%",
    },
    groupChildLayout: {
        height: 384,
        width: 327,
    },
    groupBorder: {
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        borderRadius: Border.br_11xl,
        position: "absolute",
    },
    mohanFlexBox: {
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    textTypo: {
        fontSize: FontSize.size_sm,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        position: "absolute",
    },
    groupParentLayout: {
        height: 20,
        width: 260,
        left: 34,
        position: "absolute",
    },
    text10Typo1: {
        fontSize: FontSize.size_7xs,
        top: 0,
    },
    iconGroupLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
    },
    iconPosition: {
        height: "100%",
        bottom: "0%",
        top: "0%",
    },
    gridPosition: {
        left: 16,
        bottom: 18,
        right: 16,
        top: 14,
        position: "absolute",
        overflow: "hidden",
    },
    rowPosition: {
        width: "7.14%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
    },
    text5Typo: {
        color: Color.colorDarkgray_100,
        fontFamily: FontFamily.aestheticRomance,
        textAlign: "left",
        lineHeight: 6,
        fontSize: 3,
        left: 0,
        position: "absolute",
    },
    linePosition1: {
        width: 0,
        bottom: 7,
        top: 0,
        position: "absolute",
    },
    rectangleBorder: {
        borderWidth: 0.3,
        borderStyle: "solid",
        position: "absolute",
    },
    linePosition: {
        height: 0,
        left: 10,
        right: 0,
        position: "absolute",
    },
    row29Position: {
        top: "50%",
        position: "absolute",
    },
    rowLayout: {
        height: "25%",
        left: "0%",
        right: "0%",
        width: "100%",
    },
    aTypo: {
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    rectangleLayout: {
        height: 15,
        width: 49,
        position: "absolute",
    },
    text10Typo: {
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    iconCogPosition: {
        bottom: "92.25%",
        position: "absolute",
    },
    ellipseLayout: {
        height: 36,
        width: 36,
        position: "absolute",
    },
    aPosition: {
        left: 11,
        position: "absolute",
    },
    statsTypo: {
        left: 40,
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    individualStats1Child: {
        width: 390,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
        height: 800,
    },
    groupChild: {
        height: 384,
        width: 327,
        left: 0,
        top: 0,
    },
    groupItem: {
        top: 19,
        left: 277,
        width: 34,
        height: 23,
        backgroundColor: "transparent",
    },
    mohan: {
        fontSize: 21,
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        color: Color.colorBlack,
        left: 34,
        top: 20,
    },
    deliveryHistory: {
        top: 196,
        left: 32,
    },
    groupInner: {
        left: 187,
        width: 73,
        height: 16,
        top: 2,
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        borderRadius: Border.br_11xl,
        backgroundColor: "transparent",
        position: "absolute",
    },
    viewDetails: {
        left: 208,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
    },
    iconAngleDoubleRight: {
        height: "24.89%",
        width: "2.38%",
        top: "37.55%",
        right: "22.78%",
        bottom: "37.56%",
        left: "74.84%",
        position: "absolute",
        overflow: "hidden",
    },
    text: {
        left: 0,
        top: 0,
    },
    rectangleGroup: {
        top: 228,
    },
    rectangleContainer: {
        top: 257,
    },
    groupView: {
        top: 286,
    },
    rectangleParent1: {
        top: 315,
    },
    rectangleParent2: {
        top: 347,
    },
    groupIcon: {
        height: "2.34%",
        width: "2.21%",
        top: "6.8%",
        right: "8.83%",
        bottom: "90.86%",
        left: "88.96%",
        position: "absolute",
        overflow: "hidden",
    },
    bg: {
        display: "none",
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        width: "100%",
        backgroundColor: Color.colorWhite,
    },
    container: {
        height: "94%",
        bottom: "6%",
        left: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        width: "100%",
    },
    number: {
        width: 15,
        textAlign: "left",
        bottom: 0,
    },
    rectangle: {
        borderColor: Color.colorAliceblue,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
    },
    line: {
        display: "none",
        left: 0,
    },
    line1: {
        right: 0,
    },
    row1: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        overflow: "hidden",
        width: "100%",
    },
    row: {
        left: "92.86%",
        right: "0%",
    },
    row2: {
        right: "7.14%",
        left: "85.71%",
    },
    row4: {
        right: "14.29%",
        left: "78.57%",
    },
    row6: {
        right: "21.43%",
        left: "71.43%",
    },
    row8: {
        right: "28.57%",
        left: "64.29%",
    },
    row10: {
        right: "35.71%",
        left: "57.14%",
    },
    row12: {
        right: "42.86%",
        left: "50%",
    },
    row14: {
        right: "50%",
        left: "42.86%",
    },
    row16: {
        right: "57.14%",
        left: "35.71%",
    },
    row18: {
        right: "64.29%",
        left: "28.57%",
    },
    row20: {
        right: "71.43%",
        left: "21.43%",
    },
    row22: {
        right: "78.57%",
        left: "14.29%",
    },
    row24: {
        right: "85.71%",
        left: "7.14%",
    },
    line26: {
        left: 0,
    },
    row26: {
        right: "92.86%",
        left: "0%",
    },
    verticalLines: {
        bottom: -7,
        right: 0,
        left: 0,
        top: 0,
        position: "absolute",
        overflow: "hidden",
    },
    rectangle28: {
        width: "96.31%",
        left: "3.69%",
        backgroundColor: Color.colorGainsboro,
        borderColor: Color.colorDarkgray_200,
        display: "none",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
    },
    text5: {
        width: 9,
        height: 5,
        textAlign: "left",
        top: 0,
    },
    line28: {
        bottom: 0,
    },
    line29: {
        top: 0,
    },
    row28: {
        height: 31,
        bottom: 0,
        right: 0,
        left: 0,
        position: "absolute",
    },
    line30: {
        bottom: 0,
        display: "none",
    },
    row29: {
        bottom: "25%",
        height: "25%",
        left: "0%",
        right: "0%",
        width: "100%",
    },
    row210: {
        top: "25%",
        bottom: "50%",
        position: "absolute",
    },
    row211: {
        bottom: "75%",
        top: "0%",
        position: "absolute",
    },
    horizontalLines: {
        left: -10,
        bottom: 0,
        right: 0,
        top: 0,
        position: "absolute",
        overflow: "hidden",
    },
    grid1: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        width: "100%",
    },
    grid: {
        display: "none",
    },
    chartIcon: {
        maxHeight: "100%",
        maxWidth: "100%",
    },
    bubbleIcon: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
        width: "100%",
    },
    text9: {
        marginTop: -3.17,
        left: 2,
        fontFamily: FontFamily.aderoTrial,
        color: Color.colorDimgray,
        width: 54,
        lineHeight: 6,
        fontSize: 3,
        top: "50%",
        textAlign: "center",
    },
    pointer: {
        display: "none",
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        overflow: "hidden",
        width: "100%",
    },
    bubble: {
        marginTop: -10.87,
        marginLeft: 18.55,
        width: 58,
        height: 10,
        left: "50%",
        display: "none",
    },
    chart: {
        top: 39,
        width: 302,
        height: 167,
        left: 13,
        position: "absolute",
    },
    rectangleParent: {
        top: 208,
        left: 31,
        position: "absolute",
    },
    drivers: {
        top: 41,
        left: 36,
        fontSize: 18,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    rectangleView: {
        borderRadius: 4,
        backgroundColor: Color.colorRoyalblue,
        left: 0,
        top: 0,
    },
    history: {
        left: 4,
        fontSize: FontSize.size_3xs,
        color: Color.colorWhite,
        top: 2,
        textAlign: "center",
    },
    rectangleParent3: {
        top: 44,
        left: 118,
    },
    iconCog: {
        height: "3.0%",
        width: "5.38%",
        top: "6.5%",
        right: "29.49%",
        left: "65.13%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    ellipseIcon: {
        left: 0,
        top: 0,
    },
    a: {
        top: 7,
        fontSize: 16,
        color: Color.colorRoyalblue,
        width: 11,
        height: 19,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "left",
    },
    ellipseParent: {
        top: 34,
        left: 322,
    },
    groupIcon1: {
        height: "80%",
        width: "80.97%",
        top: "20%",
        right: "19.03%",
        left: "0%",
        bottom: "0%",
        position: "absolute",
        overflow: "hidden",
    },
    groupChild4: {
        width: 8,
        height: 8,
        top: 0,
    },
    text10: {
        width: 3,
        height: 6,
        textAlign: "left",
        left: 13,
        fontSize: FontSize.size_7xs,
        top: 0,
    },
    groupParent: {
        height: "4.13%",
        width: "4.87%",
        top: "5.63%",
        right: "21.03%",
        left: "74.1%",
    },
    driver: {
        top: 8,
    },
    stats: {
        top: 20,
        left: 40,
    },
    iconTruckDriver: {
        width: "30.67%",
        right: "69.33%",
        left: "0%",
        bottom: "0%",
        top: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    driverParent: {
        top: 114,
        left: 158,
        width: 75,
        height: 34,
        position: "absolute",
    },
    individualStats1: {
        flex: 1,
        overflow: "hidden",
        height: 800,
        width: "100%",
    },
});

export default IndDri;
