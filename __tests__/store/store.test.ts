import { HYDRATE } from 'next-redux-wrapper';
import { InitialState, reducer } from 'store/store';

import packageInfo from './../../package.json';

describe('store', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('HYDRATE', () => {
    it('persist store with same seaWord and persistversion', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() =>
            JSON.stringify({
              ...InitialState,
              persistVersion: packageInfo.version,
            })
          ),
          setItem: jest.fn(() => null),
        },
        writable: true,
      });
      const reducerResult = reducer(InitialState, {
        type: HYDRATE,
        payload: InitialState,
      });
      expect(reducerResult.seaWord).toBe(InitialState.seaWord);
    });
  });
});
