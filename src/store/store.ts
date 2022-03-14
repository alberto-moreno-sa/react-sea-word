import configs from 'configs';
import packageInfo from './../../package.json';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  StoreEnhancer,
  Store,
  Reducer,
  AnyAction,
} from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { seaWordReducer, seaWordInitialState } from './seaWord';
import { createSelectorHook } from 'react-redux';
import { Util } from 'utils';

const version = packageInfo.version;

interface SeaWordStore extends Store {}

const combinedReducer = combineReducers({
  seaWorld: seaWordReducer,
});

export const PERSIST_KEY = 'seaword';
export type RootState = ReturnType<typeof combinedReducer>;
export const useSelector = createSelectorHook<RootState>();

export const InitialState: RootState = {
  seaWorld: seaWordInitialState,
};

export interface PersistedState extends RootState {
  persistVersion: string;
}

export const reducer = (state = InitialState, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
    if (!Util.isServer()) {
      const persistedState = localStorage.getItem(PERSIST_KEY);
      if (persistedState !== null) {
        try {
          const persistedStateObj: PersistedState = JSON.parse(persistedState);
          if (
            JSON.stringify(action.payload.world) === JSON.stringify(persistedStateObj.world) &&
            persistedStateObj.persistVersion === version
          ) {
            delete persistedStateObj.persistVersion;
            state = { ...persistedStateObj };
          }
        } catch (error) {
          console.error('Persist state error', error);
        }
      }
    }

    const world = state.seaWorld !== null ? state.seaWorld : action.payload.world;

    // Persists on hydrate
    const nextState: RootState = {
      ...state,
      ...action.payload,
      seaWorld: world,
    };

    return nextState;
  }

  return combinedReducer(state, action);
};

const bindMiddleware = (middleware): StoreEnhancer => {
  if (configs.env === 'local') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { logger } = require('redux-logger');
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export let store: SeaWordStore = null;
const makeConfiguredStore = (r: Reducer<RootState>): Store =>
  createStore(r, InitialState, bindMiddleware([thunkMiddleware]));

export const makeStore = (context: Context): Store => {
  const isServer = Util.isServer();
  store = makeConfiguredStore(reducer);
  store.subscribe(() => {
    if (!isServer) {
      localStorage.setItem(
        PERSIST_KEY,
        JSON.stringify({ ...store.getState(), persistVersion: version })
      );
    }
  });
  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: configs.env === 'local',
  storeKey: PERSIST_KEY,
});
