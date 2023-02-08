import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flashcard from './Flashcard';
import { colorPalette } from '../Data/Colors'

export default function FlashcardList({ flashcards, flashcardIndex, flashcardCount }) {
  //console.log("index " + flashcardIndex + ", count: " + flashcardCount)
  return (
    <View style={styles.cardsGrid}>
      { flashcards.slice(flashcardIndex,flashcardCount+flashcardIndex).map(flashcard => {
        return (
          <View style={styles.flashcardSingle} key={flashcard.id}>
            <Flashcard flashcard = {flashcard} />
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  cardsGrid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcardSingle: {
    paddingVertical: 8,
  }
});
