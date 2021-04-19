import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IAPIService } from "../interfaces/IAPIService.interface";

class APIService implements IAPIService {
  service: AxiosInstance = axios.create({
    baseURL: "http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1",
    timeout: 30000,
  });

  async get<T, Y>(resource: string, params?: Y): Promise<AxiosResponse<T>> {
    return this.service.get<T>(resource, params);
  }

  async post<T, Y>(resource: string, params: Y): Promise<AxiosResponse<T>> {
    return this.service.post<T>(resource, params);
  }

  async put<T, Y>(resource: string, params: Y): Promise<AxiosResponse<T>> {
    return this.service.put<T>(resource, params);
  }

  async patch<T, Y>(resource: string, params?: Y): Promise<AxiosResponse<T>> {
    return this.service.patch<T>(resource, params);
  }

  async delete<T>(resource: string): Promise<AxiosResponse<T>> {
    return this.service.delete<T>(resource);
  }
}
export default new APIService();
