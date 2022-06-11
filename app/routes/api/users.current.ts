import type { LoaderFunction } from "@remix-run/node";
import { getCurrentUser } from "~/models/user.server";
import { json } from "~/utils";

export const loader: LoaderFunction = async () => {
  const user = await getCurrentUser();
  return json(user);
};
