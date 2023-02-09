import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colorPalette } from '../Data/Colors'


export default function Flashcard({ flashcard }) {
  const [flip, setflip] = useState(false);

  let front = (
    <Pressable style={styles.cardFront} onPress={() => setflip(!flip)}>
      <View style={styles.frontText}>
        <Text style={styles.setTextMain}>
          {flashcard.symbolHiragana}
        </Text>
        <Text style={styles.setTextDescription}>
          Hiragana
        </Text>
      </View>

      <View style={styles.verticalLine}/>

      <View style={styles.frontText}>
        <Text style={styles.setTextMain}>
          {flashcard.symbolKatakana}
        </Text>
        <Text style={styles.setTextDescription}>
          Katakana
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
        <Text style={styles.setTextMain}>
          {flashcard.meaningUppercase/*} / {flashcard.meaningLowercase*/}
        </Text>
        <Text style={styles.setTextDescription}>
          Meaning
        </Text>
      </View>

      <View style={styles.verticalLine}/>

      <View style={styles.backText}>
        <Text style={styles.setTextInfo}>
          " {flashcard.additionalInfo} "
        </Text>
        <Text style={styles.setTextDescription}>
          Additional Info
        </Text>
      </View>

      <View style={styles.idposition}>
        <Text style={styles.setTextId}>{flashcard.id}</Text>
      </View>      
    </Pressable>
  );

  return ( flip ? back : front )
}

const styles = StyleSheet.create({
  cardFront: {
    width: 300,
    height: 120,
    padding: 8,
    borderWidth: 3,
    borderRadius: 8,
    borderColor: colorPalette.whiteColor,
    backgroundColor: colorPalette.bgColor400,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  cardBack: {
    width: 300,
    height: 120,
    padding: 8,
    borderWidth: 3,
    borderRadius: 8,
    borderColor: colorPalette.whiteColor,
    backgroundColor: colorPalette.bgColor400,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row', //'column'
    elevation: 5,
  },
  frontText: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 36,
  },
  backText: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 24,
  },
  setTextDescription: {
    color: colorPalette.whiteColor,
    fontSize: 12,
    textAlign: 'center',
  },
  setTextMain: {
    color: colorPalette.whiteColor,
    fontSize: 54,
    textAlign: 'center',
  },
  setTextInfo: {
    color: colorPalette.whiteColor,
    fontSize: 16,
    textAlign: 'center',
  },
  verticalLine:{
    height: '100%',
    width: 2,
    backgroundColor: colorPalette.bgColor50,
  },
  setTextId: {
    color: colorPalette.whiteColor,
    fontSize: 12,
    textAlign: 'center',
  },
  idposition: {
    bottom: 12,
    right: 12,
    position: "absolute",
  },
});

// { flip ? flashcard.meaningUppercase : flashcard.symbolHiragana }

