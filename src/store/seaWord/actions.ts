import { SET_WORD, setWordActionTypes } from './types';

export function setWordAction(): setWordActionTypes {
  return {
    type: SET_WORD,
  };
}
