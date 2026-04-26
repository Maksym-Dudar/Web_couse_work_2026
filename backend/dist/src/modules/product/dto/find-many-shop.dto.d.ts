import { Category } from '@prisma/client';
import { Sorts } from '../../../common/enums/sorts.enum';
export declare class FindManyShopDto {
    take: number;
    category?: Category | 'ALL';
    maxPrice?: number;
    minPrice?: number;
    sort?: Sorts;
    groupId?: number[];
    page?: number;
}
