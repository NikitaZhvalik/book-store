import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	books: [],
    isLoading: false,
    error: null
}

const key = "AIzaSyCd535-0dsJ9kCIUPlVYnahGx0esWYFhTA"

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async ({query, filterCategories, filterNewest, startIndex, maxResults}, {rejectWithValue, dispatch}) => {
        try {
            dispatch(setLoading(true))
            const server = `https://www.googleapis.com/books/v1/volumes?q=${query}+terms${filterCategories === "all" ? '' : "+subject" + filterCategories}:&orderBy=${filterNewest}&startIndex=${startIndex}&maxResults=${maxResults}&key=${key}`
            const res = await axios.get(server)
            dispatch(setBooks(res?.data))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error.response.data.error.message)
            alert(error.response.data.error.message)
            return rejectWithValue(error.response.data)
        }
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
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
    extraReducers: {
        [getBooks.fulfilled]: () => console.log('fulfilled'),
        [getBooks.pending]: () => console.log('pending'),
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const {setBooks, setLoading, setError} = booksSlice.actions
export default booksSlice.reducer
