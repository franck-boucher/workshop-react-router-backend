import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getCurrentUser } from "~/models/user.server";
import { headers } from "~/utils";

export const loader: LoaderFunction = async () => {
  const user = await getCurrentUser();
  return json(user, { headers });
};
