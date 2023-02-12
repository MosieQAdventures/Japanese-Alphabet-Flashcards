import { createContext, useEffect, useState } from "react";

import { saveItemToAS, getItemFromAS, clearItemsFromAS } from '../Store/async-storage';


export const FCAppContext = createContext({
  joyoVisible: true,
  setJoyoVisible: () => {},

  jinmeiyoVisible: false,
  setJinmeiyoVisible: () => {},

  idJoyo: 0,
  setIdJoyo: (valueJoyo) => {},

  idJinmeiyo: 0,
  setIdJinmeiyo: (valueJinmeiyo) => {},

  idHiraKata: 0,
  setIdHiraKata: (valueHiraKata) => {},

  resetKanjiIdContextValues: (idJoyo, idJinmeiyo) => {},
});

export default function FCAppContextProvider({children}) {
  const [hiraKataId, setHiraKataIdValue] = useState(0);
  const [joyoId, setJoyoIdValue] = useState(0);
  const [jinmeiyoId, setJinmeiyoIdValue] = useState(0);
  const [joyoVisible, setJoyoVisibleValue] = useState(false);
  const [jinmeiyoVisible, setJinmeiyoVisibleValue] = useState(true);

  useEffect(() => {
    async function fetchData() {
      //load from db at the start of the app (once)
      getItemFromAS('hiraKataId', setHiraKataIdValue, true, false)
      getItemFromAS('joyoId', setJoyoIdValue, true, false)
      getItemFromAS('jinmeiyoId', setJinmeiyoIdValue, true, false)
      getItemFromAS('joyoVisible', setJoyoVisibleValue, false, true)
      getItemFromAS('jinmeiyoVisible', setJinmeiyoVisibleValue, false, true)
    }
    
    fetchData();
  }, [])

  function setIdHiraKata(valueHiraKata) {
    setHiraKataIdValue(valueHiraKata);
    saveItemToAS('hiraKataId', valueHiraKata)
  }
  function setIdJoyo(valueJoyo) {
    setJoyoIdValue(valueJoyo);
    saveItemToAS('joyoId', valueJoyo)
  }
  function setIdJinmeiyo(valueJinmeiyo) {
    setJinmeiyoIdValue(valueJinmeiyo);
    saveItemToAS('jinmeiyoId', valueJinmeiyo)
  }
  function resetKanjiIdContextValues() {
    setJoyoIdValue(0);
    setJinmeiyoIdValue(0);

    saveItemToAS('joyoId', 0)
    saveItemToAS('jinmeiyoId', 0)
  }
  function setJoyoVisible() {
    let newValue = !joyoVisible;
    setJoyoVisibleValue(newValue);
    saveItemToAS('joyoVisible', newValue)
  }
  function setJinmeiyoVisible() {
    let newValue = !jinmeiyoVisible;
    setJinmeiyoVisibleValue(newValue);
    saveItemToAS('jinmeiyoVisible', newValue)
  }


  const value = {
    idHiraKata: hiraKataId,
    setIdHiraKata: setIdHiraKata,

    idJoyo: joyoId,
    setIdJoyo: setIdJoyo,

    idJinmeiyo: jinmeiyoId,
    setIdJinmeiyo: setIdJinmeiyo,

    joyoVisible: joyoVisible,
    setJoyoVisible: setJoyoVisible,

    jinmeiyoVisible: jinmeiyoVisible,
    setJinmeiyoVisible: setJinmeiyoVisible,

    resetKanjiIdContextValues: resetKanjiIdContextValues,
  }
  
  return (
    <FCAppContext.Provider value={value}>
      {children}
    </FCAppContext.Provider>
  )
}



