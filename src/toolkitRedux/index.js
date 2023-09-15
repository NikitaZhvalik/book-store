import { combineReducers, configureStore } from "@reduxjs/toolkit";

import booksReducer from "./booksReducer";
import isLoading from "./booksReducer";
import queryReducer from "./queryReducer";
import filterNewestReducer from "./filterNewestReducer";
import filterCategoriesReducer from "./filterCategoriesReducer";

import startIndex from "./indexBooksReducer";
import maxIndex from "./indexBooksReducer";

const routeReducer = combineReducers({
	books: booksReducer,
	query: queryReducer,
	filterNewest: filterNewestReducer,
	filterCategories: filterCategoriesReducer,
	loading: isLoading,
	start: startIndex,
	max: maxIndex
})

export const store = configureStore({
	reducer: routeReducer,
});
