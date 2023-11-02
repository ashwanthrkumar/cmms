//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import Orders from './screens/Orders';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Payments from './screens/Payments';
import Stats from './screens/Stats';
import Track from './screens/Track';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// create a component
const StackNavigation = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTab() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: "Home", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="home" size={24} color="black" />
                        ) : (
                            <Ionicons name="home-outline" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="Orders" component={Orders}
                    options={{
                        tabBarLabel: "Orders", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <FontAwesome name="inbox" size={24} color="black" />
                        ) : (
                            <Feather name="inbox" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="Payments" component={Payments}
                    options={{
                        tabBarLabel: "Payments", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <FontAwesome5 name="money-bill" size={24} color="black" />
                        ) : (
                            <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="Track" component={Track}
                    options={{
                        tabBarLabel: "Track", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <MaterialCommunityIcons name="map-marker-account" size={24} color="black" />
                        ) : (
                            <MaterialCommunityIcons name="map-marker-account-outline" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen name="Stats" component={Stats}
                    options={{
                        tabBarLabel: "Stats", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="stats-chart" size={24} color="black" />
                        ) : (
                            <Ionicons name="ios-stats-chart-outline" size={24} color="black" />
                        ),
                    }} />
            </Tab.Navigator>

        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default StackNavigation;
