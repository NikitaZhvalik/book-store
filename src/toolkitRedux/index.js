import { combineReducers, configureStore } from "@reduxjs/toolkit";

import booksReducer from "./booksReducer";
import queryReducer from "./queryReducer";
import filterNewestReducer from "./filterNewestReducer";
import filterCategoriesReducer from "./filterCategoriesReducer";

const routeReducer = combineReducers({
	books: booksReducer,
	query: queryReducer,
	filterNewest: filterNewestReducer,
	filterCategories: filterCategoriesReducer,
});

export const store = configureStore({
	reducer: routeReducer,
});
