import { IsString } from 'class-validator';
import { Transform } from 'class-transformer';



export class FindManyBagDto {
  @IsString()
  @Transform(({ value }) => value?.split(',').map(Number))
  ids!: number[];
}


