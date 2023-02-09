import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colorPalette } from './Data/Colors'
import ApiScreen from './Screens/ApiScreen';
import HiraKataScreen from './Screens/HiraKataScreen';
import MainNavScreen from './Screens/MainNavScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainNavScreen" component={MainNavScreen} 
            options={{
              title: "Japanese Flashcards",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: colorPalette.bgColor },
              headerTintColor: colorPalette.whiteColor,
            }} />
          <Stack.Screen name="HiraKataScreen" component={HiraKataScreen}
            options={{
              title: "Hiragana | Katakana",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: colorPalette.bgColor },
              headerTintColor: colorPalette.whiteColor,
            }} />
          <Stack.Screen name="KanjiApiScreen" component={ApiScreen}
            options={{
              title: "Kanji Characters",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: colorPalette.bgColor },
              headerTintColor: colorPalette.whiteColor,
            }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );

  // <ApiScreen />
  // <HiraKataScreen />
  // <MainNavScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.bgColor800,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

// - - - 

