import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { Sorts } from '../../common/enums/sorts.enum';
import { Category } from '../../../generated/prisma/client';
export declare class ProductService {
    private readonly productRepo;
    constructor(productRepo: ProductRepository);
    findManyShop(params: {
        skip: number;
        take: number;
        sort?: Sorts;
        category?: Category | 'ALL';
        maxPrice?: number;
        minPrice?: number;
        groupId?: number[];
    }): Promise<{
        title: string;
        image: string;
        id: number;
        isNew: boolean;
        sale: number;
        price: number;
        rating: number;
        productGroup: {
            title: string;
        };
    }[]>;
    findManySearch(query: string): Promise<{
        id: number;
        title: string;
    }[]>;
    findManyCart(ids: number[]): Promise<{
        title: string;
        image: string;
        id: number;
        sale: number;
        price: number;
        color: string;
        productGroup: {
            title: string;
        };
    }[]>;
    findManyWishlist(ids: number[]): Promise<{
        title: string;
        image: string;
        id: number;
        price: number;
        color: string;
        productGroup: {
            title: string;
        };
    }[]>;
    create(data: CreateProductDto, files: Express.Multer.File[]): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        productGroupId: number;
        isNew: boolean;
        offerExpires: Date | null;
        measurements: string;
        sale: number;
        price: number;
        rating: number;
        reviews: number;
        quantityWarehouse: number;
        color: string;
        description: string;
        image: string[];
        category: Category[];
    }>;
    findManyGroup(): Promise<{
        id: number;
        title: string;
    }[]>;
}
