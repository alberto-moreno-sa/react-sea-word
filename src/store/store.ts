import configs from 'configs';
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

interface SeaWordStore extends Store {}

const combinedReducer = combineReducers({
  seaWorld: seaWordReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
export const useSelector = createSelectorHook<RootState>();

export const InitialState: RootState = {
  seaWorld: seaWordInitialState,
};

export const reducer = (state = InitialState, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
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
  store = makeConfiguredStore(reducer);
  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: configs.env === 'local',
});
