import { configureStore } from "@reduxjs/toolkit";
import { contactSliceReducer } from "./contactsSlice";
import { filterSliceReducer } from "./filtersSlice";


export const store = configureStore({
    reducer: {
        contacts: contactSliceReducer,
        filters: filterSliceReducer,
    }
});

  

