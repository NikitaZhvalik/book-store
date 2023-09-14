import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	books: [],
    isLoading: false
}

const key = "AIzaSyCd535-0dsJ9kCIUPlVYnahGx0esWYFhTA"

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async ({query, filterCategories, filterNewest, startIndex, maxResults}, {rejectWithValue, dispatch}) => {
        dispatch(setLoading(true))
        const server = `https://www.googleapis.com/books/v1/volumes?q=${query}+terms${filterCategories === "all" ? '' : "+subject" + filterCategories}:&orderBy=${filterNewest}&startIndex=${startIndex}&maxResults=${maxResults}&key=${key}`
        const res = await axios.get(server)
        dispatch(setBooks(res?.data))
        dispatch(setLoading(false))
    }
)

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: {
        [getBooks.fulfilled]: () => console.log('fulfilled'),
        [getBooks.pending]: () => console.log('pending'),
        [getBooks.rejected]: () => alert('server error'),
    }
})

export const {setBooks, setLoading} = booksSlice.actions
export default booksSlice.reducer
