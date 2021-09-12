import { LOGIN_USER } from "./actions";

const initialState = {
  token: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default rootReducer
