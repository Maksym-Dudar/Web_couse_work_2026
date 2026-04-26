import { ProductService } from './product.service';
import { FindManyShopDto } from './dto/find-many-shop.dto';
import { FindManySearchDto } from './dto/find-many-search.dto';
import { FindManyBagDto } from './dto/find-many-bag.dto';
import { FindManyWishlistDto } from './dto/find-many-wishlist.dto';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(images: Express.Multer.File[], body: CreateProductDto): Promise<{
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
        category: import("../../../generated/prisma/enums").Category[];
    }>;
    findManyShop(query: FindManyShopDto): Promise<{
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
    findManySearch(query: FindManySearchDto): Promise<{
        id: number;
        title: string;
    }[]>;
    findManyCart(query: FindManyBagDto): Promise<{
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
    findManyWishlist(query: FindManyWishlistDto): Promise<{
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
    findManyGroup(): Promise<{
        id: number;
        title: string;
    }[]>;
}
