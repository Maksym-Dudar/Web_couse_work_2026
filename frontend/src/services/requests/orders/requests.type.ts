import type { IDelivery } from "@/constants/delivery.constants";

interface OrderItem {
	productId: number;
	quantity: number;
}

export interface ICreateOrder {
	total: number;
	subtotal: number;
	shippingMethod: IDelivery;
	items: OrderItem[];
}

export interface IConfirmOrder {
	id: number;
	addressId: number;
	firstName: string;
	lastName: string;
	email: string;
}
