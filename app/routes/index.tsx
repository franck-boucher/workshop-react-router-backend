import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return "this is an api";
};
