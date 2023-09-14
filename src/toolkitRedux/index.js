import { combineReducers, configureStore } from "@reduxjs/toolkit";

import booksReducer from "./booksReducer";
import isLoading from "./booksReducer";
import queryReducer from "./queryReducer";
import filterNewestReducer from "./filterNewestReducer";
import filterCategoriesReducer from "./filterCategoriesReducer";

const routeReducer = combineReducers({
	books: booksReducer,
	query: queryReducer,
	filterNewest: filterNewestReducer,
	filterCategories: filterCategoriesReducer,
	loading: isLoading,
});

export const store = configureStore({
	reducer: routeReducer,
});
