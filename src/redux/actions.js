import axios from "axios";
import { APILINK } from "../utils/links";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const FETCH_STATS = "FETCH_STATS";

export const logInUser = (userInfo) => {
  return (dispatch) => {
    axios.post(`${APILINK}/auth/login`, userInfo).then((res) => {
      localStorage.setItem("token", res.data.token.token);
      dispatch({ type: LOGIN_USER, payload: {username: userInfo.username, authorized: true}  });
    });
  };
};

export const registerUser = (userInfo) => {
  return (dispatch) => {
    axios.post(`${APILINK}/auth/signup`, userInfo).then((res) => {
      localStorage.setItem("token", res.data.token.token);
      dispatch({ type: LOGIN_USER, payload: {username: userInfo.username, authorized: true} });
    });
  };
};

export const fetchStats = (token) => {
  return (dispatch) => {
    axios
      .get(`${APILINK}/stats/all`, {
        headers: {
          "X-JWT-Token": token,
        },
      })
      .then((res) => {
        let authorized = true
        if (res.status != 200) {
          authorized = false
        }
          dispatch({ type: FETCH_STATS, payload: {stats: res.data, authorized} });
        
      });
  };
};
