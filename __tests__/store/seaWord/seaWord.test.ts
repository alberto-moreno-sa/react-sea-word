import { AssetType } from 'components/world';
import {
  seaWordInitialState,
  seaWordReducer,
  updateSizeWordAction,
  switchCellAction,
  UPDATE_WORD_SIZE,
  SWITCH_WORLD_CELL,
} from 'store/seaWord';

describe('SeaWordRedux', () => {
  describe('Action setWordAction', () => {
    it('Should be update the size of the word', () => {
      const action = updateSizeWordAction({ x: 20, y: 20 });
      const reducer = seaWordReducer(seaWordInitialState, action);
      expect(action.type).toBe(UPDATE_WORD_SIZE);
      expect(reducer.world).toMatchObject({ x: 20, y: 20 });
    });

    it('switch an cell', () => {
      const action = switchCellAction({
        type: AssetType.dirt,
        x: 3,
        y: 6,
      });
      const reducer = seaWordReducer(seaWordInitialState, action);
      expect(action.type).toBe(SWITCH_WORLD_CELL);
      expect(JSON.stringify(reducer.mapWord)).toBe(
        JSON.stringify({
          3: {
            6: 'dirt',
          },
        })
      );
    });

    it('switch an cell', () => {
      const action = switchCellAction({
        type: AssetType.dirt,
        x: 5,
        y: 5,
      });
      const reducer = seaWordReducer(seaWordInitialState, action);

      expect(action.type).toBe(SWITCH_WORLD_CELL);
      expect(JSON.stringify(reducer.mapWord)).toBe(
        JSON.stringify({
          3: {
            6: 'dirt',
          },
        })
      );
    });
  });
});
