import { OrderRepository } from './order.repository';
import { ProductRepository } from '../product/product.repository';
import { ShippingMethod } from '@prisma/client';
export declare class OrderService {
    private readonly orderRepo;
    private readonly productRepo;
    constructor(orderRepo: OrderRepository, productRepo: ProductRepository);
    markAsPaid(id: number): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        userId: number;
        addressId: number | null;
        status: import("../../../generated/prisma/enums").OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: import("../../../generated/prisma/enums").ShippingMethod;
    }>;
    markAsFailed(id: number): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        userId: number;
        addressId: number | null;
        status: import("../../../generated/prisma/enums").OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: import("../../../generated/prisma/enums").ShippingMethod;
    }>;
    create(total: number, subtotal: number, userId: number, shippingMethod: ShippingMethod, items: {
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
        status: import("../../../generated/prisma/enums").OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: import("../../../generated/prisma/enums").ShippingMethod;
    }>;
    find(id: number): Promise<{
        id: number;
        total: number;
        subtotal: number;
        shippingMethod: import("../../../generated/prisma/enums").ShippingMethod;
        orderItem: {
            id: number;
            color: string;
            title: string;
            price: number;
            quantity: number;
            image: string;
        }[];
    }>;
    findAllForUser(id: number): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        userId: number;
        addressId: number | null;
        status: import("../../../generated/prisma/enums").OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: import("../../../generated/prisma/enums").ShippingMethod;
    }[]>;
    findComplete(id: number): Promise<{
        id: number;
        total: number;
        shippingMethod: import("../../../generated/prisma/enums").ShippingMethod;
        createdAt: Date;
        orderItem: {
            quantity: number;
            image: string;
        }[];
    }>;
}
