import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../styling/GlobalStylesP";

const Profile = () => {
    return (
        <View style={styles.profile}>
            <LinearGradient
                style={styles.ellipseParent}
                locations={[0, 1]}
                colors={["#fff", "rgba(0, 117, 255, 0)"]}
            >
                <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/e14.png")}
                />
                <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-6.png")}
                />
                <Text style={styles.a}>A</Text>
                <Text style={styles.ashwanthRKumar}>ASHWANTH R KUMAR</Text>
                <Text style={styles.dueToday}>Due Today</Text>
                <Text style={styles.superAdmin}>Super Admin</Text>
                <View style={[styles.frameInner, styles.frameChildLayout]} />
                <View style={[styles.rectangleView, styles.frameChildLayout]} />
                <View style={[styles.frameChild1, styles.frameChildLayout]} />
                <View style={[styles.frameChild2, styles.frameChildLayout]} />
                <Text style={[styles.review, styles.reviewTypo1]}>Review</Text>
                <Text style={[styles.coordinate, styles.reviewTypo1]}>Coordinate</Text>
                <Text style={[styles.budget, styles.reviewTypo1]}>Budget</Text>
                <Text style={[styles.conduct, styles.reviewTypo1]}>Conduct</Text>
                <Text style={[styles.reviewGanttCharts, styles.reviewTypo]}>
                    Review Gantt charts and project timelines to identify any projects at
                    risk of delays.
                </Text>
                <Text style={[styles.coordinateWithProject, styles.reviewTypo]}>
                    Coordinate with project managers to address bottlenecks and
                    challenges.
                </Text>
                <Text style={[styles.reviewProjectBudget, styles.reviewTypo]}>
                    Review project budget reports bi-weekly, comparing actual expenditures
                    against the planned budget.
                </Text>
                <Text style={styles.addressAnyReported}>
                    Address any reported issues related to document retrieval or document
                    versioning.
                </Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    frameChildLayout: {
        height: 98,
        width: 308,
        borderLeftWidth: 3,
        borderStyle: "solid",
        borderRadius: Border.br_mini,
        marginLeft: -154,
        left: "50%",
        position: "absolute",
        backgroundColor: Color.colorWhite,
    },
    reviewTypo1: {
        fontSize: FontSize.size_mini,
        left: 63,
        color: Color.colorBlack,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    reviewTypo: {
        width: 264,
        alignItems: "flex-end",
        display: "flex",
        textAlign: "left",
        fontSize: FontSize.size_sm,
        left: 63,
        fontFamily: FontFamily.robotoRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    frameChild: {
        marginLeft: -152,
        width: 390,
        height: 220,
        left: "40%",
        top: -115,
        position: "absolute",
    },
    frameItem: {
        top: 37,
        left: 166,
        width: 57,
        height: 57,
        position: "absolute",
    },
    a: {
        top: 51,
        left: 186,
        fontSize: 24,
        color: Color.colorWhite,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    ashwanthRKumar: {
        top: 123,
        left: 103,
        fontSize: 18,
        color: Color.colorBlack,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    dueToday: {
        top: 184,
        left: 34,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_base,
        color: Color.colorBlack,
        textAlign: "center",
        position: "absolute",
    },
    superAdmin: {
        top: 146,
        left: 151,
        fontStyle: "italic",
        fontFamily: FontFamily.robotoItalic,
        fontSize: FontSize.size_base,
        color: Color.colorBlack,
        textAlign: "center",
        position: "absolute",
    },
    frameInner: {
        top: 224,
        borderColor: "#c00000",
    },
    rectangleView: {
        top: 342,
        borderColor: "#f99500",
    },
    frameChild1: {
        top: 460,
        borderColor: "#f9ef00",
    },
    frameChild2: {
        top: 578,
        borderColor: "#50f900",
    },
    review: {
        top: 238,
    },
    coordinate: {
        top: 361,
    },
    budget: {
        top: 473,
    },
    conduct: {
        top: 597,
    },
    reviewGanttCharts: {
        top: 266,
    },
    coordinateWithProject: {
        top: 389,
    },
    reviewProjectBudget: {
        top: 493,
    },
    addressAnyReported: {
        top: 625,
        width: 271,
        alignItems: "flex-end",
        display: "flex",
        textAlign: "left",
        fontSize: FontSize.size_sm,
        left: 63,
        fontFamily: FontFamily.robotoRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    ellipseParent: {
        left: 0,
        width: 390,
        backgroundColor: "transparent",
        top: 0,
        position: "absolute",
        overflow: "hidden",
        height: 800,
    },
    profile: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: 800,
        backgroundColor: "#add1f0",
    },
});

export default Profile;
