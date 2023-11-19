import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../styling/AssignStyle";

const AssignPartner = () => {
    return (
        <View style={styles.assignDeliveryPartner}>
            <LinearGradient
                style={styles.assignDeliveryPartnerChild}
                locations={[0, 1]}
                colors={["#8dc3ff", "#d2e7ff"]}
            />
            <View style={[styles.rectangleParent, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupItem, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Chiranth</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>BUSY</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupItem, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Yadhur</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>BUSY</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupItem, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Dhanush</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>BUSY</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.groupView, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupItem, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Tejas</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>BUSY</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupChild5, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Ashwanth</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign4, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>AVAILABLE</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupChild5, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Karthik</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign4, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>AVAILABLE</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleParent3, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupChild5, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Tharun</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign4, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>AVAILABLE</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupChild5, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Yashas</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign4, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>AVAILABLE</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <View style={[styles.rectangleParent5, styles.groupParentLayout]}>
                <View style={styles.groupChild} />
                <LinearGradient
                    style={[styles.groupChild5, styles.groupLayout]}
                    locations={[0, 1]}
                    colors={["#d9d9d9", "rgba(217, 217, 217, 0)"]}
                />
                <Text style={styles.chiranth}>Tanmay</Text>
                <View style={styles.assignParent}>
                    <Text style={[styles.assign4, styles.assignTypo]}>ASSIGN</Text>
                    <Text style={[styles.busy, styles.assignTypo]}>AVAILABLE</Text>
                    <Image
                        style={styles.iconAngleDoubleRight}
                        contentFit="cover"
                        source={require("../assets/right.png")}
                    />
                </View>
            </View>
            <Image
                style={[styles.emojiRedCircle, styles.emojiLayout]}
                contentFit="cover"
                source={require("../assets/red.png")}
            />
            <Image
                style={[styles.emojiRedCircle4, styles.emojiLayout]}
                contentFit="cover"
                source={require("../assets/green.png")}
            />
            <Image
                style={[styles.emojiRedCircle5, styles.emojiLayout]}
                contentFit="cover"
                source={require("../assets/green.png")}
            />
            <Image
                style={[styles.emojiRedCircle1, styles.emojiLayout]}
                contentFit="cover"
                source={require("../assets/green.png")}
            />
            <Image
                style={[styles.emojiRedCircle3, styles.emojiLayout]}
                contentFit="cover"
                source={require("../assets/red.png")}
            />
            <Image
                style={[styles.emojiRedCircle6, styles.emojiLayout]}
                contentFit="cover"
                source={require("../assets/red.png")}
            />
            <Image
                style={[styles.emojiRedCircle2, styles.emojiLayout]}
                contentFit="cover"
                source={require("../assets/green.png")}
            />




        </View>
    );
};

const styles = StyleSheet.create({
    groupParentLayout: {
        height: 60,
        width: 327,
        left: 31,
        position: "absolute",
    },
    groupLayout: {
        height: 23,
        width: 79,
        left: 225,
        top: 19,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: Border.br_11xl,
        backgroundColor: "transparent",
        position: "absolute",
    },
    assignTypo: {
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        position: "absolute",
    },
    emojiLayout: {
        left: "16.41%",
        right: "80.51%",
        width: "3.08%",
        height: "1.5%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    assignDeliveryPartnerChild: {
        width: 390,
        backgroundColor: "transparent",
        top: 0,
        left: 0,
        position: "absolute",
        height: 800,
    },
    groupChild: {
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: Border.br_11xl,
        borderColor: Color.colorBlack,
        height: 60,
        width: 327,
        left: 0,
        top: 0,
        position: "absolute",
    },
    groupItem: {
        borderColor: Color.colorGray,
    },
    chiranth: {
        top: 12,
        fontSize: FontSize.size_2xl,
        textAlign: "center",
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        color: Color.colorBlack,
        left: 31,
        position: "absolute",
    },
    assign: {
        color: Color.colorGray,
        left: 204,
        fontSize: FontSize.size_3xs,
        top: 0,
    },
    busy: {
        top: 11,
        color: Color.colorBlack,
        fontSize: FontSize.size_3xs,
        left: 0,
    },
    iconAngleDoubleRight: {
        height: "23.31%",
        width: "3.75%",
        top: "19.35%",
        right: "18.33%",
        bottom: "57.33%",
        left: "77.92%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    assignParent: {
        top: 21,
        left: 49,
        width: 240,
        height: 31,
        position: "absolute",
    },
    rectangleParent: {
        top: 37,
    },
    rectangleGroup: {
        top: 357,
    },
    rectangleContainer: {
        top: 677,
    },
    groupView: {
        top: 437,
    },
    groupChild5: {
        borderColor: Color.colorBlack,
        height: 23,
        width: 79,
        left: 225,
        top: 19,
    },
    assign4: {
        left: 204,
        fontSize: FontSize.size_3xs,
        top: 0,
        color: Color.colorBlack,
    },
    rectangleParent1: {
        top: 117,
    },
    rectangleParent2: {
        top: 197,
    },
    rectangleParent3: {
        top: 517,
    },
    rectangleParent4: {
        top: 277,
    },
    rectangleParent5: {
        top: 597,
    },
    emojiRedCircle: {
        top: "12.5%",
        bottom: "89.38%",
    },
    emojiRedCircle1: {
        top: "52.5%",
        bottom: "49.38%",
    },
    emojiRedCircle2: {
        top: "92.5%",
        bottom: "9.38%",
    },
    emojiRedCircle3: {
        top: "65.8%",
        bottom: "39.38%",
    },
    emojiRedCircle4: {
        top: "25.8%",
        bottom: "79.38%",
    },
    emojiRedCircle5: {
        top: "39.3%",
        bottom: "69.38%",
    },
    emojiRedCircle6: {
        top: "79.4%",
        bottom: "29.38%",
    },
    emojiRedCircle7: {
        top: "59%",
        bottom: "59.38%",
    },
    emojiRedCircle8: {
        top: "79.13%",
        bottom: "19.38%",
    },
    assignDeliveryPartner: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: 800,
    },
});

export default AssignPartner;
