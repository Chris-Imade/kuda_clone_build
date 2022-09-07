import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import {
    Budget,
    Card,
    Payment,
    Settings,
    Welcome,
    TwoFAConfirmed,
    TwoFA,
    SignupTwo,
    Signup,
    Signin,
    ResetPin,
    ResetPassword,
    PinAuth,
    AuthWelcome,
    Splash,
    Home,
    FundAcct
} from "../screens/index";

const AppStack = createStackNavigator();

const AppStackScreen = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={() => ({
                "headerShown": false
            })}>
                <AppStack.Screen name="Home" component={HomeApp} />
                <AppStack.Screen name="Welcome" component={Welcome} />
                <AppStack.Screen name="AuthWelcome" component={AuthWelcome} />
                <AppStack.Screen name="Signin" component={Signin} />
                <AppStack.Screen name="TwoFA" component={TwoFA} />
                <AppStack.Screen name="TwoFAConfirmed" component={TwoFAConfirmed} />
                <AppStack.Screen name="ResetPin" component={ResetPin} />
                <AppStack.Screen name="PinAuth" component={PinAuth} />
                <AppStack.Screen name="SignupTwo" component={SignupTwo} />
                <AppStack.Screen name="Signup" component={Signup} />
                <AppStack.Screen name="ResetPassword" component={ResetPassword} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
        <Stack.Navigator screenOptions={() => ({
            "headerShown": false
        })}>
            <Stack.Screen name={"HomeStack"} component={Home} />
            <Stack.Screen name={"FundAcct"} component={FundAcct} />
        </Stack.Navigator>
  )
}



const Auth = createStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator screenOptions={() => ({
            "headerShown": false
        })}>
            <Auth.Screen name="Welcome" component={Welcome} />
            <Auth.Screen name="AuthWelcome" component={AuthWelcome} />
            <Auth.Screen name="Signin" component={Signin} />
            <Auth.Screen name="TwoFA" component={TwoFA} />
            <Auth.Screen name="TwoFAConfirmed" component={TwoFAConfirmed} />
            <Auth.Screen name="ResetPin" component={ResetPin} />
            <Auth.Screen name="PinAuth" component={PinAuth} />
            <Auth.Screen name="SignupTwo" component={SignupTwo} />
            <Auth.Screen name="Signup" component={Signup} />
            <Auth.Screen name="ResetPassword" component={ResetPassword} />
        </Auth.Navigator>
    )
}



const Tab = createBottomTabNavigator();

const HomeApp = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let navIcon;

                    if(route.name == "Home") {
                        navIcon = focused ? "home" : "home-outline";
                        size = focused ? 28 : 24;
                    } else if (route.name === 'Payment') {
                        navIcon = focused ? 'send' : 'send-outline';
                        size = focused ? 28 : 24;
                    } else if (route.name === 'Budget') {
                        navIcon = focused ? 'chart-donut-variant' : 'chart-donut';
                        size = focused ? 28 : 24;
                    } else if (route.name === 'Card') {
                        navIcon = focused ? 'credit-card' : 'credit-card-multiple';
                        size = focused ? 28 : 24;
                    } else if (route.name === 'Settings') {
                        navIcon = focused ? 'view-grid' : 'grid';
                        size = focused ? 28 : 24;
                    }
                    return <Icon name={navIcon} size={size} color={color} />
                },
                "tabBarActiveTintColor": "#40196d",
                "tabBarInactiveTintColor": "#ccccccff",
                "tabBarStyle": [{
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "space-around",
                    "paddingBottom": 10,
                    "height": 60
                }, null],
                "headerShown": false
            })}
        >
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Payment' component={Payment} />
            <Tab.Screen name='Budget' component={Budget} />
            <Tab.Screen name='Card' component={Card} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

const AppNavRootRender = () => {
    const [appstate, setAppState] = useState({
        isSignedIn: true,
        onboarding: null,
        loading: false,
        error: null,
        userToken: null
    });

    return appstate.loading ? (
        <Splash />
    ) : (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={() => ({
                "headerShown": false
            })}>
                {
                    appstate.userToken ? (
                        <AppStack.Screen name='AuthStack' component={AuthStack} />
                    ) : (
                        <AppStack.Screen name='HomeTabs' component={HomeApp} />
                    )
                }
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavRootRender;