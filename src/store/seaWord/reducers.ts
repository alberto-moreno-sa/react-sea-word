import { SeaWordState, WorldTypes, UPDATE_WORD_SIZE } from './types';

export const seaWordInitialState: SeaWordState = {
  world: {
    x: 8,
    y: 8,
  },
};

export function seaWordReducer(state = seaWordInitialState, action: WorldTypes): SeaWordState {
  switch (action.type) {
    case UPDATE_WORD_SIZE:
      return {
        ...state,
        world: action.payload,
      };
    default:
      return state;
  }
}
