import { createSlice } from "@reduxjs/toolkit";
import { initialListOfContacts } from "./constants";


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: initialListOfContacts,
    },
    reducers: {
        addContact (state,action) {
            state.items.push(action.payload)
        },
        deleteContact (state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        }
    }
});

export const {addContact, deleteContact} = contactSlice.actions;
export const contactSliceReducer = contactSlice.reducer;


