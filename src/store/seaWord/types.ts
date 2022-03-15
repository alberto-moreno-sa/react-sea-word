import { AssetType } from 'components/world';

// https://redux.js.org/recipes/usage-with-typescript
export const UPDATE_WORD_SIZE = 'UPDATE_WORD_SIZE';
export const SWITCH_WORLD_CELL = 'SWITCH_WORLD_CELL';

export interface WordSize {
  x: number;
  y: number;
}

export interface WorldCoords {
  type: AssetType.dirt | AssetType.water;
  x: number;
  y: number;
}
export interface SeaWordState {
  world: WordSize;
  mapWord: MapCoords;
}

export interface MapCoords {
  [coordX: number]: {
    [coordY: number]: AssetType.dirt | AssetType.water;
  };
}

interface switchCellAction {
  type: typeof SWITCH_WORLD_CELL;
  payload: WorldCoords;
}
interface updateSizeWordAction {
  type: typeof UPDATE_WORD_SIZE;
  payload: WordSize;
}

export type WorldTypes = updateSizeWordAction | switchCellAction;
