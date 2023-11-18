import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../styling/GlobalStylesNewOrder";

const Createorder = () => {
    return (
        <View style={[styles.createANewOrderSection, styles.newLayout]}>
            <LinearGradient
                style={[styles.newOrderRegistrationParent, styles.newLayout]}
                locations={[0, 1]}
                colors={["rgba(119, 166, 255, 0.46)", "rgba(255, 107, 107, 0.32)"]}
            >

                <View style={[styles.frameChild, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameInner, styles.frameLayout]} />
                <View style={[styles.rectangleView, styles.frameLayout]} />
                <Text style={[styles.total, styles.textTypo3]}>Total:</Text>
                <Text style={[styles.text, styles.textTypo3]}>+</Text>
                <Text style={[styles.text1, styles.textTypo3]}>-</Text>
                <Text style={[styles.sgst, styles.textTypo3]}>SGST:</Text>
                <Text style={[styles.cgst, styles.textTypo3]}>CGST:</Text>
                <Text style={[styles.finalTotal, styles.textTypo3]}>Final Total:</Text>
                <Text style={[styles.text2, styles.textTypo2]}>₹0</Text>
                <Text style={[styles.text3, styles.textTypo1]}>0%</Text>
                <Text style={[styles.text4, styles.textTypo1]}>0%</Text>
                <Text style={[styles.text5, styles.textTypo2]}>₹0</Text>
            </LinearGradient>



            <View style={[styles.button, styles.buttonFlexBox]}>
                <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                    <Text style={[styles.labelText, styles.textTypo]}>CREATE</Text>
                </View>
            </View>
            <View style={[styles.searchMaterialParent, styles.quantityWrapperLayout]}>
                <Text style={[styles.searchMaterial, styles.orderNumberTypo]}>
                    Search Material
                </Text>

            </View>
            <View style={[styles.orderNumberWrapper, styles.lineWrapperLayout]}>
                <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
                    # Order Number
                </Text>
            </View>
            <View style={[styles.customerNameWrapper, styles.wrapperPosition]}>
                <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
                    Customer Name
                </Text>
            </View>
            <View style={[styles.deliveryAddressWrapper, styles.wrapperPosition]}>
                <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
                    Delivery Address
                </Text>
            </View>
            <View style={[styles.lineParent, styles.lineWrapperLayout]}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.addLineWrapper, styles.lineWrapperLayout]}>
                    <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
                        + Add Line
                    </Text>
                </View>
            </View>
            <View style={[styles.lineGroup, styles.lineWrapperLayout]}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.lineView, styles.groupLayout]} />
                <View style={[styles.addMaterialWrapper, styles.lineWrapperLayout]}>
                    <Text style={[styles.orderNumber, styles.orderNumberTypo]}>
                        + Add Material
                    </Text>
                </View>
            </View>
            <View style={[styles.quantityWrapper, styles.quantityWrapperLayout]}>
                <Text style={[styles.quantity, styles.textFlexBox]}>Quantity</Text>
            </View>
            <View style={[styles.rectangleParent, styles.groupChild1Layout]}>
                <View style={[styles.groupChild1, styles.groupChild1Layout]} />
                <View style={styles.wrapper}>
                    <Text style={[styles.text7, styles.textTypo]}>0</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    newLayout: {
        overflow: "hidden",
        height: 800,
        width: 400,
    },
    textFlexBox: {
        textAlign: "center",
        position: "absolute",
    },
    frameLayout: {
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        width: "85%",
        position: "absolute",
        backgroundColor: Color.colorWhite,
    },
    textTypo3: {
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
    },
    textTypo2: {
        left: 319,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "center",
        color: Color.black,
        position: "absolute",
    },
    textTypo1: {
        left: 316,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "center",
        color: Color.black,
        position: "absolute",
    },
    text6Position: {
        display: "none",
        position: "absolute",
    },
    fillPosition: {
        bottom: "96.49%",
        display: "none",
        position: "absolute",
    },
    buttonFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    textTypo: {
        color: Color.colorWhite,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        textAlign: "center",
    },
    quantityWrapperLayout: {
        height: 21,
        position: "absolute",
    },
    orderNumberTypo: {
        color: Color.colorDarkgray_100,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_mini,
        textAlign: "center",
        left: 0,
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    lineWrapperLayout: {
        height: 18,
        position: "absolute",
    },
    wrapperPosition: {
        left: 44,
        height: 18,
        position: "absolute",
    },
    groupLayout: {
        height: 1,
        width: 53,
        borderTopWidth: 1,
        borderColor: Color.colorDarkgray_100,
        top: 10,
        borderStyle: "solid",
        position: "absolute",
    },
    groupChild1Layout: {
        height: 22,
        width: 21,
        position: "absolute",
    },
    newOrderRegistration: {
        top: 49,
        color: Color.black,
        fontSize: FontSize.size_lg,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 56,
    },
    frameChild: {
        top: 30,
        left: 26,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
    },
    frameItem: {
        top: 175,
        left: 26,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
    },
    frameInner: {
        top: 250,
        left: 27,
    },
    rectangleView: {
        top: 325,
        left: 27,
    },
    total: {
        letterSpacing: 0,
        fontWeight: "500",
        lineHeight: 20,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
        left: 203,
        textAlign: "center",
        position: "absolute",
        top: 430,
    },
    text: {
        left: 256,
        top: 103,
        letterSpacing: 0,
        fontWeight: "1000",
        lineHeight: 20,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
        textAlign: "center",
        position: "absolute",
    },
    text1: {
        left: 320,
        top: 103,
        letterSpacing: 0,
        fontWeight: "500",
        lineHeight: 20,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
        textAlign: "center",
        position: "absolute",
    },
    sgst: {
        left: 199,
        top: 450,
        letterSpacing: 0,
        fontWeight: "500",
        lineHeight: 20,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
        textAlign: "center",
        position: "absolute",
    },
    cgst: {
        top: 470,
        letterSpacing: 0,
        fontWeight: "500",
        lineHeight: 20,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
        left: 203,
        textAlign: "center",
        position: "absolute",
    },
    finalTotal: {
        left: 169,
        top: 490,
        letterSpacing: 0,
        fontWeight: "500",
        lineHeight: 20,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
        textAlign: "center",
        position: "absolute",
    },
    text2: {
        top: 430,
    },
    text3: {
        top: 450,
    },
    text4: {
        top: 470,
    },
    text5: {
        top: 490,
    },
    newOrderRegistrationParent: {
        width: 400,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
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
    text6: {
        top: 13,
        left: 16,
        textAlign: "left",
        opacity: 0.6,
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        fontSize: FontSize.androidTextStylesBodyMediumSemibold_size,
        color: Color.black,
    },
    labelText: {
        fontFamily: FontFamily.androidTextStylesBodyMediumSemibold,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
    },
    stateLayer: {
        alignSelf: "stretch",
        flexDirection: "row",
        paddingHorizontal: Padding.p_5xl,
        paddingVertical: Padding.p_3xs,
        flex: 1,
    },
    button: {
        top: 600,
        borderRadius: Border.br_81xl,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        height: 40,
        backgroundColor: Color.colorRoyalblue,
        left: 27,
        width: 335,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        overflow: "hidden",
    },
    searchMaterial: {
        top: 1,
    },
    iconSearchOutline: {
        height: "100%",
        width: "7.66%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "92.34%",
        position: "absolute",
    },
    searchMaterialParent: {
        top: 45,
        width: 300,
        left: 43,
    },
    orderNumber: {
        top: 0,

    },
    orderNumberWrapper: {
        top: 190,
        width: 300,
        left: 43,
    },
    customerNameWrapper: {
        top: 265,
        width: 300,
    },
    deliveryAddressWrapper: {
        top: 340,
        width: 300,
    },
    groupChild: {
        left: 0,
    },
    groupItem: {
        left: 131,
    },
    addLineWrapper: {
        width: 300,
        left: 56,
        top: 0,
    },
    lineParent: {
        top: 400,
        left: 88,
        width: 183,
    },
    lineView: {
        left: 159,
        top: -80,
    },
    addMaterialWrapper: {
        width: 300,
        left: 56,
        top: 0,
    },
    lineGroup: {
        top: 140,
        left: 77,
        width: 211,
    },
    quantity: {
        color: Color.black,
        fontSize: FontSize.size_lg,
        textAlign: "center",
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 0,
        top: 0,
    },
    quantityWrapper: {
        width: 300,
        top: 100,
        left: 27,
    },
    groupChild1: {
        borderRadius: 4,
        backgroundColor: Color.colorRoyalblue,
        left: 0,
        top: 0,
    },
    text7: {
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        color: Color.colorWhite,
        left: 0,
        top: 0,
        position: "absolute",
    },
    wrapper: {
        top: 3,
        left: 6,
        width: 9,
        height: 16,
        position: "absolute",
    },
    rectangleParent: {
        top: "15.6%",
        left: "70%",
    },
    iconArrowLeft: {
        height: "2.13%",
        width: "4.88%",
        top: "6.31%",
        right: "89.42%",
        bottom: "91.56%",
        left: "5.69%",
        position: "absolute",
    },
    createANewOrderSection: {
        width: 350,
        flex: 1,
        backgroundColor: Color.colorWhite,
        overflow: "hidden",
        height: 800,
    },
});

export default Createorder;
