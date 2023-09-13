import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterNewest: 'relevance'
}

export const filterNewestSlice = createSlice({
    name: 'filterNewest',
    initialState,
    reducers: {
        setFilterNewest: (state, action) => {
            state.filterNewest = action.payload
        }
    }
})

export const {setFilterNewest} = filterNewestSlice.actions
export default filterNewestSlice.reducer