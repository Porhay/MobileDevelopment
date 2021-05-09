import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DrawingScreen from "../screens/DrawingScreen";
import GeneralScreen from "../screens/GeneralScreen";
import HeaderBar from "./HeaderBar";
import ImagesScreen from "../screens/ImagesScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator tabBarOptions={
            {labelStyle: {paddingBottom: 5}}
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
                component={HeaderBar}
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