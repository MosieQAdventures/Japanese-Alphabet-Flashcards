import { React, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colorPalette } from '../Data/Colors';

export default function FlashcardKanji({ flashcard }) {
  const [flip, setflip] = useState(false);


  let front = (
    <Pressable style={styles.cardFront} onPress={() => setflip(!flip)}>
      <View style={styles.frontText}>
        <Text style={styles.setTextMain}>
          {flashcard.symbolKanji}
        </Text>
        <Text style={styles.setTextDescription}>
          Kanji Symbol
        </Text>
      </View>

      <View style={styles.idposition}>
        <Text style={styles.setTextId}>{flashcard.id}</Text>
      </View>
    </Pressable>
  )
  let back = (
    <Pressable style={styles.cardBack} onPress={() => setflip(!flip)}>
      <View style={styles.backText}>
        <Text style={styles.setTextDescription}>
          Meanings:
        </Text>
        <View style={{flex: 1}}>
          {flashcard.meanings.map(meaning => {
            return (
              <Text style={styles.setTextInfo} key={meaning}>
                - {meaning}
              </Text>)
          })}
        </View>
      </View>

      <View style={styles.backText}>
        <Text style={styles.setTextDescription}>
          Readings:
        </Text>
        <Text style={styles.setTextInfo}>
          {flashcard.readings[0]}
        </Text>
        <Text style={styles.setTextInfo}>
          ( {flashcard.readings[1]} )
        </Text>
      </View>

      <View style={styles.idposition}>
        <Text style={styles.setTextId}>{flashcard.id}</Text>
      </View>
    </Pressable>
  )
  let info = (
    <View style={styles.card}>
      <Text>Flashcard Kanji:</Text>
      <Text>{flashcard.id}</Text>
      <Text>{flashcard.symbolKanji}</Text>
      <Text>{flashcard.strokeCount}</Text>
      <Text>{flashcard.meanings}</Text>
      <Text>{flashcard.readings}</Text>
    </View>
  )
  return ( flip ? back : front )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcardSingle: {
    padding: 8,
  },
  cardFront: {
    width: 300,
    height: 300,
    padding: 8,
    borderRadius: 8,
    borderColor: colorPalette.whiteColor,
    backgroundColor: colorPalette.bgColor500,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  cardBack: {
    width: 300,
    height: 300,
    padding: 8,
    borderRadius: 8,
    borderColor: colorPalette.whiteColor,
    backgroundColor: colorPalette.bgColor500,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', //'column'
    elevation: 5,
  },
  frontText: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 36,
    margin: 12,
  },
  backText: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 24,
    margin: 24,
  },
  setTextDescription: {
    color: colorPalette.whiteColor,
    fontSize: 16,
    textAlign: 'center',
  },
  setTextMain: {
    color: colorPalette.whiteColor,
    fontSize: 100,
    textAlign: 'center',
  },
  setTextInfo: {
    color: colorPalette.whiteColor,
    fontSize: 20,
    textAlign: 'center',
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
});