import axios from "axios";
import createRepository from "@/api";
import { useAuth } from "@/stores/auth.store";
import { isUrlEndWithMe } from "~/helpers/axios.helper";

export default defineNuxtPlugin((app) => {
  const service = axios.create({
    baseURL: app.$config.public.BASE_API_URL,
    timeout: 0,
    headers: {
      Accept: "application/json",
    },
  });
  const NO_AUTHEN_ENDPOINT = [
    "/auth/company/register",
    "/evaluation/self-review",
  ];
  service.interceptors.request.use(
    (config) => {
      if (!NO_AUTHEN_ENDPOINT.includes(config.url)) {
        const token = useCookie("access_token");
        if (token.value) {
          config.headers.Authorization = "Bearer " + token.value;
        }
      }

      config.headers["X-API-KEY"] = app.$config.public.RESAS_PORTAL_KEY;
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const { $toast } = app;

      if (error.code === "ERR_NETWORK") {
        $toast.open({
          message: "ネットワーク接続が失われました",
          type: "warning",
          position: "top",
        });
        return Promise.reject(error);
      }

      if (error.response.status === 401) {
        const { response } = error;
        const { logout } = useAuth();

        if (response.data.meta.code === "HTTP_UNAUTHORIZED") {
          $toast.open({
            message: response.data.meta.message,
            type: "error",
            position: "top",
          });
          logout();
        }
        return Promise.reject(error.response?.data);
      }
      if (error.response.status === 403) {
        const { response } = error;
        const { logout } = useAuth();
        if (
          response.data.meta.code === "HTTP_FORBIDDEN" &&
          isUrlEndWithMe(
            error.request.responseURL,
            app.$config.public.BASE_API_URL
          )
        ) {
          logout();
        }
      }

      // Do something with request error
      return Promise.reject(error.response?.data);
    }
  );

  return {
    provide: {
      api: createRepository(service, app),
    },
  };
});
