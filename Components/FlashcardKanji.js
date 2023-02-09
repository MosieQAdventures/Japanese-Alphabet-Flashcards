import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colorPalette } from '../Data/Colors';
import { GetKanjiCharacterProperties } from '../Data/ApiWrapper';

export default function FlashcardKanji({ character }) {
  const [flip, setflip] = useState(false);

  const [apiCharData, setApiCharData] = useState([{"kanji":"娃","grade":9,"stroke_count":9,"meanings":["beautiful"],"kun_readings":["うつく.しい"],"on_readings":["ア","アイ","ワ"],"name_readings":["い"],"jlpt":null,"unicode":"5a03","heisig_en":"fair"}]);


  useEffect(() => {
    async function getData() {
      const data = await GetKanjiCharacterProperties(character.link);

      //console.log("UE:");
      //console.log(data);

      setApiCharData(data);
    }
    
    getData();
  }, [flip]);

  const dataFromApi = apiCharData[0]; 

  function flipHandler() {
    setflip(!flip)
    console.log("FC_Kanji: " + character.kanji)
    //console.log("FC: " + JSON.stringify(dataFromApi))
  }

  let front = (
    <Pressable style={styles.cardFront} onPress={flipHandler}>
      <View style={styles.frontText}>
        <Text style={styles.setTextMain}>
          {character.kanji}
        </Text>
        <Text style={styles.setTextDescription}>
          Kanji Symbol
        </Text>
      </View>

      <View style={styles.idposition}>
        <Text style={styles.setTextId}>{character.id}</Text>
      </View>
    </Pressable>
  );
  let back = (
    <Pressable style={styles.cardBack} onPress={flipHandler}>
      <View style={styles.backText}>
        <View style={styles.whiteBorder}>
          <Text style={styles.setTextDescription}>
            Meanings:
          </Text>
        </View>
        <View style={{flex: 1}}>
          {dataFromApi.meanings.slice(0,3).map(meaning => {
            return (
              <Text style={styles.setTextInfo} key={meaning}>
                {meaning}
              </Text>)
          })}
        </View>
      </View>

      <View style={styles.horizontalLine}/>

      <View style={styles.backText}>
        <View style={styles.whiteBorder}>
          <Text style={styles.setTextDescription}>
            Readings: (kun'yomi)
          </Text>
        </View>
        <View style={{flex: 1}}>
          {dataFromApi.kun_readings.slice(0,3).map(reading => {
            return (
              <Text style={styles.setTextInfo} key={reading}>
                {reading}
              </Text>)
          })}
        </View>
      </View>

      <View style={styles.idposition}>
        <Text style={styles.setTextId}>{character.id}</Text>
      </View>
    </Pressable>
  );
  let info = (
    <View style={styles.card}>
      <Text>Flashcard Kanji: (test it here)</Text>
      <Text>id</Text>
      <Text>symbolKanji</Text>
      <Text>strokeCount</Text>
      <Text>meanings</Text>
      <Text>readings</Text>
    </View>
  );

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
  cardBack: {
    width: 300,
    height: 300,
    padding: 8,
    borderWidth: 4,
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
    margin: 12,
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
  whiteBorder: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colorPalette.whiteColor,
    paddingBottom: 6,
    paddingTop: 4,
    paddingHorizontal: 10,
  },
  horizontalLine:{
    width: '75%',
    height: 2,
    backgroundColor: colorPalette.bgColor50,
  },
});

/*
  let front = (
    <Pressable style={styles.cardFront} onPress={flipHandler}>
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
    <Pressable style={styles.cardBack} onPress={flipHandler}>
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
*/