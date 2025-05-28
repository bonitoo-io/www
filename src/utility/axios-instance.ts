"use client";

import { ANONYMOUS_TOKEN, TOKEN_KEY } from "@utility/constants";
import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get(TOKEN_KEY) || ANONYMOUS_TOKEN;

  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
