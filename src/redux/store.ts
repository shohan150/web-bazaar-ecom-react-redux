import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import homeReducer from "./features/homeSlice";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
    authReducer,
    homeReducer,
  },
});

// store.getState(): This expression returns the current state of the Redux store.
// typeof store.getState(): This expression returns the type of the function store.getState().
// ReturnType<typeof store.getState()>: This type alias extracts the return type of the store.getState() function.
// So, RootState represents the type of the entire application state.
export type RootState = ReturnType<typeof store.getState>;

// store.dispatch: This is a function that dispatches actions to update the Redux store.
// typeof store.dispatch: This expression returns the type of the store.dispatch function, which is a function that accepts an action and returns a void.
// So, AppDispatch represents the type of the dispatch function, which is used to dispatch actions.
export type AppDispatch = typeof store.dispatch;
