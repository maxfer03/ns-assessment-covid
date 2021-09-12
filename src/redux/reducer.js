import { FETCH_STATS, LOGIN_USER, REGISTER_USER } from "./actions";

const initialState = {
  /* token: "", */
  user: "",
  stats: [],
  authorized: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER || REGISTER_USER:
      return { ...state, user: action.payload.username, authorized: action.payload.authorized };
    case FETCH_STATS: 
      return {...state, stats: action.payload.stats, authorized: action.payload.authorized}
    default:
      return state;
  }
};

export default rootReducer
