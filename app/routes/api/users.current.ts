import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getCurrentUser } from "~/models/user.server";

export const loader: LoaderFunction = async () => {
  const user = await getCurrentUser();
  return json(user);
};
