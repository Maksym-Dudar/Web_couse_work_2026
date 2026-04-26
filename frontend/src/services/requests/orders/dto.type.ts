import type { IDelivery } from "@/constants/delivery.constants";

export interface IGetUserOrdersDto {
	total: number;
	subtotal: number;
	shippingMethod: IDelivery;
	id: number;
	userId: number;
	addressId: number | null;
	createdAt: Date;
	status:
		| "PENDING"
		| "CONFIRMED"
		| "PROCESSING"
		| "SHIPPED"
		| "DELIVERED"
		| "COMPLETED"
		| "CANCELLED"
		| "RETURNED"
		| "FAILED"; // todo
}