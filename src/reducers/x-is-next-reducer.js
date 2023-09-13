export const xIsNextReducer = (state = true, action) => {
	switch (action.type) {
		case 'xIsNext/change_xIsNext':
			return action.payload;
		default:
			return state;
	}
};
