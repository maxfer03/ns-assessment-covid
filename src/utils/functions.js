import { APILINK } from "./links";
import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("token");
};

