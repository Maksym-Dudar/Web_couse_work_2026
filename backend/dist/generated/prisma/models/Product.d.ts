import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    id: number | null;
    productGroupId: number | null;
    sale: number | null;
    price: number | null;
    rating: number | null;
    reviews: number | null;
    quantityWarehouse: number | null;
};
export type ProductSumAggregateOutputType = {
    id: number | null;
    productGroupId: number | null;
    sale: number | null;
    price: number | null;
    rating: number | null;
    reviews: number | null;
    quantityWarehouse: number | null;
};
export type ProductMinAggregateOutputType = {
    id: number | null;
    productGroupId: number | null;
    isNew: boolean | null;
    offerExpires: Date | null;
    measurements: string | null;
    sale: number | null;
    price: number | null;
    rating: number | null;
    reviews: number | null;
    quantityWarehouse: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    color: string | null;
    description: string | null;
};
export type ProductMaxAggregateOutputType = {
    id: number | null;
    productGroupId: number | null;
    isNew: boolean | null;
    offerExpires: Date | null;
    measurements: string | null;
    sale: number | null;
    price: number | null;
    rating: number | null;
    reviews: number | null;
    quantityWarehouse: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    color: string | null;
    description: string | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    productGroupId: number;
    isNew: number;
    offerExpires: number;
    measurements: number;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt: number;
    updatedAt: number;
    color: number;
    description: number;
    image: number;
    category: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    id?: true;
    productGroupId?: true;
    sale?: true;
    price?: true;
    rating?: true;
    reviews?: true;
    quantityWarehouse?: true;
};
export type ProductSumAggregateInputType = {
    id?: true;
    productGroupId?: true;
    sale?: true;
    price?: true;
    rating?: true;
    reviews?: true;
    quantityWarehouse?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    productGroupId?: true;
    isNew?: true;
    offerExpires?: true;
    measurements?: true;
    sale?: true;
    price?: true;
    rating?: true;
    reviews?: true;
    quantityWarehouse?: true;
    createdAt?: true;
    updatedAt?: true;
    color?: true;
    description?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    productGroupId?: true;
    isNew?: true;
    offerExpires?: true;
    measurements?: true;
    sale?: true;
    price?: true;
    rating?: true;
    reviews?: true;
    quantityWarehouse?: true;
    createdAt?: true;
    updatedAt?: true;
    color?: true;
    description?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    productGroupId?: true;
    isNew?: true;
    offerExpires?: true;
    measurements?: true;
    sale?: true;
    price?: true;
    rating?: true;
    reviews?: true;
    quantityWarehouse?: true;
    createdAt?: true;
    updatedAt?: true;
    color?: true;
    description?: true;
    image?: true;
    category?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: number;
    productGroupId: number;
    isNew: boolean;
    offerExpires: Date | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt: Date;
    updatedAt: Date | null;
    color: string;
    description: string;
    image: string[];
    category: $Enums.Category[];
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    productGroupId?: Prisma.IntFilter<"Product"> | number;
    isNew?: Prisma.BoolFilter<"Product"> | boolean;
    offerExpires?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    measurements?: Prisma.StringFilter<"Product"> | string;
    sale?: Prisma.FloatFilter<"Product"> | number;
    price?: Prisma.FloatFilter<"Product"> | number;
    rating?: Prisma.IntFilter<"Product"> | number;
    reviews?: Prisma.IntFilter<"Product"> | number;
    quantityWarehouse?: Prisma.IntFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    color?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringFilter<"Product"> | string;
    image?: Prisma.StringNullableListFilter<"Product">;
    category?: Prisma.EnumCategoryNullableListFilter<"Product">;
    comment?: Prisma.CommentListRelationFilter;
    orderItem?: Prisma.OrderItemListRelationFilter;
    productGroup?: Prisma.XOR<Prisma.ProductGroupScalarRelationFilter, Prisma.ProductGroupWhereInput>;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productGroupId?: Prisma.SortOrder;
    isNew?: Prisma.SortOrder;
    offerExpires?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurements?: Prisma.SortOrder;
    sale?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviews?: Prisma.SortOrder;
    quantityWarehouse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    comment?: Prisma.CommentOrderByRelationAggregateInput;
    orderItem?: Prisma.OrderItemOrderByRelationAggregateInput;
    productGroup?: Prisma.ProductGroupOrderByWithRelationInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    productGroupId?: Prisma.IntFilter<"Product"> | number;
    isNew?: Prisma.BoolFilter<"Product"> | boolean;
    offerExpires?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    measurements?: Prisma.StringFilter<"Product"> | string;
    sale?: Prisma.FloatFilter<"Product"> | number;
    price?: Prisma.FloatFilter<"Product"> | number;
    rating?: Prisma.IntFilter<"Product"> | number;
    reviews?: Prisma.IntFilter<"Product"> | number;
    quantityWarehouse?: Prisma.IntFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    color?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringFilter<"Product"> | string;
    image?: Prisma.StringNullableListFilter<"Product">;
    category?: Prisma.EnumCategoryNullableListFilter<"Product">;
    comment?: Prisma.CommentListRelationFilter;
    orderItem?: Prisma.OrderItemListRelationFilter;
    productGroup?: Prisma.XOR<Prisma.ProductGroupScalarRelationFilter, Prisma.ProductGroupWhereInput>;
}, "id">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productGroupId?: Prisma.SortOrder;
    isNew?: Prisma.SortOrder;
    offerExpires?: Prisma.SortOrderInput | Prisma.SortOrder;
    measurements?: Prisma.SortOrder;
    sale?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviews?: Prisma.SortOrder;
    quantityWarehouse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    productGroupId?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    isNew?: Prisma.BoolWithAggregatesFilter<"Product"> | boolean;
    offerExpires?: Prisma.DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null;
    measurements?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    sale?: Prisma.FloatWithAggregatesFilter<"Product"> | number;
    price?: Prisma.FloatWithAggregatesFilter<"Product"> | number;
    rating?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    reviews?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    quantityWarehouse?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null;
    color?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    image?: Prisma.StringNullableListFilter<"Product">;
    category?: Prisma.EnumCategoryNullableListFilter<"Product">;
};
export type ProductCreateInput = {
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentCreateNestedManyWithoutProductInput;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productGroup: Prisma.ProductGroupCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: number;
    productGroupId: number;
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUncheckedCreateNestedManyWithoutProductInput;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUpdateManyWithoutProductNestedInput;
    orderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productGroup?: Prisma.ProductGroupUpdateOneRequiredWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productGroupId?: Prisma.IntFieldUpdateOperationsInput | number;
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUncheckedUpdateManyWithoutProductNestedInput;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: number;
    productGroupId: number;
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
};
export type ProductUpdateManyMutationInput = {
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productGroupId?: Prisma.IntFieldUpdateOperationsInput | number;
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type EnumCategoryNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Category[] | Prisma.ListEnumCategoryFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Category | Prisma.EnumCategoryFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Category[] | Prisma.ListEnumCategoryFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Category[] | Prisma.ListEnumCategoryFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productGroupId?: Prisma.SortOrder;
    isNew?: Prisma.SortOrder;
    offerExpires?: Prisma.SortOrder;
    measurements?: Prisma.SortOrder;
    sale?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviews?: Prisma.SortOrder;
    quantityWarehouse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productGroupId?: Prisma.SortOrder;
    sale?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviews?: Prisma.SortOrder;
    quantityWarehouse?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productGroupId?: Prisma.SortOrder;
    isNew?: Prisma.SortOrder;
    offerExpires?: Prisma.SortOrder;
    measurements?: Prisma.SortOrder;
    sale?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviews?: Prisma.SortOrder;
    quantityWarehouse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productGroupId?: Prisma.SortOrder;
    isNew?: Prisma.SortOrder;
    offerExpires?: Prisma.SortOrder;
    measurements?: Prisma.SortOrder;
    sale?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviews?: Prisma.SortOrder;
    quantityWarehouse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productGroupId?: Prisma.SortOrder;
    sale?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    reviews?: Prisma.SortOrder;
    quantityWarehouse?: Prisma.SortOrder;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCreateimageInput = {
    set: string[];
};
export type ProductCreatecategoryInput = {
    set: $Enums.Category[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProductUpdateimageInput = {
    set?: string[];
    push?: string | string[];
};
export type ProductUpdatecategoryInput = {
    set?: $Enums.Category[];
    push?: $Enums.Category | $Enums.Category[];
};
export type ProductCreateNestedManyWithoutProductGroupInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductGroupInput, Prisma.ProductUncheckedCreateWithoutProductGroupInput> | Prisma.ProductCreateWithoutProductGroupInput[] | Prisma.ProductUncheckedCreateWithoutProductGroupInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductGroupInput | Prisma.ProductCreateOrConnectWithoutProductGroupInput[];
    createMany?: Prisma.ProductCreateManyProductGroupInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutProductGroupInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductGroupInput, Prisma.ProductUncheckedCreateWithoutProductGroupInput> | Prisma.ProductCreateWithoutProductGroupInput[] | Prisma.ProductUncheckedCreateWithoutProductGroupInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductGroupInput | Prisma.ProductCreateOrConnectWithoutProductGroupInput[];
    createMany?: Prisma.ProductCreateManyProductGroupInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutProductGroupNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductGroupInput, Prisma.ProductUncheckedCreateWithoutProductGroupInput> | Prisma.ProductCreateWithoutProductGroupInput[] | Prisma.ProductUncheckedCreateWithoutProductGroupInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductGroupInput | Prisma.ProductCreateOrConnectWithoutProductGroupInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutProductGroupInput | Prisma.ProductUpsertWithWhereUniqueWithoutProductGroupInput[];
    createMany?: Prisma.ProductCreateManyProductGroupInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutProductGroupInput | Prisma.ProductUpdateWithWhereUniqueWithoutProductGroupInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutProductGroupInput | Prisma.ProductUpdateManyWithWhereWithoutProductGroupInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutProductGroupNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutProductGroupInput, Prisma.ProductUncheckedCreateWithoutProductGroupInput> | Prisma.ProductCreateWithoutProductGroupInput[] | Prisma.ProductUncheckedCreateWithoutProductGroupInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutProductGroupInput | Prisma.ProductCreateOrConnectWithoutProductGroupInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutProductGroupInput | Prisma.ProductUpsertWithWhereUniqueWithoutProductGroupInput[];
    createMany?: Prisma.ProductCreateManyProductGroupInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutProductGroupInput | Prisma.ProductUpdateWithWhereUniqueWithoutProductGroupInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutProductGroupInput | Prisma.ProductUpdateManyWithWhereWithoutProductGroupInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedOneWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemInput, Prisma.ProductUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemInput, Prisma.ProductUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemInput;
    upsert?: Prisma.ProductUpsertWithoutOrderItemInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemInput, Prisma.ProductUpdateWithoutOrderItemInput>, Prisma.ProductUncheckedUpdateWithoutOrderItemInput>;
};
export type ProductCreateNestedOneWithoutCommentInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCommentInput, Prisma.ProductUncheckedCreateWithoutCommentInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCommentInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutCommentNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCommentInput, Prisma.ProductUncheckedCreateWithoutCommentInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCommentInput;
    upsert?: Prisma.ProductUpsertWithoutCommentInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutCommentInput, Prisma.ProductUpdateWithoutCommentInput>, Prisma.ProductUncheckedUpdateWithoutCommentInput>;
};
export type ProductCreateWithoutProductGroupInput = {
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentCreateNestedManyWithoutProductInput;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutProductGroupInput = {
    id?: number;
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUncheckedCreateNestedManyWithoutProductInput;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutProductGroupInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductGroupInput, Prisma.ProductUncheckedCreateWithoutProductGroupInput>;
};
export type ProductCreateManyProductGroupInputEnvelope = {
    data: Prisma.ProductCreateManyProductGroupInput | Prisma.ProductCreateManyProductGroupInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutProductGroupInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutProductGroupInput, Prisma.ProductUncheckedUpdateWithoutProductGroupInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutProductGroupInput, Prisma.ProductUncheckedCreateWithoutProductGroupInput>;
};
export type ProductUpdateWithWhereUniqueWithoutProductGroupInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutProductGroupInput, Prisma.ProductUncheckedUpdateWithoutProductGroupInput>;
};
export type ProductUpdateManyWithWhereWithoutProductGroupInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutProductGroupInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.IntFilter<"Product"> | number;
    productGroupId?: Prisma.IntFilter<"Product"> | number;
    isNew?: Prisma.BoolFilter<"Product"> | boolean;
    offerExpires?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    measurements?: Prisma.StringFilter<"Product"> | string;
    sale?: Prisma.FloatFilter<"Product"> | number;
    price?: Prisma.FloatFilter<"Product"> | number;
    rating?: Prisma.IntFilter<"Product"> | number;
    reviews?: Prisma.IntFilter<"Product"> | number;
    quantityWarehouse?: Prisma.IntFilter<"Product"> | number;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Product"> | Date | string | null;
    color?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringFilter<"Product"> | string;
    image?: Prisma.StringNullableListFilter<"Product">;
    category?: Prisma.EnumCategoryNullableListFilter<"Product">;
};
export type ProductCreateWithoutOrderItemInput = {
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentCreateNestedManyWithoutProductInput;
    productGroup: Prisma.ProductGroupCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutOrderItemInput = {
    id?: number;
    productGroupId: number;
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutOrderItemInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemInput, Prisma.ProductUncheckedCreateWithoutOrderItemInput>;
};
export type ProductUpsertWithoutOrderItemInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemInput, Prisma.ProductUncheckedUpdateWithoutOrderItemInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemInput, Prisma.ProductUncheckedCreateWithoutOrderItemInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemInput, Prisma.ProductUncheckedUpdateWithoutOrderItemInput>;
};
export type ProductUpdateWithoutOrderItemInput = {
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUpdateManyWithoutProductNestedInput;
    productGroup?: Prisma.ProductGroupUpdateOneRequiredWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutOrderItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productGroupId?: Prisma.IntFieldUpdateOperationsInput | number;
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutCommentInput = {
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    productGroup: Prisma.ProductGroupCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCommentInput = {
    id?: number;
    productGroupId: number;
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCommentInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCommentInput, Prisma.ProductUncheckedCreateWithoutCommentInput>;
};
export type ProductUpsertWithoutCommentInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCommentInput, Prisma.ProductUncheckedUpdateWithoutCommentInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCommentInput, Prisma.ProductUncheckedCreateWithoutCommentInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutCommentInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCommentInput, Prisma.ProductUncheckedUpdateWithoutCommentInput>;
};
export type ProductUpdateWithoutCommentInput = {
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    orderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    productGroup?: Prisma.ProductGroupUpdateOneRequiredWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCommentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productGroupId?: Prisma.IntFieldUpdateOperationsInput | number;
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyProductGroupInput = {
    id?: number;
    isNew: boolean;
    offerExpires?: Date | string | null;
    measurements: string;
    sale: number;
    price: number;
    rating: number;
    reviews: number;
    quantityWarehouse: number;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    color: string;
    description: string;
    image?: Prisma.ProductCreateimageInput | string[];
    category?: Prisma.ProductCreatecategoryInput | $Enums.Category[];
};
export type ProductUpdateWithoutProductGroupInput = {
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUpdateManyWithoutProductNestedInput;
    orderItem?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutProductGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
    comment?: Prisma.CommentUncheckedUpdateManyWithoutProductNestedInput;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutProductGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    isNew?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    offerExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    measurements?: Prisma.StringFieldUpdateOperationsInput | string;
    sale?: Prisma.FloatFieldUpdateOperationsInput | number;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    reviews?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityWarehouse?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.ProductUpdateimageInput | string[];
    category?: Prisma.ProductUpdatecategoryInput | $Enums.Category[];
};
export type ProductCountOutputType = {
    comment: number;
    orderItem: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comment?: boolean | ProductCountOutputTypeCountCommentArgs;
    orderItem?: boolean | ProductCountOutputTypeCountOrderItemArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountCommentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type ProductCountOutputTypeCountOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productGroupId?: boolean;
    isNew?: boolean;
    offerExpires?: boolean;
    measurements?: boolean;
    sale?: boolean;
    price?: boolean;
    rating?: boolean;
    reviews?: boolean;
    quantityWarehouse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    color?: boolean;
    description?: boolean;
    image?: boolean;
    category?: boolean;
    comment?: boolean | Prisma.Product$commentArgs<ExtArgs>;
    orderItem?: boolean | Prisma.Product$orderItemArgs<ExtArgs>;
    productGroup?: boolean | Prisma.ProductGroupDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productGroupId?: boolean;
    isNew?: boolean;
    offerExpires?: boolean;
    measurements?: boolean;
    sale?: boolean;
    price?: boolean;
    rating?: boolean;
    reviews?: boolean;
    quantityWarehouse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    color?: boolean;
    description?: boolean;
    image?: boolean;
    category?: boolean;
    productGroup?: boolean | Prisma.ProductGroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productGroupId?: boolean;
    isNew?: boolean;
    offerExpires?: boolean;
    measurements?: boolean;
    sale?: boolean;
    price?: boolean;
    rating?: boolean;
    reviews?: boolean;
    quantityWarehouse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    color?: boolean;
    description?: boolean;
    image?: boolean;
    category?: boolean;
    productGroup?: boolean | Prisma.ProductGroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    productGroupId?: boolean;
    isNew?: boolean;
    offerExpires?: boolean;
    measurements?: boolean;
    sale?: boolean;
    price?: boolean;
    rating?: boolean;
    reviews?: boolean;
    quantityWarehouse?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    color?: boolean;
    description?: boolean;
    image?: boolean;
    category?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productGroupId" | "isNew" | "offerExpires" | "measurements" | "sale" | "price" | "rating" | "reviews" | "quantityWarehouse" | "createdAt" | "updatedAt" | "color" | "description" | "image" | "category", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comment?: boolean | Prisma.Product$commentArgs<ExtArgs>;
    orderItem?: boolean | Prisma.Product$orderItemArgs<ExtArgs>;
    productGroup?: boolean | Prisma.ProductGroupDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productGroup?: boolean | Prisma.ProductGroupDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productGroup?: boolean | Prisma.ProductGroupDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        comment: Prisma.$CommentPayload<ExtArgs>[];
        orderItem: Prisma.$OrderItemPayload<ExtArgs>[];
        productGroup: Prisma.$ProductGroupPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        productGroupId: number;
        isNew: boolean;
        offerExpires: Date | null;
        measurements: string;
        sale: number;
        price: number;
        rating: number;
        reviews: number;
        quantityWarehouse: number;
        createdAt: Date;
        updatedAt: Date | null;
        color: string;
        description: string;
        image: string[];
        category: $Enums.Category[];
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comment<T extends Prisma.Product$commentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$commentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItem<T extends Prisma.Product$orderItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productGroup<T extends Prisma.ProductGroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductGroupDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'Int'>;
    readonly productGroupId: Prisma.FieldRef<"Product", 'Int'>;
    readonly isNew: Prisma.FieldRef<"Product", 'Boolean'>;
    readonly offerExpires: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly measurements: Prisma.FieldRef<"Product", 'String'>;
    readonly sale: Prisma.FieldRef<"Product", 'Float'>;
    readonly price: Prisma.FieldRef<"Product", 'Float'>;
    readonly rating: Prisma.FieldRef<"Product", 'Int'>;
    readonly reviews: Prisma.FieldRef<"Product", 'Int'>;
    readonly quantityWarehouse: Prisma.FieldRef<"Product", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly color: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly image: Prisma.FieldRef<"Product", 'String[]'>;
    readonly category: Prisma.FieldRef<"Product", 'Category[]'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$commentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentSelect<ExtArgs> | null;
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
export type Product$orderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
export {};
