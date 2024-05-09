import router from '@/router'
import { QuMessage } from '@dist/quark-next'
import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

type TAxiosOption = {
  timeout: number
  baseURL: string
}

const config: TAxiosOption = {
  timeout: 5000,
  baseURL: import.meta.env.VITE_APP_BASE_API
}

class Http {
  service
  constructor(config: TAxiosOption) {
    this.service = axios.create(config)

    /* 请求拦截 */
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // const userInfoStore = useUserStore();
        // if (userInfoStore.token) {
        //   (config.headers as AxiosRequestHeaders).token =
        //     userInfoStore.token as string;
        // } else {
        //   if (router.currentRoute.value.path !== "/login") {
        //     // router.push('/login');
        //   }
        // }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    /* 响应拦截 */
    this.service.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        switch (response.status) {
          case 200:
            return response.data
          case 400:
            return response.data
          case 401:
            return response.data
          case 403:
            return response.data
          case 404:
            return response.data
          case 408:
            return response.data
          case 500:
            return response.data
          case 501:
            return response.data
          case 502:
            return response.data
          case 503:
            return response.data
          case 504:
            return response.data
          case 505:
            return response.data
          case 99998:
            QuMessage.info('会话超时, 请重新登录')
            router.push('/login')
            return response.data
          default:
            break
        }
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  /* GET 方法 */
  get<T>(url: string, params?: object, _object = {}): Promise<any> {
    return this.service.get(url, { params, ..._object })
  }
  /* POST 方法 */
  post<T>(url: string, params?: object, _object = {}): Promise<any> {
    return this.service.post(url, params, _object)
  }
  /* PUT 方法 */
  put<T>(url: string, params?: object, _object = {}): Promise<any> {
    return this.service.put(url, params, _object)
  }
  /* DELETE 方法 */
  delete<T>(url: string, params?: any, _object = {}): Promise<any> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new Http(config)
