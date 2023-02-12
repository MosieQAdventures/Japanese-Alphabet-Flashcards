import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

import { FCAppContext } from '../Store/fc-app-context';
import { colorPalette } from '../Data/Colors';
import FlashcardKanjiList from '../Components/FlashcardKanjiList';
import { GetKanjiCharacters } from '../Data/ApiWrapper';
import Form from '../Components/Form';

export default function ApiScreen({ navigation }) {
  const fcAppCtx = useContext(FCAppContext)

  let isJoyo = fcAppCtx.joyoVisible
  let isJinmeiyo = fcAppCtx.jinmeiyoVisible

  const [flashcardIndex, setFlashcardIndex] = useState(fcAppCtx.idJinmeiyo);
  const flashcardDisplayCount = 1;

  const [apiData, setApiData] = useState([]);

  const [isFormVisible, setIsFormVisible] = useState(false)

  function nextButtonHandler() {
    let newValue = flashcardIndex + flashcardDisplayCount;
    if (isJoyo && !isJinmeiyo) fcAppCtx.setIdJoyo(newValue)
    if (isJinmeiyo && !isJoyo) fcAppCtx.setIdJinmeiyo(newValue)
    setFlashcardIndex(newValue)
  };
  function prevButtonHandler() {
    let newValue = flashcardIndex - flashcardDisplayCount;
    if (isJoyo && !isJinmeiyo) fcAppCtx.setIdJoyo(newValue)
    if (isJinmeiyo && !isJoyo) fcAppCtx.setIdJinmeiyo(newValue)
    setFlashcardIndex(newValue)
  };
  function toFirstButtonHandler() {
    let newValue = 0;
    if (isJoyo && !isJinmeiyo) fcAppCtx.setIdJoyo(newValue)
    if (isJinmeiyo && !isJoyo) fcAppCtx.setIdJinmeiyo(newValue)
    setFlashcardIndex(newValue)
  };
  function skip100ButtonHandler() {
    let newValue = flashcardIndex + 100;
    if (isJoyo && !isJinmeiyo) fcAppCtx.setIdJoyo(newValue)
    if (isJinmeiyo && !isJoyo) fcAppCtx.setIdJinmeiyo(newValue)
    setFlashcardIndex(newValue)
  }

  function showHideForm() {
    setIsFormVisible(!isFormVisible)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={showHideForm}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../assets/customIcons/hamburgerIcon.png')} resizeMode='contain' style={{maxWidth: 25, maxHeight: 25}} />
            </View>
          </Pressable>
        )
      },
    })
  })

  useEffect(() => {
    async function getData() {
      //const data = await GetKanjiCharacters(isJoyo, isJinmeiyo);
      const dataJoyo = await GetKanjiCharacters(true, false); // load joyo on start
      const dataJinmeiyo = await GetKanjiCharacters(false, true); // load joyo on start

      //console.log("UE:");
      //console.log(data);

      setApiData(dataJoyo);
    }
    
    getData();
  }, []);

  const dataFromApi = apiData;
  const flashcardsLastIndex = dataFromApi.length - flashcardDisplayCount;
  

  return (
    <>

      <View style={styles.mainContainer}>
       {isFormVisible ? <Form closeForm={showHideForm} /> : null}

        <View style={{flex: 2}}>
          <FlashcardKanjiList apiData = {dataFromApi} flashcardIndex = {flashcardIndex} flashcardCount = {flashcardDisplayCount} />
        </View>
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
            <Button title="+100 ->>" color={colorPalette.bgColor500} onPress={skip100ButtonHandler} disabled={(flashcardIndex >= flashcardsLastIndex-100)}/>
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

    
}
*/
