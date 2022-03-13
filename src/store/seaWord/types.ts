// https://redux.js.org/recipes/usage-with-typescript
export const SET_WORD = 'SET_WORD';

export interface SeaWordState {
  word: object;
}

interface setWordAction {
  type: typeof SET_WORD;
}

export type setWordActionTypes = setWordAction;
