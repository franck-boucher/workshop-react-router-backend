import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getBillsForYear } from "~/models/bill.server";
import { headers } from "~/utils";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.year) throw new Error("year is required");
  const bills = await getBillsForYear(Number(params.year));
  return json(bills, { headers });
};
