import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { OrderStatus } from '@prisma/client';
import { ProductRepository } from '../product/product.repository';
import { ShippingMethod } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepository,
    private readonly productRepo: ProductRepository,
  ) {}

  async markAsPaid(id: number) {
    return this.orderRepo.update(id, { status: OrderStatus.PENDING });
  }

  async markAsFailed(id: number) {
    return this.orderRepo.update(id, { status: OrderStatus.FAILED });
  }
  async create(
    total: number,
    subtotal: number,
    userId: number,
    shippingMethod: ShippingMethod,

    items: { productId: number; quantity: number }[],
  ) {
    const productIds = items.map((item) => item.productId);
    const products = await this.productRepo.findManyPriseCards(productIds);
    const productMap = new Map(products.map((p) => [p.id, p]));

    let realTotal = 0;
    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product) {
        throw new BadRequestException(
          `Product with id ${item.productId} not found`,
        );
      }
      realTotal += product.price * item.quantity;
    }

    if (total !== realTotal) {
      throw new BadRequestException('Incorrect total count');
    }
    return this.orderRepo.create(
      OrderStatus.CONFIRMED,
      realTotal,
      subtotal,
      userId,
      shippingMethod,
      items,
    );
  }

  async find(id: number) {
    const data = await this.orderRepo.findOneForCheckout(id);

    if (!data) {
      throw new BadRequestException("Order not found")
    };

    const orderItem = data.orderItem?.map(({ product, quantity }) => ({
      id: product.id,
      color: product.color,
      title: product.productGroup?.title ?? null,
      price: product.price,
      quantity,
      image: product.image?.[1] ?? product.image?.[0] ?? null,
    }));

    return {
      id: data.id,
      total: data.total,
      subtotal: data.subtotal,
      shippingMethod: data.shippingMethod,
      orderItem,
    };
  }

  async findAllForUser(id: number) {
    return this.orderRepo.findManyForUser(id);
  }

  async findComplete(id: number) {
       const data = await this.orderRepo.findOneForComplete(id);

       if (!data) {
         throw new BadRequestException('Order not found');
       }

       const orderItem = data.orderItem?.map(({ product, quantity }) => ({
         quantity,
         image: product.image?.[1] ?? product.image?.[0] ?? null,
       }));

       return {
         id: data.id,
         total: data.total,
         shippingMethod: data.shippingMethod,
         createdAt: data.createdAt,
         orderItem,
       };
  }
}
