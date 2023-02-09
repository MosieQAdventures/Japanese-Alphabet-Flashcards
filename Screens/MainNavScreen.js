import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Linking } from 'react-native';
import { colorPalette } from '../Data/Colors'
import ApiScreen from './ApiScreen';
import HiraKataScreen from './HiraKataScreen';

export default function MainNavScreen({ navigation }) {
  
  function hiraKataPressHandler() {
    navigation.navigate("HiraKataScreen");
  }
  function kanjiPressHandler() {
    navigation.navigate("KanjiApiScreen");
  }
  
  return (
    <>

      <View style={styles.mainContainer}>

        <Pressable style={styles.cardHK} onPress={hiraKataPressHandler}>
          <View style={styles.frontText}>
            <Text style={styles.setTextSub}>
              ひらがな  |  カタカナ
            </Text>
            
            <View style={{marginTop: 24, marginBottom: 24}}>
              <Text style={styles.setTextSub}>
                Hiragana | Katakana
              </Text>
            </View>

            <Text style={styles.setTextMain}>
              Flashcards
            </Text>
          </View>

          <View style={styles.idposition}>
            <Text style={styles.setTextId}>Click to learn basic alphabets and symbols</Text>
          </View>
        </Pressable>

        <Pressable style={styles.cardK} onPress={kanjiPressHandler}>
          <View style={styles.frontText}>
            <Text style={styles.setTextMain}>
              漢字  |  かんじ
            </Text>
            <View style={{marginTop: 24, marginBottom: 24}}>
              <Text style={styles.setTextMain}>
                Kanji 
              </Text>
            </View>
            
            <Text style={styles.setTextMain}>
              Flashcards
            </Text>
            
          </View>

          <View style={styles.idposition}>
            <Text style={styles.setTextId}>Click to learn up to 3000 different characters.</Text>
          </View>
        </Pressable>
        
      </View>

      <View style={styles.bottomContainer}>
        <Pressable onPress={() => {Linking.openURL('https://github.com/MosieQAdventures/ReactNativeApp')}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: colorPalette.bgColor200}}>Hubert Mosz</Text>
            <Text style={{color: colorPalette.bgColor200}}>Capgemini</Text>
            <Text style={{color: colorPalette.bgColor200}}>02.2023</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 10,
    backgroundColor: colorPalette.bgColor800,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colorPalette.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colorPalette.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHK: {
    width: 300,
    height: 300,
    padding: 4,
    margin: 12,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: colorPalette.whiteColor,
    backgroundColor: colorPalette.bgColor400,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  cardK: {
    width: 300,
    height: 300,
    padding: 4,
    margin: 12,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: colorPalette.whiteColor,
    backgroundColor: colorPalette.bgColor500,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  frontText: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 0,
    margin: 12,
  },
  setTopBarText: {
    color: colorPalette.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  setTextMain: {
    color: colorPalette.whiteColor,
    fontSize: 30,
    textAlign: 'center',
    margin: 2,
  },
  setTextSub: {
    color: colorPalette.whiteColor,
    fontSize: 26,
    textAlign: 'center',
    margin: 2,
  },
  title: {
    flex: 8,
    alignItems: 'center',
  },
  icon: {
    flex: 2,
    alignItems: 'center',
  },
  iconImage: {
    tintColor: 'white',
  },
  setTextId: {
    color: colorPalette.whiteColor,
    fontSize: 12,
    textAlign: 'center',
  },
  idposition: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
})

/*
      <View style={styles.topBarContainer}>
        <Pressable style={styles.icon} onPress={() => {}}>

        </Pressable>
        <View style={styles.title}>
          <Text style={styles.setTopBarText}>
            Learn Japanese Flashcards
          </Text>
        </View>
        <Pressable style={styles.icon} onPress={() => {}}>

        </Pressable>
      </View>
*/