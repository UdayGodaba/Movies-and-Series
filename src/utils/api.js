import axios from "axios";
import { API_URL } from "./constants";

export const fetchData = (name, type, page) =>
  axios.get(API_URL + `&s=${name}&type=${type}&page=${page}`);
