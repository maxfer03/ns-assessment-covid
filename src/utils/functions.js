import { APILINK } from "./links";
import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getStats = (token) => {
  axios
    .get(`${APILINK}/stats/all`, {
      headers: {
        "X-JWT-Token": token,
      },
    })
    .then((res) => {
        return res.data
    });
};
