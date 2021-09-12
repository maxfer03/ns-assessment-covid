import {
  FETCH_DETAIL,
  FETCH_STATS,
  LOGIN_USER,
  REGISTER_USER,
} from "./actions";

const initialState = {
  /* token: "", */
  authorized: false,
  user: "",
  stats: [],
  detail: {
    country: "",
    continent: "",
    day: "",
    population: 0,
    cases: {
      "1M_pop": "",
      active: 0,
      critical: 0,
      new: 0,
      recovered: 0,
      total: 0,
    },
    deaths: { "1M_pop": "", new: 0, total: 0 },
    tests: { "1M_pop": "", total: 0 },
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER || REGISTER_USER:
      return {
        ...state,
        /* token: action.payload.token, */ user: action.payload.username,
        authorized: action.payload.authorized,
      };
    case FETCH_STATS:
      return {
        ...state,
        stats: action.payload.stats,
        authorized: action.payload.authorized,
      };
    case FETCH_DETAIL:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
