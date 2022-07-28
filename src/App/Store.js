import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Services/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
