import { ShippingMethod } from '@prisma/client';
declare class OrderItem {
    productId: number;
    quantity: number;
}
export declare class CreateOrder {
    total: number;
    subtotal: number;
    shippingMethod: ShippingMethod;
    items: OrderItem[];
}
export {};
