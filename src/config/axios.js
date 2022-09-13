import axios from "axios";
const clientAxios = axios.create({
  baseURL: "http://localhost:4001",
});

export default clientAxios;
