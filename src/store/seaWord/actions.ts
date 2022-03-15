import { UPDATE_WORD_SIZE, SWITCH_WORLD_CELL, WorldTypes, WordSize, WorldCoords } from './types';

export function updateSizeWordAction(size: WordSize): WorldTypes {
  return {
    type: UPDATE_WORD_SIZE,
    payload: size,
  };
}

export function switchCellAction(selectedCoords: WorldCoords): WorldTypes {
  return {
    type: SWITCH_WORLD_CELL,
    payload: selectedCoords,
  };
}
