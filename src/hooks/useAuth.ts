import { updateModal } from "../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);

  // The requireAuth function is a higher-order function, meaning it takes a function as an argument and returns another function. It's a common pattern for implementing authentication checks in React applications. By using this function, you can ensure that protected actions are only executed by authenticated users. If not logged in, show the modal, if logged in then execute the action. So, a higher level funtion that dispatches that action after confirming that the user is logged in.
  //action: This is the name of a parameter.
  //() => void: This is a function type declaration. It means that the action parameter is a function that takes no arguments and returns nothing (void).
  const requireAuth = (action: () => void) => {
    if (!isLoggedIn) {
      dispatch(updateModal(true));
    } else {
      action();
    }
  };

  return { requireAuth };
};

export default useAuth;
