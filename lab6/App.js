import React from 'react';
import AppNavigation from "./navigation/AppNavigation";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
      </SafeAreaView>

      <AppNavigation />

    </NavigationContainer>
  );
}
