import { APILINK } from "./links";
import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const formatSentence = (sentence) => {
  let formattedNameWords = sentence.split("-");

  for (let word in formattedNameWords) {
    let CapitalLetter = formattedNameWords[word][0].toUpperCase();
    let restOfWord = formattedNameWords[word].slice(1);
    formattedNameWords[word] = CapitalLetter + restOfWord;
  }
  let formattedName = formattedNameWords.join(" ");
  return formattedName;
};
