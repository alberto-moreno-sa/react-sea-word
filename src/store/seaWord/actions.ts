import { UPDATE_WORD_SIZE, WorldTypes, WordSize } from './types';

export function updateSizeWordAction(size: WordSize): WorldTypes {
  return {
    type: UPDATE_WORD_SIZE,
    payload: size,
  };
}
