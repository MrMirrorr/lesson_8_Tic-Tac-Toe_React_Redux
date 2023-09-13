import { CHANGE_X_IS_NEXT, CLEAR_BOARD, FILL_CELL } from '../action-types';

export const fillCell = (idx, value) => ({
	type: FILL_CELL,
	payload: { idx, value },
});

export const clearBoard = () => ({
	type: CLEAR_BOARD,
});

export const changeXIsNext = (isNext) => ({
	type: CHANGE_X_IS_NEXT,
	payload: isNext,
});
