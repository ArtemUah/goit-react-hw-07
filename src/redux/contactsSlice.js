import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    // reducers: {
    //     addContact (state,action) {
    //         state.items.push(action.payload)
    //     },
    //     deleteContact (state, action) {
    //         const index = state.items.findIndex(contact => contact.id === action.payload);
    //         state.items.splice(index, 1);
    //     }
    // },
    extraReducers: (builder) => builder.addCase(fetchContacts.pending, (state)=>{
        state.loading = true;
        state.error = false;
    }).addCase(fetchContacts.fulfilled, (state, action) =>{
        state.loading = false;
        state.items = action.payload;
    }).addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
    }).addCase(addContact.pending, (state) =>{
        state.loading = true;
        state.error = false;
    }).addCase(addContact.fulfilled, (state,action)=>{
    state.loading = false;
    state.items.push(action.payload);
    }).addCase(addContact.rejected, (state) => {
        state.loading= false;
        state.error = true;
    }).addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
    }).addCase(deleteContact.fulfilled, (state, action) =>{
        state.loading = false;
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
    }).addCase(deleteContact.rejected, (state) =>{
        state.loading = false;
        state.error = true;
    })
})

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, nameFilter)=>{
return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
})

export const contactSliceReducer = contactSlice.reducer;


