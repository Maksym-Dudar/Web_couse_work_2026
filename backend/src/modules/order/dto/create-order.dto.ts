import { Type } from 'class-transformer';
import { IsNumber, ValidateNested, IsArray, IsEnum } from 'class-validator';
import { ShippingMethod } from '@prisma/client';

class OrderItem {
  @IsNumber()
  @Type(() => Number)
  productId!: number;

  @IsNumber()
  @Type(() => Number)
  quantity!: number;
}

export class CreateOrder {
  @IsNumber()
  @Type(() => Number)
  total!: number;

  @IsNumber()
  @Type(() => Number)
  subtotal!: number;

  @IsEnum(ShippingMethod)
  @Type(() => String)
  shippingMethod!: ShippingMethod;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItem)
  items!: OrderItem[];
}
