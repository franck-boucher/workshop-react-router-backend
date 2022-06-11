import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getTasksToValidate } from "~/models/task.server";
import { headers } from "~/utils";

export const loader: LoaderFunction = async () => {
  const tasks = await getTasksToValidate();
  return json(tasks, { headers });
};
