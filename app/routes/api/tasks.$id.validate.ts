import type { ActionFunction } from "@remix-run/node";
import { validateTask } from "~/models/task.server";
import { json } from "~/utils";

export const action: ActionFunction = async ({ params, request }) => {
  if (!params.id) throw new Error("taks id is required");

  if (request.method === "POST") {
    const task = await validateTask(params.id);
    return json(task);
  }

  return json(null);
};
