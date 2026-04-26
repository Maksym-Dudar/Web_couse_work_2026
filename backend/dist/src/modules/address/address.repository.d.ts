import { PrismaService } from '../../database/prisma/prisma.service';
import { Prisma } from '../../../generated/prisma/client';
export declare class AddressRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(address: Prisma.AddressCreateInput): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        userId: number;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        street: string;
        buildingNumber: string;
        zipCode: string;
    }>;
    update(id: number, address: Prisma.AddressCreateInput): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        userId: number;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        street: string;
        buildingNumber: string;
        zipCode: string;
    }>;
    find(id: number): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        userId: number;
        phoneNumber: string;
        country: string;
        state: string;
        city: string;
        street: string;
        buildingNumber: string;
        zipCode: string;
    }[]>;
}
