import { IsOptional, IsEnum, IsNumberString, IsString, IsNumber } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { Category } from '@prisma/client';
import { Sorts } from '@/common/enums/sorts.enum';


export class FindManyShopDto {
  @IsNumber()
  @Type(() => Number)
  take!: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Invalid category' })
  category?: Category | 'ALL';

  @IsOptional()
  @IsNumberString()
  @Type(() => Number)
  maxPrice?: number;

  @IsOptional()
  @IsNumberString()
  @Type(() => Number)
  minPrice?: number;

  @IsOptional()
  @IsEnum(Sorts)
  sort?: Sorts;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.split(',').map(Number))
  groupId?: number[];

  @IsOptional()
  @IsNumberString()
  @Type(() => Number)
  page?: number;
}


