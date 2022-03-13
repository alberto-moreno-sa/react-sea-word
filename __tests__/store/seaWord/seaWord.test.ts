import { seaWordInitialState, seaWordReducer, setWordAction, SET_WORD } from 'store/seaWord';

describe('SeaWordRedux', () => {
  describe('Action setWordAction', () => {
    it('returns action and payload as expected', () => {
      const newWord = seaWordInitialState;
      const action = setWordAction();
      const reducer = seaWordReducer(seaWordInitialState, action);
      expect(action.type).toBe(SET_WORD);
      expect(reducer).toMatchObject(newWord);
    });
  });
});
