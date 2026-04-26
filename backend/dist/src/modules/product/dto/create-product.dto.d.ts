import { Category } from '@prisma/client';
export declare class CreateProductDto {
    title: string;
    price: number;
    sale: number;
    offerExpires?: Date;
    isNew: boolean;
    category: Category[];
    color: string;
    description: string;
    measurements: string;
    quantityWarehouse: number;
    productGroupId: number;
}
