import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterCategories: 'all' //todo
}

export const filterCategoriesSlice = createSlice({
    name: 'filterCategories',
    initialState,
    reducers: {
        setFilterCategories: (state, action) => {
            state.filterCategories = action.payload
        }
    }
})

export const {setFilterCategories} = filterCategoriesSlice.actions
export default filterCategoriesSlice.reducer