import { OrderService } from './order.service';
import { CreateOrder } from './dto/create-order.dto';
import { AccessTokenPayload } from '../auth/types';
import { FindOrderDto } from './dto/find-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(body: CreateOrder, req: Request & {
        user: AccessTokenPayload;
    }): Promise<{
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
    findOne(query: FindOrderDto): Promise<{
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
    findAll(req: Request & {
        user: AccessTokenPayload;
    }): Promise<{
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
    findCompete(query: FindOrderDto): Promise<{
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
