import type { Task } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Task } from "@prisma/client";

export async function getTasks() {
  return prisma.task.findMany();
}

export async function getTask(id: string) {
  return prisma.task.findUnique({ where: { id } });
}

export async function createTask(
  title: Task["title"],
  description: Task["description"]
) {
  return prisma.task.create({
    data: { title, description },
  });
}

export async function updateTask(
  id: Task["id"],
  title: Task["title"],
  description: Task["description"]
) {
  return prisma.task.update({
    where: { id },
    data: { title, description },
  });
}

export async function deleteTask(id: Task["id"]) {
  return prisma.task.delete({ where: { id } });
}

export async function validateTask(id: Task["id"]) {
  return prisma.task.update({
    where: { id },
    data: { isValidated: true },
  });
}

export async function getTasksToValidate() {
  return prisma.task.findMany({ where: { isValidated: false } });
}
