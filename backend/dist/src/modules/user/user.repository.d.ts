import { PrismaService } from '../../database/prisma/prisma.service';
import { Prisma } from '../../../generated/prisma/client';
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    } | null>;
    findByEmailAllData(email: string): Promise<{
        id: number;
        email: string;
        password: string;
        otp: string | null;
        expireOtp: Date | null;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(email: string, password: string, firstName: string): Promise<{
        id: number;
        email: string;
    }>;
    update(email: string, prop: Omit<Prisma.UserUpdateInput, 'email' | 'updatedAt' | 'createdAt' | 'id'>): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
}
