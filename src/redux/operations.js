import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://64315264d4518cfb0e5edea9.mockapi.io/words',
});

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (signal, thunkApi) => {
    try {
      const response = await agent.get('/items', {
        signal,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (id, thunkApi) => {
    try {
      const response = await agent.delete(`/items/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const checkWord = createAsyncThunk(
  'words/checkWord',
  async (word, thunkApi) => {
    try {
      const response = await agent.put(`/items/${word.id}`, word);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk(
  'words/addWord',
  async (word, thunkApi) => {
    try {
      const response = await agent.post(`/items`, word);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editWord = createAsyncThunk(
  'words/editWord',
  async (word, thunkApi) => {
    try {
      const response = await agent.put(`/items/${word.id}`, word);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
