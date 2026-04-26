import type { IDelivery } from "@/constants/delivery.constants";

export interface IOrderItem {
	id: number;
	color: string;
	title: string;
	quantity: number;
	image: string;
	price: number;
}

export interface IOrder {
	id: number;
	status: string;
	total: number;
	subtotal: number;
	shippingMethod: IDelivery;
	orderItem: IOrderItem[];
}

interface ICompleteOrderItem {
	quantity: number;
	image: string;
}

export interface IOrderComplete {
	id: number;
	total: number;
	shippingMethod: IDelivery;
	createdAt: Date;
	orderItem: ICompleteOrderItem[];
}
