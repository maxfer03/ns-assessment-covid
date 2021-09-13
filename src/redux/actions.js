import axios from "axios";
import { APILINK } from "../utils/links";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const FETCH_STATS = "FETCH_STATS";
export const FETCH_DETAIL = "FETCH_DETAIL";
export const SYNC_STATS = "SYNC_STATS";
export const logInUser = (userInfo) => {
  return (dispatch) => {
    axios.post(`${APILINK}/auth/login`, userInfo).then(
      (res) => {
        localStorage.setItem("token", res.data.token.token);
        dispatch({
          type: LOGIN_USER,
          payload: { username: userInfo.username, authorized: true },
        });
      },
      (error) => {
        alert("Invalid username or password.");
        dispatch({
          type: LOGIN_USER,
          payload: { username: "", authorized: false },
        });
      }
    );
  };
};

export const registerUser = (userInfo) => {
  return (dispatch) => {
    axios.post(`${APILINK}/auth/signup`, userInfo).then(
      (res) => {
        localStorage.setItem("token", res.data.token.token);
        dispatch({
          type: LOGIN_USER,
          payload: {
            username: userInfo.username,
            authorized: true /* token: res.data.token.token */,
          },
        });
      },
      (error) => {
        alert("Invalid username or password.");
        dispatch({
          type: LOGIN_USER,
          payload: { username: "", authorized: false },
        });
      }
    );
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
        let authorized = true;
        if (res.status != 200) {
          authorized = false;
        }
        dispatch({
          type: FETCH_STATS,
          payload: { stats: res.data, authorized },
        });
      });
  };
};

export const fetchDetail = (token, country) => {
  return (dispatch) => {
    dispatch({ type: FETCH_DETAIL, payload: { foundCountry: false } });
    axios
      .get(`${APILINK}/stats/name/${country}`, {
        headers: {
          "X-JWT-Token": token,
        },
      })
      .then((res) => {
        if (res.data === null) {
          alert("Country not found!");
          dispatch({ type: FETCH_DETAIL, payload: { foundCountry: false } });
        } else {
          let data = res.data;
          let formattedDetail = {
            country: data.country || "No information given",
            continent: data.continent || "No information given",
            day: data.day || "Unknown",
            population: data.population || "No information given",
            cases: {
              "1M_pop": data.cases["1M_pop"] || "No information given",
              active: data.cases.active || "Unknown / None",
              critical: data.cases.critical || "Unknown / None",
              new: data.cases.new || "Unknown / None",
              recovered: data.cases.recovered || "Unknown / None",
              total: data.cases.total || "Unknown / None",
            },
            deaths: {
              "1M_pop": data.deaths["1M_pop"] || "Unknown / None",
              new: data.deaths.new || "No information given",
              total: data.deaths.total || "Unknown / None",
            },
            tests: {
              "1M_pop": data.tests["1M_pop"] || "Unknown / None",
              total: data.tests.total || "Unknown / None",
            },
          };

          dispatch({
            type: FETCH_DETAIL,
            payload: { detail: formattedDetail, foundCountry: true },
          });
        }
      });
  };
};

export const syncStats = (token) => {
  return (dispatch) => {
    dispatch({ type: SYNC_STATS, payload: true });
    axios
      .get(`${APILINK}/stats/sync`, {
        headers: {
          "X-JWT-Token": token,
        },
      })
      .then(async (res) => {
        axios
          .get(`${APILINK}/stats/all`, {
            headers: {
              "X-JWT-Token": token,
            },
          })
          .then((res) => {
            dispatch({
              type: FETCH_STATS,
              payload: { stats: res.data, authorized: true },
            });
          });

        dispatch({ type: SYNC_STATS, payload: false });
      });
  };
};
