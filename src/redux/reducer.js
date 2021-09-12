import { LOGIN_USER, REGISTER_USER } from "./actions";

const initialState = {
  /* token: "", */
  user: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER || REGISTER_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default rootReducer
