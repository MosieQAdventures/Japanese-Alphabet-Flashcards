import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import axios from 'axios';


const APILINK = "https://kanjiapi.dev/v1/";

// fetch all characters
export async function GetKanjiCharacters() {
  
  const joyo     = "kanji/joyo";     // ~2136
  const jinmeiyo = "kanji/jinmeiyo"; // ~805

  let response = null;

  try {
    response = await axios.get(APILINK + joyo); //switch here for 2nd one if needed (joyo/jin)
  } catch (error) {
    console.log("ERROR!!");
    console.log(error);
  }
  
  const tempArray = [];
  //console.log("Response.data: "+response.data);

  for (let i=0; i < response.data.length; i++) {
    const characterObj = {
      id: i+1,
      kanji: response.data[i],
      link: APILINK+"kanji/"+response.data[i],
    };
    tempArray.push(characterObj);
  }

  //console.log("W:");
  //console.log(tempArray);

  return tempArray;
}

// for single character
export async function GetKanjiCharacterProperties(apiLinkForCharDetails) {

  let response = null;

  try {
    response = await axios.get(apiLinkForCharDetails);
  } catch (error) {
    console.log("ERROR!!");
    console.log(error);
  }
  
  const tempArray = [];

  tempArray.push(response.data);

  
  //console.log("Response.data.meaning: "+JSON.stringify(response.data.heisig_en));
  //console.log("W:");
  //console.log(tempArray);

  return tempArray;
}







export default function ApiWrapper() {
  
  return (
    <>

    </>
  )
}
