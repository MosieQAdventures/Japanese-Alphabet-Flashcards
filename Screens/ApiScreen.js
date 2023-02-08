import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import { colorPalette } from '../Data/Colors';

import { DUMMYDATA } from '../Data/DummyData';
import FlashcardKanjiList from '../Components/FlashcardKanjiList';

export default function ApiScreen() {

  const [flashcards, setFlashcards] = useState(DUMMYDATA);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const flashcardDisplayCount = 1;
  const flashcardsLastIndex = DUMMYDATA.length - flashcardDisplayCount;

  function nextButtonHandler() {
    let newValue = flashcardIndex + flashcardDisplayCount;
    setFlashcardIndex(newValue)
  };
  function prevButtonHandler() {
    let newValue = flashcardIndex - flashcardDisplayCount;
    setFlashcardIndex(newValue)
  };
  function toFirstButtonHandler() {
    let newValue = 0;
    setFlashcardIndex(newValue)
  };
  function skip100ButtonHandler() {
    let newValue = flashcardIndex + 100;
    setFlashcardIndex(newValue)
  }


  return (
    <>
      
      <View style={styles.mainContainer}>
        <FlashcardKanjiList flashcards = {flashcards} flashcardIndex = {flashcardIndex} flashcardCount = {flashcardDisplayCount} />
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
            <Button title="Next ->" color={colorPalette.bgColor500} onPress={nextButtonHandler} disabled={(flashcardIndex >= flashcardsLastIndex)}/>
          </View>
          <View style={styles.skip100Button}>
            <Button title="+100 ->>" color={colorPalette.bgColor500} onPress={skip100ButtonHandler} disabled={(flashcardIndex >= flashcardsLastIndex-101)}/>
          </View>
        </View>
      </View>
    </>
  )
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
  skip100Button: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
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
})

/*
      <View style={styles.topBarContainer}>
        <Pressable style={styles.hamburger} onPress={() => ''}>
          <Image source={require('../assets/customIcons/menuIcon.png')} style={styles.smallIconImage} />
        </Pressable>
        <View style={styles.title}>
          <Text style={styles.setTopBarText}>
            Kanji Characters
          </Text>
        </View>
        <Pressable style={styles.settings} onPress={() => ''}>

        </Pressable>
      </View>
*/
