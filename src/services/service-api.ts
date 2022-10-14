import Cookies from 'js-cookie';
import NProgress from 'nprogress';
import axios, { AxiosInstance } from 'axios';
import { toast } from 'material-react-toastify';

const axiosConfig = {
  withCredentials: false,
  header: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const axiosClient: AxiosInstance = axios.create(axiosConfig);
const isDev: boolean = import.meta.env.DEV;

axiosClient.defaults.baseURL = isDev
  ? import.meta.env.VITE_APP_API_URL
  : import.meta.env.VITE_APP_API_URL;

class ServiceApi {
  public url = '';

  // SELECT BASE URL VERSION
  service() {
    this.injectInterceptor();
    return this;
  }

  // APPEND URL TO API URL
  appendToURL(url: string) {
    return `${this.url}${url}`;
  }

  // GET API REQUEST
  async fetch(url: string, resolve = false) {
    try {
      const response = await axiosClient.get(
        this.appendToURL(url),
        this.setupHeaders(),
      );
      return !resolve
        ? response
        : {
            ...response,
          };
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // POST API REQUEST
  async push(
    url: string,
    payload: any = null,
    resolve = false,
    is_attached = false,
  ) {
    try {
      const response = await axiosClient.post(
        this.appendToURL(url),
        is_attached ? payload : { ...payload },
        this.setupHeaders(is_attached),
      );

      return !resolve
        ? response
        : {
            ...response,
          };
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // PUT API REQUEST
  async update(
    url: string,
    payload: any = {},
    resolve = true,
    is_attached = false,
  ) {
    try {
      const response = await axiosClient.put(
        this.appendToURL(url),
        { ...payload },
        this.setupHeaders(is_attached),
      );

      return !resolve
        ? response
        : {
            ...response,
          };
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(url: string, payload: any = {}, resolve = false) {
    try {
      const response = await axiosClient.delete(this.appendToURL(url), {
        data: { ...payload },
        ...this.setupHeaders(),
      });

      return !resolve
        ? response
        : {
            ...response,
          };
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // SETUP HEADERS FOR SCENARIOS LIKE IMAGE UPLOAD
  setupHeaders(is_attached = false) {
    if (is_attached) {
      return {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
    } else {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }
  }

  injectInterceptor() {
    axiosClient.interceptors.request.use((config) => {
      NProgress.start();
      NProgress.inc(0.4);

      return config;
    });

    axiosClient.interceptors.response.use((response) => {
      NProgress.done();

      return response;
    });

    async (error: any) => {
      NProgress.done();

      return Promise.reject(error);
    };
  }

  // HANDLE API REQUEST ERRORS
  handleErrors(err: any) {
    NProgress.done();

    console.error({ err });

    return err?.response;
  }

  isSuccessful(response: any): boolean {
    const codes = [200, 201, 202, 204];
    return codes.includes(
      response?.status || response?.statusCode || response?.code,
    )
      ? true
      : false;
  }
}

export default new ServiceApi();
