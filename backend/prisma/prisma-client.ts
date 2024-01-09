import { PrismaClient } from '@prisma/client';

// add prisma to the NodeJS global type
declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}

const prisma = new PrismaClient();

declare const global: NodeJS.Global & typeof globalThis;

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}

export default prisma;