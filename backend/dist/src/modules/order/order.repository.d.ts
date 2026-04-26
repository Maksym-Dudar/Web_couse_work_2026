import { PrismaService } from '../../database/prisma/prisma.service';
import { OrderStatus, Prisma, ShippingMethod } from '../../../generated/prisma/client';
export declare class OrderRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(status: OrderStatus, total: number, subtotal: number, userId: number, shippingMethod: ShippingMethod, item: {
        productId: number;
        quantity: number;
    }[]): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        userId: number;
        addressId: number | null;
        status: OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: ShippingMethod;
    }>;
    update(id: number, order: Prisma.OrderUpdateInput): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        userId: number;
        addressId: number | null;
        status: OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: ShippingMethod;
    }>;
    findOneForCheckout(id: number): Promise<{
        id: number;
        subtotal: number;
        total: number;
        shippingMethod: ShippingMethod;
        orderItem: {
            quantity: number;
            product: {
                id: number;
                price: number;
                color: string;
                image: string[];
                productGroup: {
                    title: string;
                };
            };
        }[];
    } | null>;
    findOneForComplete(id: number): Promise<{
        id: number;
        createdAt: Date;
        total: number;
        shippingMethod: ShippingMethod;
        orderItem: {
            quantity: number;
            product: {
                image: string[];
            };
        }[];
    } | null>;
    findManyForUser(id: number): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        userId: number;
        addressId: number | null;
        status: OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: ShippingMethod;
    }[]>;
}
