import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const prisma = prismaClientSingleton();

export default prisma;

export { prisma };
