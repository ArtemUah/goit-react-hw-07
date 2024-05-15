import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66434a896c6a656587066efd.mockapi.io';
export const fetchContacts = createAsyncThunk('fetchAll', async (_, thunkApi)=>{
try {
    const response = await axios.get('/contacts');
    return response.data;
} catch (error) {
    thunkApi.rejectWithValue(error.message);
}})

export const addContact = createAsyncThunk('addContact', async (contact, thunkApi)=> {
try {
    const response = await axios.post('/contacts', contact);
    return response.data;
} catch (error) {
    thunkApi.rejectWithValue(error.message);
}
});

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkApi)=>{
    try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
    } catch (error) {
        
    }
})