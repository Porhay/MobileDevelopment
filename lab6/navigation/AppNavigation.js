import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import GeneralScreen from "../screens/GeneralScreen";
import DrawingScreen from "../screens/DrawingScreen";
import MoviesScreen from "../screens/MoviesScreen";
import ImagesScreen from "../screens/ImagesScreen";

import AddItem from "../components/AddItem";
import PosterInfo from "../components/PosterInfo";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const movieStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Movies">
            <Stack.Screen name="Movies" component={MoviesScreen} />
            <Stack.Screen name="New poster" component={AddItem} />
            <Stack.Screen name="Information" component={PosterInfo} />
        </Stack.Navigator>
    )
}

export default function AppNavigation() {
    return (
        <Tab.Navigator tabBarOptions={
            { labelStyle: { paddingBottom: 5 } }
        }>

            <Tab.Screen
                name="General"
                component={GeneralScreen}
                options={{
                    tabBarLabel: 'General',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}

            />

            <Tab.Screen
                name="Drawing"
                component={DrawingScreen}
                options={{
                    tabBarLabel: 'Drawing',

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pencil" color={color} size={size} />
                    ),

                }}
            />

            <Tab.Screen
                name="Movies"
                component={movieStackNavigator}
                options={{
                    tabBarLabel: 'Movies',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="movie-filter" color={color} size={size} />
                    ),
                }}

            />

            <Tab.Screen
                name="Images"
                component={ImagesScreen}
                options={{
                    tabBarLabel: 'Images',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="image" color={color} size={size} />
                    ),
                }}

            />

        </Tab.Navigator>
    );
}