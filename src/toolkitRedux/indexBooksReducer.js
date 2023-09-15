import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startIndex: 0,
    maxIndex: 10
}

export const numBooksSlice = createSlice({
    name: 'numBooks',
    initialState,
    reducers: {
        setStartIndex: (state, action) => {
            state.startIndex = action.payload
        },
        setMaxIndex: (state, action) => {
            state.maxIndex = action.payload
        }
    }
})

export const {setStartIndex, setMaxIndex} = numBooksSlice.actions
export default numBooksSlice.reducer