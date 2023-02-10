import { createContext, useState } from "react";

export const FCAppContext = createContext({
  joyoVisible: true,
  setJoyoVisible: () => {},

  jinmeiyoVisible: false,
  setJinmeiyoVisible: () => {},

  idJoyo: 0,
  setIdJoyo: (valueJoyo) => {},

  idJinmeiyo: 0,
  setIdJinmeiyo: (valueJinmeiyo) => {},

  resetKanjiIdContextValues: (idJoyo, idJinmeiyo) => {},
});

export default function FCAppContextProvider({children}) {
  const [joyoVisible, setJoyoVisibleValue] = useState(true);
  const [jinmeiyoVisible, setJinmeiyoVisibleValue] = useState(false);
  const [joyoId, setJoyoIdValue] = useState(0);
  const [jinmeiyoId, setJinmeiyoIdValue] = useState(0);

  function setJoyoVisible() {
    setJoyoVisibleValue(!joyoVisible);
  }
  function setJinmeiyoVisible() {
    setJinmeiyoVisibleValue(!jinmeiyoVisible);
  }
  function setIdJoyo(valueJoyo) {
    setJoyoIdValue(valueJoyo);
  }
  function setIdJinmeiyo(valueJinmeiyo) {
    setJinmeiyoIdValue(valueJinmeiyo);
  }
  function resetKanjiIdContextValues() {
    setJoyoIdValue(0);
    setJinmeiyoIdValue(0);
  }


  const value = {
    joyoVisible: joyoVisible,
    setJoyoVisible: setJoyoVisible,

    jinmeiyoVisible: jinmeiyoVisible,
    setJinmeiyoVisible: setJinmeiyoVisible,

    idJoyo: joyoId,
    setIdJoyo: setIdJoyo,

    idJinmeiyo: jinmeiyoId,
    setIdJinmeiyo: setIdJinmeiyo,

    resetKanjiIdContextValues: resetKanjiIdContextValues,
  }
  
  return (
    <FCAppContext.Provider value={value}>
      {children}
    </FCAppContext.Provider>
  )
}



