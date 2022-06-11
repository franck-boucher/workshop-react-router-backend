import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createTask, getTasks } from "~/models/task.server";
import { headers } from "~/utils";

export const loader: LoaderFunction = async () => {
  const tasks = await getTasks();
  return json(tasks);
};

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    const title = formData.get("title");
    const description = formData.get("description");

    if (
      typeof title !== "string" ||
      !(typeof description === "string" || description === null)
    ) {
      return json(
        { formError: `Form not submitted correctly.` },
        { status: 400, headers }
      );
    }

    const task = await createTask(title, description);
    return json(task, { headers });
  }

  return null;
};
