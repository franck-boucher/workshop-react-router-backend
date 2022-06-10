import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { deleteTask, getTask, updateTask } from "~/models/task.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.id) throw new Error("taks id is required");
  const task = await getTask(params.id);
  return json(task);
};

export const action: ActionFunction = async ({ params, request }) => {
  if (!params.id) throw new Error("taks id is required");

  if (request.method === "PUT") {
    const formData = await request.formData();
    const title = formData.get("title");
    const description = formData.get("description");

    if (
      typeof title !== "string" ||
      !(typeof description === "string" || description === null)
    ) {
      return json(
        { formError: `Form not submitted correctly.` },
        { status: 400 }
      );
    }

    const task = await updateTask(params.id, title, description);
    return json(task);
  }

  if (request.method === "DELETE") {
    await deleteTask(params.id);
    return json({ id: params.id });
  }

  return null;
};
