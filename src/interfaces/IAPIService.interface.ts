import { AxiosResponse, AxiosInstance } from "axios";

export interface IAPIService {
  service: AxiosInstance;

  get<T, Y>(resource: string, params?: Y): Promise<AxiosResponse<T>>;
  post<T, Y>(resource: string, params?: Y): Promise<AxiosResponse<T>>;
  put<T, Y>(resource: string, params?: Y): Promise<AxiosResponse<T>>;
  patch<T, Y>(resource: string, params?: Y): Promise<AxiosResponse<T>>;
  delete<T>(resource: string): Promise<AxiosResponse<T>>;
}
