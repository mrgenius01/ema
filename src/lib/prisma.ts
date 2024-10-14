// import { PrismaClient } from '@prisma/client'

// declare global {
//   const prisma: PrismaClient | undefined
// }

// export const prisma = global.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma

import { PrismaClient } from '@prisma/client';

declare const global: typeof globalThis & { prisma?: PrismaClient };

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
