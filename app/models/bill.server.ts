import { prisma } from "~/db.server";

export type { Bill } from "@prisma/client";

export async function getBillsForYear(year: number) {
  return prisma.bill.findMany({ where: { year } });
}
