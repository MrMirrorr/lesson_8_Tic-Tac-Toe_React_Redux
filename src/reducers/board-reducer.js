export const boardReducer = (state = [], action) => {
	switch (action.type) {
		case 'board/fill_cell':
			return [
				...state.slice(0, action.payload.idx),
				action.payload.value,
				...state.slice(action.payload.idx + 1),
			];
		case 'board/clear_board':
			return Array(9).fill(null);
		default:
			return state;
	}
};
