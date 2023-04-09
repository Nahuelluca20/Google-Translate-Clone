import {useReducer} from "react";

import {State, Action, Language, FromLanguage} from "../types/state";
import {AUTO_LANGUAGE} from "../types/constants";

const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

function reducer(state: State, action: Action) {
  const {type} = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    if (state.fromLanguage === AUTO_LANGUAGE) return state;

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
}

export default function useStore() {
  const [{fromLanguage, toLanguage, fromText, result, loading}, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const interchangeLenguages = () => dispatch({type: "INTERCHANGE_LANGUAGES"});

  const setFromLanguage = (fromLanguage: FromLanguage) =>
    dispatch({type: "SET_FROM_LANGUAGE", payload: fromLanguage});

  const setToLanguage = (toLanguage: Language) =>
    dispatch({type: "SET_TO_LANGUAGE", payload: toLanguage});

  const setFromText = (fromText: string) => dispatch({type: "SET_FROM_TEXT", payload: fromText});

  const setResult = (result: string) => dispatch({type: "SET_RESULT", payload: result});

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLenguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
