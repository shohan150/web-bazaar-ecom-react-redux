import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
// This code snippet is a common pattern used in React applications that leverage Redux to manage state. It provides custom hooks to streamline the use of useDispatch and useSelector within components.RootState and AppDispatch are store root state and store dispatch function imported from the store file.

//This custom hook returns the dispatch function with the type AppDispatch. This ensures type safety when dispatching actions.
export const useAppDispatch = () => useDispatch<AppDispatch>();
//This custom hook returns the useSelector hook with the RootState type. This ensures that the selected state is correctly typed.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Benefits:
// Type Safety: By explicitly defining the types of the dispatched actions and the state, you can improve code reliability and catch potential type errors early.
// Code Reusability: These custom hooks can be reused across multiple components, reducing code duplication.
// Enhanced Readability: The custom hooks provide a more concise and readable way to use Redux in your components.
