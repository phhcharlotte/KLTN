import axiosClient from "./index";
import { Login } from "../types/Login";

const loginApi = ({ username, password }: Login) => {
  return axiosClient.post("/login", { username, password });
};

export { loginApi };
