import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

import { FCAppContext } from '../Store/fc-app-context';
import FlashcardList from '../Components/FlashcardList';
import { colorPalette } from '../Data/Colors'
import { FLASHCARDS } from '../Data/FlashcardsData'

export default function HiraKataScreen() {
  const fcAppCtx = useContext(FCAppContext)

  const [flashcards, setFlashcards] = useState(FLASHCARDS);
  const [flashcardIndex, setFlashcardIndex] = useState(fcAppCtx.idHiraKata);
  const flashcardDisplayCount = 5;
  const flashcardsLastIndex = FLASHCARDS.length - flashcardDisplayCount;

  function nextButtonHandler() {
    let newValue = flashcardIndex + flashcardDisplayCount;
    fcAppCtx.setIdHiraKata(newValue)
    setFlashcardIndex(newValue)
  };
  function prevButtonHandler() {
    let newValue = flashcardIndex - flashcardDisplayCount;
    fcAppCtx.setIdHiraKata(newValue)
    setFlashcardIndex(newValue)
  };
  function toFirstButtonHandler() {
    let newValue = 0;
    fcAppCtx.setIdHiraKata(newValue)
    setFlashcardIndex(newValue)
  };
  function toLastButtonHandler() {
    let newValue = flashcardsLastIndex + flashcardDisplayCount - 1;
    fcAppCtx.setIdHiraKata(newValue)
    setFlashcardIndex(newValue)
  };

  return (
    <>

      <View style={styles.mainContainer}>
        <FlashcardList flashcards = {flashcards} flashcardIndex = {flashcardIndex} flashcardCount = {flashcardDisplayCount} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomButtons}>
          <View style={styles.toFirstButton}>
            <Button title="<<-" color={colorPalette.bgColor500} onPress={toFirstButtonHandler} disabled={(flashcardIndex === 0)}/>
          </View>
          <View style={styles.prevButton}>
              <Button title="<- Prev" color={colorPalette.bgColor500} onPress={prevButtonHandler} disabled={(flashcardIndex === 0)}/>
          </View>
          <View style={styles.nextButton}>
            <Button title="Next ->" color={colorPalette.bgColor500} onPress={nextButtonHandler} disabled={(flashcardIndex > flashcardsLastIndex)}/>
          </View>
          <View style={styles.toLastButton}>
            <Button title="->>" color={colorPalette.bgColor500} onPress={toLastButtonHandler} disabled={(flashcardIndex >= flashcardsLastIndex)}/>
          </View>
        </View>
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
  setTextColor: {
    color: colorPalette.whiteColor,
  },
  setTopBarText: {
    color: colorPalette.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 19,
  },
  bottomButtons: {
    flexDirection: 'row',
  },
  prevButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  nextButton: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  toFirstButton: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  toLastButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  padding8: {
    padding: 8,
  },
  title: {
    flex: 8,
    alignItems: 'center',
  },
  hamburger: {
    flex: 2,
    alignItems: 'center',
  },
  settings: {
    flex: 2,
    alignItems: 'center',
  },
  smallIconImage: {
    width:  '35%',
    height: '35%',
    tintColor: 'white',
  },
});

/*
      <View style={styles.topBarContainer}>
        <Pressable style={styles.hamburger} onPress={() => ''}>
          <Image source={require('../assets/customIcons/menuIcon.png')} style={styles.smallIconImage} />
        </Pressable>
        <View style={styles.title}>
          <Text style={styles.setTopBarText}>
            Hiragana | Katakana
          </Text>
        </View>
        <Pressable style={styles.settings} onPress={() => ''}>

        </Pressable>
      </View>
*/