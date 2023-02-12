import React, { useContext, useState } from 'react'
import { Text, Switch, Button, View, StyleSheet, Pressable, Image } from 'react-native'
import { colorPalette } from '../Data/Colors'
import { FCAppContext } from '../Store/fc-app-context';

export default function Form({ closeForm }) {

  const fcAppCtx = useContext(FCAppContext);

  /*const [isEnabled, setIsEnabled] = useState({
    joyo: true, 
    jinmeiyo: false,
  });*/
  
  function switchPressHandler(switchIdentifier) {
    if (switchIdentifier === 'joyo') {
      fcAppCtx.setJoyoVisible();
      if (fcAppCtx.joyoVisible != fcAppCtx.jinmeiyoVisible) {
        fcAppCtx.setJinmeiyoVisible();
      } else {
        //fcAppCtx.setJinmeiyoVisible();
        //fcAppCtx.setJinmeiyoVisible();
      }
    } else if (switchIdentifier === 'jinmeiyo') {
      fcAppCtx.setJinmeiyoVisible();
      if (fcAppCtx.joyoVisible != fcAppCtx.jinmeiyoVisible) {
        fcAppCtx.setJoyoVisible();
      } else {
        //fcAppCtx.setJoyoVisible();
        //fcAppCtx.setJoyoVisible();
      }
    } else {}
  }

  function formButtonPressHandler() {
    closeForm()
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.switchesContainer}>
        <View style={styles.optionContainer}>
          <Text style={styles.text}>Joyo Kanji Symbols</Text>
          <View style={styles.switch}>
            <Switch
              trackColor={{false: colorPalette.grey300, true: colorPalette.blue400}}
              thumbColor={fcAppCtx.joyoVisible ? colorPalette.blue800 : colorPalette.grey700}
              ios_backgroundColor={colorPalette.bgColor500}
              onValueChange={switchPressHandler.bind(this,'joyo')}
              value={fcAppCtx.joyoVisible}
            />
          </View>
        </View>

        <View style={styles.optionContainer}>
          <Text style={styles.text}>Jinmeiyo Kanji Symbols</Text>
          <View style={styles.switch}>
            <Switch
              trackColor={{false: colorPalette.grey300, true: colorPalette.blue400}}
              thumbColor={fcAppCtx.jinmeiyoVisible ? colorPalette.blue800 : colorPalette.grey700}
              ios_backgroundColor={colorPalette.bgColor500}
              onValueChange={switchPressHandler.bind(this,'jinmeiyo')}
              value={fcAppCtx.jinmeiyoVisible}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={{flex:1}} />
          <View style={{flex:1}} >
            <Button title="Set" color={colorPalette.bgColor500} onPress={formButtonPressHandler}/>
          </View>
          <View style={{flex:1}} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    minWidth: 100,
    maxHeight: 160,
    flexDirection:'column',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: colorPalette.bgColor,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  switchesContainer: {
    minWidth: 300,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
  },
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    flex: 1,
  },
  text: {
    flex: 6,
    color: colorPalette.whiteColor,
    fontSize: 18,
  },
})
