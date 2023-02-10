import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colorPalette } from './Data/Colors'
import ApiScreen from './Screens/ApiScreen';
import HiraKataScreen from './Screens/HiraKataScreen';
import MainNavScreen from './Screens/MainNavScreen';
import FCAppContextProvider from './Store/fc-app-context';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="light" />

      <SafeAreaView style={{ flex: 1 }}>
        <FCAppContextProvider>
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
        </FCAppContextProvider>
      </SafeAreaView>

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

/*
Flip animation on cards

some kind of useless form (setting kanji part?)
need some kind of value passed and logic to disable other switches

setting data to device memory (setting kanji id to open on last viewed/learned)
almost done -> move sth to device memory, read at the start and write wen using app

improve gui / colors (only dark mode plox)

useless notification to learn every day at like 7 am so you wake tf up
*/
