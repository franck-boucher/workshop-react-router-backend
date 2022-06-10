import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getCurrentUser() {
  return prisma.user.findFirst();
}
