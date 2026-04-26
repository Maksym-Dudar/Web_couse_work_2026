import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductGroupPayload>;
export type AggregateProductGroup = {
    _count: ProductGroupCountAggregateOutputType | null;
    _avg: ProductGroupAvgAggregateOutputType | null;
    _sum: ProductGroupSumAggregateOutputType | null;
    _min: ProductGroupMinAggregateOutputType | null;
    _max: ProductGroupMaxAggregateOutputType | null;
};
export type ProductGroupAvgAggregateOutputType = {
    id: number | null;
};
export type ProductGroupSumAggregateOutputType = {
    id: number | null;
};
export type ProductGroupMinAggregateOutputType = {
    id: number | null;
    title: string | null;
};
export type ProductGroupMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
};
export type ProductGroupCountAggregateOutputType = {
    id: number;
    title: number;
    _all: number;
};
export type ProductGroupAvgAggregateInputType = {
    id?: true;
};
export type ProductGroupSumAggregateInputType = {
    id?: true;
};
export type ProductGroupMinAggregateInputType = {
    id?: true;
    title?: true;
};
export type ProductGroupMaxAggregateInputType = {
    id?: true;
    title?: true;
};
export type ProductGroupCountAggregateInputType = {
    id?: true;
    title?: true;
    _all?: true;
};
export type ProductGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductGroupWhereInput;
    orderBy?: Prisma.ProductGroupOrderByWithRelationInput | Prisma.ProductGroupOrderByWithRelationInput[];
    cursor?: Prisma.ProductGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductGroupCountAggregateInputType;
    _avg?: ProductGroupAvgAggregateInputType;
    _sum?: ProductGroupSumAggregateInputType;
    _min?: ProductGroupMinAggregateInputType;
    _max?: ProductGroupMaxAggregateInputType;
};
export type GetProductGroupAggregateType<T extends ProductGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateProductGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductGroup[P]> : Prisma.GetScalarType<T[P], AggregateProductGroup[P]>;
};
export type ProductGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductGroupWhereInput;
    orderBy?: Prisma.ProductGroupOrderByWithAggregationInput | Prisma.ProductGroupOrderByWithAggregationInput[];
    by: Prisma.ProductGroupScalarFieldEnum[] | Prisma.ProductGroupScalarFieldEnum;
    having?: Prisma.ProductGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductGroupCountAggregateInputType | true;
    _avg?: ProductGroupAvgAggregateInputType;
    _sum?: ProductGroupSumAggregateInputType;
    _min?: ProductGroupMinAggregateInputType;
    _max?: ProductGroupMaxAggregateInputType;
};
export type ProductGroupGroupByOutputType = {
    id: number;
    title: string;
    _count: ProductGroupCountAggregateOutputType | null;
    _avg: ProductGroupAvgAggregateOutputType | null;
    _sum: ProductGroupSumAggregateOutputType | null;
    _min: ProductGroupMinAggregateOutputType | null;
    _max: ProductGroupMaxAggregateOutputType | null;
};
type GetProductGroupGroupByPayload<T extends ProductGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupGroupByOutputType[P]>;
}>>;
export type ProductGroupWhereInput = {
    AND?: Prisma.ProductGroupWhereInput | Prisma.ProductGroupWhereInput[];
    OR?: Prisma.ProductGroupWhereInput[];
    NOT?: Prisma.ProductGroupWhereInput | Prisma.ProductGroupWhereInput[];
    id?: Prisma.IntFilter<"ProductGroup"> | number;
    title?: Prisma.StringFilter<"ProductGroup"> | string;
    product?: Prisma.ProductListRelationFilter;
};
export type ProductGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByRelationAggregateInput;
};
export type ProductGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProductGroupWhereInput | Prisma.ProductGroupWhereInput[];
    OR?: Prisma.ProductGroupWhereInput[];
    NOT?: Prisma.ProductGroupWhereInput | Prisma.ProductGroupWhereInput[];
    title?: Prisma.StringFilter<"ProductGroup"> | string;
    product?: Prisma.ProductListRelationFilter;
}, "id">;
export type ProductGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    _count?: Prisma.ProductGroupCountOrderByAggregateInput;
    _avg?: Prisma.ProductGroupAvgOrderByAggregateInput;
    _max?: Prisma.ProductGroupMaxOrderByAggregateInput;
    _min?: Prisma.ProductGroupMinOrderByAggregateInput;
    _sum?: Prisma.ProductGroupSumOrderByAggregateInput;
};
export type ProductGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductGroupScalarWhereWithAggregatesInput | Prisma.ProductGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductGroupScalarWhereWithAggregatesInput | Prisma.ProductGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProductGroup"> | number;
    title?: Prisma.StringWithAggregatesFilter<"ProductGroup"> | string;
};
export type ProductGroupCreateInput = {
    title: string;
    product?: Prisma.ProductCreateNestedManyWithoutProductGroupInput;
};
export type ProductGroupUncheckedCreateInput = {
    id?: number;
    title: string;
    product?: Prisma.ProductUncheckedCreateNestedManyWithoutProductGroupInput;
};
export type ProductGroupUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    product?: Prisma.ProductUpdateManyWithoutProductGroupNestedInput;
};
export type ProductGroupUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    product?: Prisma.ProductUncheckedUpdateManyWithoutProductGroupNestedInput;
};
export type ProductGroupCreateManyInput = {
    id?: number;
    title: string;
};
export type ProductGroupUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductGroupUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductGroupScalarRelationFilter = {
    is?: Prisma.ProductGroupWhereInput;
    isNot?: Prisma.ProductGroupWhereInput;
};
export type ProductGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
};
export type ProductGroupAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProductGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
};
export type ProductGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
};
export type ProductGroupSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProductGroupCreateNestedOneWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductGroupCreateWithoutProductInput, Prisma.ProductGroupUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.ProductGroupCreateOrConnectWithoutProductInput;
    connect?: Prisma.ProductGroupWhereUniqueInput;
};
export type ProductGroupUpdateOneRequiredWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductGroupCreateWithoutProductInput, Prisma.ProductGroupUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.ProductGroupCreateOrConnectWithoutProductInput;
    upsert?: Prisma.ProductGroupUpsertWithoutProductInput;
    connect?: Prisma.ProductGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductGroupUpdateToOneWithWhereWithoutProductInput, Prisma.ProductGroupUpdateWithoutProductInput>, Prisma.ProductGroupUncheckedUpdateWithoutProductInput>;
};
export type ProductGroupCreateWithoutProductInput = {
    title: string;
};
export type ProductGroupUncheckedCreateWithoutProductInput = {
    id?: number;
    title: string;
};
export type ProductGroupCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductGroupCreateWithoutProductInput, Prisma.ProductGroupUncheckedCreateWithoutProductInput>;
};
export type ProductGroupUpsertWithoutProductInput = {
    update: Prisma.XOR<Prisma.ProductGroupUpdateWithoutProductInput, Prisma.ProductGroupUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductGroupCreateWithoutProductInput, Prisma.ProductGroupUncheckedCreateWithoutProductInput>;
    where?: Prisma.ProductGroupWhereInput;
};
export type ProductGroupUpdateToOneWithWhereWithoutProductInput = {
    where?: Prisma.ProductGroupWhereInput;
    data: Prisma.XOR<Prisma.ProductGroupUpdateWithoutProductInput, Prisma.ProductGroupUncheckedUpdateWithoutProductInput>;
};
export type ProductGroupUpdateWithoutProductInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductGroupUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProductGroupCountOutputType = {
    product: number;
};
export type ProductGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | ProductGroupCountOutputTypeCountProductArgs;
};
export type ProductGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductGroupCountOutputTypeCountProductArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type ProductGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    product?: boolean | Prisma.ProductGroup$productArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productGroup"]>;
export type ProductGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
}, ExtArgs["result"]["productGroup"]>;
export type ProductGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
}, ExtArgs["result"]["productGroup"]>;
export type ProductGroupSelectScalar = {
    id?: boolean;
    title?: boolean;
};
export type ProductGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title", ExtArgs["result"]["productGroup"]>;
export type ProductGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductGroup$productArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProductGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProductGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductGroup";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
    }, ExtArgs["result"]["productGroup"]>;
    composites: {};
};
export type ProductGroupGetPayload<S extends boolean | null | undefined | ProductGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload, S>;
export type ProductGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductGroupCountAggregateInputType | true;
};
export interface ProductGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductGroup'];
        meta: {
            name: 'ProductGroup';
        };
    };
    findUnique<T extends ProductGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductGroupFindManyArgs>(args?: Prisma.SelectSubset<T, ProductGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductGroupCreateArgs>(args: Prisma.SelectSubset<T, ProductGroupCreateArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductGroupDeleteArgs>(args: Prisma.SelectSubset<T, ProductGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductGroupUpdateArgs>(args: Prisma.SelectSubset<T, ProductGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductGroupUpsertArgs>(args: Prisma.SelectSubset<T, ProductGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductGroupClient<runtime.Types.Result.GetResult<Prisma.$ProductGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductGroupCountArgs>(args?: Prisma.Subset<T, ProductGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductGroupCountAggregateOutputType> : number>;
    aggregate<T extends ProductGroupAggregateArgs>(args: Prisma.Subset<T, ProductGroupAggregateArgs>): Prisma.PrismaPromise<GetProductGroupAggregateType<T>>;
    groupBy<T extends ProductGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductGroupFieldRefs;
}
export interface Prisma__ProductGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductGroup$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductGroup$productArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductGroupFieldRefs {
    readonly id: Prisma.FieldRef<"ProductGroup", 'Int'>;
    readonly title: Prisma.FieldRef<"ProductGroup", 'String'>;
}
export type ProductGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    where: Prisma.ProductGroupWhereUniqueInput;
};
export type ProductGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    where: Prisma.ProductGroupWhereUniqueInput;
};
export type ProductGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    where?: Prisma.ProductGroupWhereInput;
    orderBy?: Prisma.ProductGroupOrderByWithRelationInput | Prisma.ProductGroupOrderByWithRelationInput[];
    cursor?: Prisma.ProductGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductGroupScalarFieldEnum | Prisma.ProductGroupScalarFieldEnum[];
};
export type ProductGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    where?: Prisma.ProductGroupWhereInput;
    orderBy?: Prisma.ProductGroupOrderByWithRelationInput | Prisma.ProductGroupOrderByWithRelationInput[];
    cursor?: Prisma.ProductGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductGroupScalarFieldEnum | Prisma.ProductGroupScalarFieldEnum[];
};
export type ProductGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    where?: Prisma.ProductGroupWhereInput;
    orderBy?: Prisma.ProductGroupOrderByWithRelationInput | Prisma.ProductGroupOrderByWithRelationInput[];
    cursor?: Prisma.ProductGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductGroupScalarFieldEnum | Prisma.ProductGroupScalarFieldEnum[];
};
export type ProductGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductGroupCreateInput, Prisma.ProductGroupUncheckedCreateInput>;
};
export type ProductGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductGroupCreateManyInput | Prisma.ProductGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    data: Prisma.ProductGroupCreateManyInput | Prisma.ProductGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductGroupUpdateInput, Prisma.ProductGroupUncheckedUpdateInput>;
    where: Prisma.ProductGroupWhereUniqueInput;
};
export type ProductGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductGroupUpdateManyMutationInput, Prisma.ProductGroupUncheckedUpdateManyInput>;
    where?: Prisma.ProductGroupWhereInput;
    limit?: number;
};
export type ProductGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductGroupUpdateManyMutationInput, Prisma.ProductGroupUncheckedUpdateManyInput>;
    where?: Prisma.ProductGroupWhereInput;
    limit?: number;
};
export type ProductGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    where: Prisma.ProductGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductGroupCreateInput, Prisma.ProductGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductGroupUpdateInput, Prisma.ProductGroupUncheckedUpdateInput>;
};
export type ProductGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
    where: Prisma.ProductGroupWhereUniqueInput;
};
export type ProductGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductGroupWhereInput;
    limit?: number;
};
export type ProductGroup$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProductGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductGroupSelect<ExtArgs> | null;
    omit?: Prisma.ProductGroupOmit<ExtArgs> | null;
    include?: Prisma.ProductGroupInclude<ExtArgs> | null;
};
export {};
