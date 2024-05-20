import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export const { BASE_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: "http://15.165.250.72",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.defaults.withCredentials = true;

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

export const http: HttpClient = axiosInstance;

axiosInstance.interceptors.response.use(res => res.data);

// axiosInstance.interceptors.request.use(req => {
//   const token = localStorage.getItem("userToken");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });
