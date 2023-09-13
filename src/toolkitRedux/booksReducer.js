import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	books: [],
}

const key = "AIzaSyCd535-0dsJ9kCIUPlVYnahGx0esWYFhTA"
const minQuantityBooks = 0
const maxQuantityBooks = 8 //TODO Поменять на 40

export const getBooks = createAsyncThunk(
    'books/getBooks', 
    async ({query, filterCategories, filterNewest}, {rejectWithValue, dispatch}) => {
        const server = `https://www.googleapis.com/books/v1/volumes?q=${query}+terms+subject${filterCategories}:&orderBy=${filterNewest}&startIndex=${minQuantityBooks}&maxResults=${maxQuantityBooks}&key=${key}`
        const res = await axios.get(server)
        console.log("🚀 ~ file: booksReducer.js:17 ~ server:", server)
        dispatch(setBooks(res.data))

        console.log("filterNewest", filterCategories);
        console.log("filterNewest", filterNewest);
    }
)

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        }
    },
    extraReducers: {
        [getBooks.fulfilled]: () => console.log('fulfilled'),
        [getBooks.pending]: () => {
            console.log('pending');
            // <Loader /> //TODO
        },
        [getBooks.rejected]: () => console.log('rejected'),
    }
})

export const {setBooks} = booksSlice.actions
export default booksSlice.reducer

// https://www.googleapis.com/books/v1/volumes?q=rw+terms&orderBy=relevance&startIndex=0&maxResults=40&key=AIzaSyCd535-0dsJ9kCIUPlVYnahGx0esWYFhTA