import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/root-reducer';
import { initialState } from './initial-state';

export const store = createStore(rootReducer, initialState, composeWithDevTools());
