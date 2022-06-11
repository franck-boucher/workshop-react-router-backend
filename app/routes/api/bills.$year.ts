import type { LoaderFunction } from "@remix-run/node";
import { getBillsForYear } from "~/models/bill.server";
import { json } from "~/utils";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.year) throw new Error("year is required");
  const bills = await getBillsForYear(Number(params.year));
  return json(bills);
};
