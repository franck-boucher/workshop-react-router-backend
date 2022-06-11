import type { LoaderFunction } from "@remix-run/node";
import { getBillsForYear } from "~/models/bill.server";
import { getRandomInt, json } from "~/utils";

const fakeRandomPause = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, getRandomInt(300, 1000));
  });
};

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.year) throw new Error("year is required");
  const bills = await getBillsForYear(Number(params.year));
  await fakeRandomPause();
  return json(bills);
};
