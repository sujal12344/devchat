import { PrismaClient } from "@prisma/client";

export const prismadb = new PrismaClient({ log: ["query"] });