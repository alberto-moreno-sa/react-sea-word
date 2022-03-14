import {
  seaWordInitialState,
  seaWordReducer,
  updateSizeWordAction,
  UPDATE_WORD_SIZE,
} from 'store/seaWord';

describe('SeaWordRedux', () => {
  describe('Action setWordAction', () => {
    it.only('Should be update the size of the word', () => {
      const action = updateSizeWordAction({ x: 20, y: 20 });
      const reducer = seaWordReducer(seaWordInitialState, action);
      expect(action.type).toBe(UPDATE_WORD_SIZE);
      expect(reducer.world).toMatchObject({ x: 20, y: 20 });
    });
  });
});
