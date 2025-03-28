import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient()
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
};

export const prisma =
    globalForPrisma.prisma ?? prismaClientSingleton();

if (!process.env.isProduction) globalForPrisma.prisma = prisma

export default prisma;