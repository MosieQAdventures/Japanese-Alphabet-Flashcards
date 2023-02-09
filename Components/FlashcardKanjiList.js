import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlashcardKanji from './FlashcardKanji';
import { colorPalette } from '../Data/Colors'

export default function FlashcardList({ apiData, flashcardIndex, flashcardCount }) {
  //console.log("index " + flashcardIndex + ", count: " + flashcardCount)
  //if (apiData[0] !== undefined) console.log("From FCList: " + JSON.stringify(apiData[0].kanji));


  return (
    <View style={styles.cardsGrid}>
      { apiData.slice(flashcardIndex,flashcardCount+flashcardIndex).map(character => {
        return (
          <View style={styles.flashcardSingle} key={character.id}>
            <FlashcardKanji character = {character} />
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
    margin: 8,
  }
});