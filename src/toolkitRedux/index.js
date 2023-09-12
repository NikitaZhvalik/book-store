import { combineReducers ,configureStore} from '@reduxjs/toolkit';

import booksReducer from './booksReducer';
import queryReducer from './queryReducer';

const routeReducer = combineReducers({
    books: booksReducer,
    query: queryReducer
})

export const store = configureStore({
    reducer: routeReducer
})