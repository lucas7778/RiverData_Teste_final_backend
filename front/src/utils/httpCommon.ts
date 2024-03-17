import axios, { AxiosResponse } from "axios";
import { env } from "./env";
import { fetchAuthSession } from "./auth";

function createInstance(baseUrl: string) {
  const baseConfig = { baseURL: baseUrl };
  const instance = axios.create(baseConfig);

  instance.interceptors.request.use(async (request) => {
    const session = await fetchAuthSession();

    request.headers = request.headers || {};

    request.headers.Authorization = `Bearer ${session.accessToken}`;
    request.headers["Content-type"] = "application/json";

    return request;
  });

  instance.interceptors.response.use((response: AxiosResponse) => {
    handleDates(response.data);
    return response;
  });

  return instance;
}

const isoDateFormat =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;

const dateOnlyFormat =
  /^[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/gm;

const isIsoDateString = (value: any): boolean =>
  value && typeof value === "string" && isoDateFormat.test(value);

const isDateOnlyString = (value: any): boolean =>
  value && typeof value === "string" && dateOnlyFormat.test(value);

const handleDates = (body: any) => {
  if (body === null || body === undefined || typeof body !== "object") {
    return body;
  }

  for (const key of Object.keys(body)) {
    const value = body[key];
    if (isIsoDateString(value) || isDateOnlyString(value)) {
      body[key] = new Date(value);
    } else if (typeof value === "object") handleDates(value);
  }
};

export const http = createInstance(env.VITE_API_URL);