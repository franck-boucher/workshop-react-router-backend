import type { Bill } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

type SimpleBill = Pick<Bill, "year" | "month" | "amount">;

const generateBillsForYear = (year: number): SimpleBill[] => {
  return Array.from({ length: 12 }).map((_, i) => ({
    year,
    month: i,
    amount: (Math.floor(Math.random() * 100) + 1) * 100,
  }));
};

const bills: SimpleBill[] = [
  ...generateBillsForYear(2018),
  ...generateBillsForYear(2019),
  ...generateBillsForYear(2020),
  ...generateBillsForYear(2021),
  ...generateBillsForYear(2022),
  ...generateBillsForYear(2023),
  ...generateBillsForYear(2024),
  ...generateBillsForYear(2025),
  ...generateBillsForYear(2026),
];

const prisma = new PrismaClient();

async function seed() {
  // cleanup the existing database
  await prisma.user.deleteMany();
  await prisma.bill.deleteMany();
  await prisma.task.deleteMany();

  await prisma.user.create({
    data: {
      firstName: "John",
      lastName: "Doe",
    },
  });

  for (const data of bills) {
    await prisma.bill.create({ data });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
