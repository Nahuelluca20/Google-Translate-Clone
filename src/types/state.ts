import {AUTO_LANGUAGE, SUPPORTED_LANGUAGES} from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLenguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLenguage;

export interface State {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  fromText: string;
  result: string;
  loading: boolean;
}

export type Action =
  | {type: "INTERCHANGE_LANGUAGES"}
  | {type: "SET_FROM_LANGUAGE"; payload: FromLanguage}
  | {type: "SET_TO_LANGUAGE"; payload: Language}
  | {type: "SET_FROM_TEXT"; payload: string}
  | {type: "SET_RESULT"; payload: string}
  | {type: "SET_LOADING"; payload: boolean};
