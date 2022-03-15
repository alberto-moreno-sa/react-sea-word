import { SeaWordState, WorldTypes, UPDATE_WORD_SIZE, SWITCH_WORLD_CELL } from './types';
import { prunedInvalidCell } from 'utils/WorldHelper';

export const seaWordInitialState: SeaWordState = {
  world: {
    x: 8,
    y: 8,
  },
  mapWord: {},
};

export function seaWordReducer(state = seaWordInitialState, action: WorldTypes): SeaWordState {
  switch (action.type) {
    case SWITCH_WORLD_CELL: {
      const { x, y, type } = action.payload;

      const newCoords = { ...state.mapWord };
      if (newCoords[x] === undefined) {
        newCoords[x] = {};
      }

      newCoords[x][y] = type;

      return {
        ...state,
        mapWord: newCoords,
      };
    }
    case UPDATE_WORD_SIZE:
      return {
        mapWord: prunedInvalidCell(state.mapWord, action.payload),
        world: action.payload,
      };
    default:
      return state;
  }
}
