import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Contents from './contents/contents'

function GeneralScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Мітячкін Денис
        {"\n"}
        Група ІО-83
        {"\n"}
        ЗК ІО-8320
      </Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Drawing!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white'
  }
})

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>

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
        component={SettingsScreen} 
        options={{
          tabBarLabel: 'Drawing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
