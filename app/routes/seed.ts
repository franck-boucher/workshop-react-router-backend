import type { LoaderFunction } from "@remix-run/node";
import { seed } from "~/seedUtil";

export const loader: LoaderFunction = async () => {
  await seed();
  return "Database has been seeded. 🌱";
};
