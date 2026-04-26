import { PrismaService } from '../../database/prisma/prisma.service';
import { Prisma } from '../../../generated/prisma/client';
export declare class ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findManyShopCards(params: {
        skip: number;
        take: number;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
    }): Promise<{
        id: number;
        isNew: boolean;
        sale: number;
        price: number;
        rating: number;
        image: string[];
        productGroup: {
            title: string;
        };
    }[]>;
    findManyPriseCards(ids: number[]): Promise<{
        id: number;
        price: number;
    }[]>;
    findManyGroup(): Promise<{
        id: number;
        title: string;
    }[]>;
    findManyCartCards(ids: number[]): Promise<{
        id: number;
        sale: number;
        price: number;
        color: string;
        image: string[];
        productGroup: {
            title: string;
        };
    }[]>;
    findManyWishlistCards(ids: number[]): Promise<{
        id: number;
        price: number;
        color: string;
        image: string[];
        productGroup: {
            title: string;
        };
    }[]>;
    createProductGroup(title: string): Promise<{
        id: number;
        title: string;
    }>;
    createProduct(data: Prisma.ProductCreateInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        productGroupId: number;
        isNew: boolean;
        offerExpires: Date | null;
        measurements: string;
        sale: number;
        price: number;
        rating: number;
        reviews: number;
        quantityWarehouse: number;
        color: string;
        description: string;
        image: string[];
        category: import("../../../generated/prisma/client").Category[];
    }>;
    updateProduct(id: number, data: Prisma.ProductUpdateInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        productGroupId: number;
        isNew: boolean;
        offerExpires: Date | null;
        measurements: string;
        sale: number;
        price: number;
        rating: number;
        reviews: number;
        quantityWarehouse: number;
        color: string;
        description: string;
        image: string[];
        category: import("../../../generated/prisma/client").Category[];
    }>;
}
