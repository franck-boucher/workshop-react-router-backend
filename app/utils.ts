import { json as rmxJson } from "@remix-run/node";
import type { JsonFunction } from "@remix-run/server-runtime";

export const headers: HeadersInit = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export const json: JsonFunction = (data, init = {}) =>
  rmxJson(
    data,
    typeof init === "number"
      ? init
      : {
          ...init,
          headers: { ...init.headers, ...headers },
        }
  );

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
