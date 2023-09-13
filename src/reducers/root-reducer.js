import { combineReducers } from 'redux';
import { boardReducer } from './board-reducer';
import { xIsNextReducer } from './x-is-next-reducer';

export const rootReducer = combineReducers({
	board: boardReducer,
	xIsNext: xIsNextReducer,
});
