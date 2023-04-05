import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/68j0rnFv6rKMdqOWB3y2/books';
const URLPost = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const initialState = {
  booksItems: [],
  isLoading: true,
  error: undefined,
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (e) {
      return isRejectedWithValue(e.message);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    try {
      const response = await axios.post(URL, book, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (e) {
      return isRejectedWithValue(e.message);
    }
  },

);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (item) => {
    try {
      const response = await axios.delete(`${URL}/${item}`);
      return response.data;
    } catch (e) {
      return isRejectedWithValue(e.message);
    }
  },

);

export const getApp = createAsyncThunk(
  'books/getApp',
  async () => {
    try {
      const response = await axios.post(URLPost);
      return response.data;
    } catch (e) {
      return isRejectedWithValue(e.message);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getApp.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getApp.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.uid = action.payload;
        return newState;
      })
      .addCase(getApp.rejected, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.error = action.payload;
        return newState;
      })
      .addCase(getBooks.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.booksItems = action.payload;
        return newState;
      })
      .addCase(getBooks.rejected, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.error = action.payload;
        return newState;
      })
      .addCase(addBook.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(addBook.fulfilled, (state) => {
        const newState = { ...state };
        newState.isLoading = false;
        return newState;
      })
      .addCase(addBook.rejected, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.error = action.payload;
        return newState;
      })
      .addCase(removeBook.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(removeBook.fulfilled, (state) => {
        const newState = { ...state };
        newState.isLoading = false;
        return newState;
      })
      .addCase(removeBook.rejected, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.error = action.payload;
        return newState;
      });
  },
});

export default booksSlice.reducer;
