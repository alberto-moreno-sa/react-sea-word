import { SeaWordState, setWordActionTypes, SET_WORD } from './types';

export const seaWordInitialState: SeaWordState = {
  word: {},
};

export function seaWordReducer(
  state = seaWordInitialState,
  action: setWordActionTypes
): SeaWordState {
  switch (action.type) {
    case SET_WORD:
      return {
        ...state,
      };
    default:
      return state;
  }
}
