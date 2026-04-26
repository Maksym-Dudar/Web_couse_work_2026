import { Sorts } from '../enums/sorts.enum';
export declare function mapSortToPrisma(sort: Sorts): {
    price: "desc";
    rating?: undefined;
    createdAt?: undefined;
} | {
    price: "asc";
    rating?: undefined;
    createdAt?: undefined;
} | {
    rating: "desc";
    price?: undefined;
    createdAt?: undefined;
} | {
    createdAt: "desc";
    price?: undefined;
    rating?: undefined;
};
