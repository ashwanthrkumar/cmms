import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../styling/GlobalStylesNewOrder";

const CreateOrder = () => {
    return (
        <View style={styles.newOrder}>
            <LinearGradient
                style={styles.newOrderChild}
                locations={[0, 1]}
                colors={["#8dc3ff", "#d2e7ff"]}
            />
            <View style={[styles.newOrderItem, styles.newChildBorder]} />
            <View style={[styles.searchMaterialParent, styles.quantityWrapperLayout]}>
                <Text style={[styles.searchMaterial, styles.materialTypo]}>
                    Search Material
                </Text>

            </View>
            <Text style={[styles.text, styles.textClr]}>+</Text>
            <Text style={[styles.text1, styles.textClr]}>-</Text>
            <View style={[styles.quantityWrapper, styles.quantityWrapperLayout]}>
                <Text style={[styles.quantity, styles.text2Position]}>Quantity</Text>
            </View>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={styles.wrapper}>
                    <Text style={[styles.text2, styles.textTypo2]}>0</Text>
                </View>
            </View>
            <View style={[styles.lineParent, styles.lineWrapperLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View style={[styles.addMaterialWrapper, styles.addWrapperPosition]}>
                    <Text style={[styles.addMaterial, styles.materialTypo]}>
                        + Add Material
                    </Text>
                </View>
            </View>
            <View style={[styles.newOrderInner, styles.newChildBorder]} />
            <View style={[styles.rectangleView, styles.newChildBorder]} />
            <View style={[styles.newOrderChild1, styles.newChildPosition]} />
            <View style={[styles.newOrderChild2, styles.newChildBorder]} />
            <View style={[styles.newOrderChild3, styles.newChildPosition]} />
            <View style={[styles.newOrderChild4, styles.newChildLayout]} />
            <View style={[styles.newOrderChild5, styles.newChildLayout]} />
            <View style={[styles.orderNumberWrapper, styles.lineWrapperLayout]}>
                <Text style={[styles.addMaterial, styles.materialTypo]}>
                    # Order Number
                </Text>
            </View>
            <View style={[styles.materialCostWrapper, styles.lineWrapperLayout]}>
                <Text style={[styles.addMaterial, styles.materialTypo]}>
                    Material Cost
                </Text>
            </View>
            <View
                style={[styles.customerNameWrapper, styles.customerWrapperPosition]}
            >
                <Text style={[styles.addMaterial, styles.materialTypo]}>
                    Customer Name
                </Text>
            </View>
            <View
                style={[styles.customerPhNoWrapper, styles.customerWrapperPosition]}
            >
                <Text style={[styles.addMaterial, styles.materialTypo]}>
                    Customer Ph No.
                </Text>
            </View>
            <View
                style={[styles.deliveryAddressWrapper, styles.customerWrapperPosition]}
            >
                <Text style={[styles.addMaterial, styles.materialTypo]}>
                    Delivery Address
                </Text>
            </View>
            <View style={[styles.lineGroup, styles.lineWrapperLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupChild1, styles.groupLayout]} />
                <View style={[styles.addLineWrapper, styles.addWrapperPosition]}>
                    <Text style={[styles.addMaterial, styles.materialTypo]}>
                        + Add Line
                    </Text>
                </View>
            </View>
            <Text style={[styles.total, styles.textClr]}>Total:</Text>
            <Text style={[styles.sgst, styles.sgstTypo]}>SGST:</Text>
            <Text style={[styles.cgst, styles.sgstTypo]}>CGST:</Text>
            <Text style={[styles.finalTotal, styles.textClr]}>Final Total:</Text>
            <Text style={[styles.text3, styles.textTypo1]}>₹0</Text>
            <Text style={[styles.text4, styles.textTypo]}>0%</Text>
            <Text style={[styles.text5, styles.textTypo]}>0%</Text>
            <Text style={[styles.text6, styles.textTypo1]}>₹0</Text>
            <View style={[styles.button, styles.buttonFlexBox]}>
                <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                    <Text style={[styles.labelText, styles.textTypo2]}>CREATE</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    newChildBorder: {
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        backgroundColor: Color.colorWhite,
    },
    quantityWrapperLayout: {
        height: 21,
        position: "absolute",
    },
    materialTypo: {
        textAlign: "center",
        color: Color.colorDarkgray_100,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_mini,
        left: 0,
        position: "absolute",
    },
    textClr: {
        color: Color.colorBlack,
        textAlign: "center",
    },
    text2Position: {
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        left: 0,
        top: 0,
        position: "absolute",
    },
    groupChildLayout: {
        height: 22,
        width: 21,
        position: "absolute",
    },
    textTypo2: {
        color: Color.colorWhite,
        fontSize: FontSize.m3LabelLarge_size,
        textAlign: "center",
    },
    lineWrapperLayout: {
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
    addWrapperPosition: {
        left: 56,
        height: 18,
        top: 0,
        position: "absolute",
    },
    newChildPosition: {
        left: 42,
        width: 308,
        position: "absolute",
    },
    newChildLayout: {
        height: 25,
        width: 131,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        position: "absolute",
        backgroundColor: Color.colorWhite,
    },
    customerWrapperPosition: {
        left: 59,
        height: 18,
        position: "absolute",
    },
    sgstTypo: {
        left: 230,
        color: Color.colorBlack,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.m3LabelLarge_size,
        textAlign: "center",
        position: "absolute",
    },
    textTypo1: {
        left: 333,
        color: Color.colorBlack,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.m3LabelLarge_size,
        textAlign: "center",
        position: "absolute",
    },
    textTypo: {
        left: 326,
        color: Color.colorBlack,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.m3LabelLarge_size,
        textAlign: "center",
        position: "absolute",
    },
    buttonFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    newOrderChild: {
        width: 390,
        backgroundColor: "transparent",
        left: 0,
        top: 0,
        position: "absolute",
        height: 800,
    },
    newOrderItem: {
        top: 14,
        width: 308,
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        position: "absolute",
        left: 41,
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
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    searchMaterialParent: {
        top: 28,
        width: 400,
        left: 58,
    },
    text: {
        left: 282,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.m3LabelLarge_size,
        color: Color.colorBlack,
        position: "absolute",
        top: 72,
    },
    text1: {
        left: 331,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.m3LabelLarge_size,
        color: Color.colorBlack,
        position: "absolute",
        top: 72,
    },
    quantity: {
        fontSize: 18,
        color: Color.colorBlack,
        textAlign: "center",
    },
    quantityWrapper: {
        left: 53,
        width: 69,
        top: 72,
    },
    groupChild: {
        borderRadius: 4,
        backgroundColor: Color.colorRoyalblue,
        left: 0,
        top: 0,
    },
    text2: {
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
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
        top: 71,
        left: 300,
    },
    groupItem: {
        left: 0,
    },
    groupInner: {
        left: 159,
    },
    addMaterial: {
        top: 0,
    },
    addMaterialWrapper: {
        width: 300,
    },
    lineParent: {
        top: 161,
        left: 89,
        width: 500,
    },
    newOrderInner: {
        top: 185,
        width: 308,
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        position: "absolute",
        left: 41,
    },
    rectangleView: {
        top: 101,
        left: 40,
        width: 308,
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        position: "absolute",
    },
    newOrderChild1: {
        top: 244,
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        backgroundColor: Color.colorWhite,
        left: 42,
    },
    newOrderChild2: {
        top: 304,
        width: 308,
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        position: "absolute",
        left: 41,
    },
    newOrderChild3: {
        top: 363,
        height: 50,
        borderWidth: 1,
        borderColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        backgroundColor: Color.colorWhite,
        left: 42,
    },
    newOrderChild4: {
        top: 474,
        left: 218,
    },
    newOrderChild5: {
        top: 509,
        left: 219,
    },
    orderNumberWrapper: {
        top: 202,
        width: 300,
        left: 58,
    },
    materialCostWrapper: {
        top: 118,
        width: 300,
        left: 58,
    },
    customerNameWrapper: {
        top: 261,
        width: 300,
    },
    customerPhNoWrapper: {
        top: 321,
        width: 300,
    },
    deliveryAddressWrapper: {
        top: 380,
        width: 300,
    },
    groupChild1: {
        left: 131,
    },
    addLineWrapper: {
        width: 300,
    },
    lineGroup: {
        top: 423,
        left: 103,
        width: 300,
    },
    total: {
        left: 234,
        top: 449,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.m3LabelLarge_size,
        color: Color.colorBlack,
        position: "absolute",
    },
    sgst: {
        top: 476,
    },
    cgst: {
        top: 512,
    },
    finalTotal: {
        left: 201,
        top: 541,
        fontFamily: FontFamily.m3LabelLarge,
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.m3LabelLarge_size,
        color: Color.colorBlack,
        position: "absolute",
    },
    text3: {
        top: 449,
    },
    text4: {
        top: 477,
    },
    text5: {
        top: 512,
    },
    text6: {
        top: 541,
    },
    labelText: {
        fontFamily: FontFamily.m3LabelLarge,
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
        top: 578,
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
        left: 42,
        width: 308,
        position: "absolute",
        backgroundColor: Color.colorRoyalblue,
        overflow: "hidden",
    },
    newOrder: {
        width: "100%",
        overflow: "hidden",
        height: 800,
        flex: 1,
        backgroundColor: Color.colorWhite,
    },
});

export default CreateOrder;
