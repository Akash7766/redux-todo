import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4(), name: "Akash", number: "01778613295" },
  { id: uuidv4(), name: "Minhazur Rahman", number: "01969158860" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, number } = action.payload;
      const exitsContact = state.find((contact) => contact.id === id);
      if (exitsContact) {
        exitsContact.name = name;
        exitsContact.number = number;
      }
    },
    deletetUser: (state, action) => {
      const { id } = action.payload;
      const exitsContact = state.find((contact) => contact.id === id);
      if (exitsContact) {
        return state.filter((contact) => contact.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deletetUser } = todosSlice.actions;

export default todosSlice.reducer;
