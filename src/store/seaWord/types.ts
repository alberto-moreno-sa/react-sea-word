// https://redux.js.org/recipes/usage-with-typescript
export const UPDATE_WORD_SIZE = 'UPDATE_WORD_SIZE';

export interface WordSize {
  x: number;
  y: number;
}
export interface SeaWordState {
  world: WordSize;
}

interface updateSizeWordAction {
  type: typeof UPDATE_WORD_SIZE;
  payload: WordSize;
}

export type WorldTypes = updateSizeWordAction;
