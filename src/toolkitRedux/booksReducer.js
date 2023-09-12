import { createReducer ,createAction} from '@reduxjs/toolkit';

const defaultState = {
	books: [],
}

export const addManyBooksAction = createAction('ADD_MANY_BOOKS');

export default createReducer(defaultState, {
	[addManyBooksAction]: function (state, action) {
		state.books = [...action.payload.items];
	},
})