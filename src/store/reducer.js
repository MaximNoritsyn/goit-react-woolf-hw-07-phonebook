import { reducerContacts } from "./contacts/slice";
import { filterReducer } from "./filter/slice";

export const rootReducer = {
    contacts: reducerContacts,
    filter: filterReducer,
};