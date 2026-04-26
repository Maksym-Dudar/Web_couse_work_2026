import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AddressModel = runtime.Types.Result.DefaultSelection<Prisma.$AddressPayload>;
export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null;
    _avg: AddressAvgAggregateOutputType | null;
    _sum: AddressSumAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
};
export type AddressAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type AddressSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type AddressMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    email: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    street: string | null;
    buildingNumber: string | null;
    zipCode: string | null;
};
export type AddressMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    email: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    street: string | null;
    buildingNumber: string | null;
    zipCode: string | null;
};
export type AddressCountAggregateOutputType = {
    id: number;
    userId: number;
    firstName: number;
    lastName: number;
    phoneNumber: number;
    email: number;
    country: number;
    state: number;
    city: number;
    street: number;
    buildingNumber: number;
    zipCode: number;
    _all: number;
};
export type AddressAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type AddressSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type AddressMinAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    phoneNumber?: true;
    email?: true;
    country?: true;
    state?: true;
    city?: true;
    street?: true;
    buildingNumber?: true;
    zipCode?: true;
};
export type AddressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    phoneNumber?: true;
    email?: true;
    country?: true;
    state?: true;
    city?: true;
    street?: true;
    buildingNumber?: true;
    zipCode?: true;
};
export type AddressCountAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    phoneNumber?: true;
    email?: true;
    country?: true;
    state?: true;
    city?: true;
    street?: true;
    buildingNumber?: true;
    zipCode?: true;
    _all?: true;
};
export type AddressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput | Prisma.AddressOrderByWithRelationInput[];
    cursor?: Prisma.AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AddressCountAggregateInputType;
    _avg?: AddressAvgAggregateInputType;
    _sum?: AddressSumAggregateInputType;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
};
export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
    [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAddress[P]> : Prisma.GetScalarType<T[P], AggregateAddress[P]>;
};
export type AddressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithAggregationInput | Prisma.AddressOrderByWithAggregationInput[];
    by: Prisma.AddressScalarFieldEnum[] | Prisma.AddressScalarFieldEnum;
    having?: Prisma.AddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressCountAggregateInputType | true;
    _avg?: AddressAvgAggregateInputType;
    _sum?: AddressSumAggregateInputType;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
};
export type AddressGroupByOutputType = {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
    _count: AddressCountAggregateOutputType | null;
    _avg: AddressAvgAggregateOutputType | null;
    _sum: AddressSumAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
};
type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AddressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AddressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AddressGroupByOutputType[P]>;
}>>;
export type AddressWhereInput = {
    AND?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    OR?: Prisma.AddressWhereInput[];
    NOT?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    id?: Prisma.IntFilter<"Address"> | number;
    userId?: Prisma.IntFilter<"Address"> | number;
    firstName?: Prisma.StringFilter<"Address"> | string;
    lastName?: Prisma.StringFilter<"Address"> | string;
    phoneNumber?: Prisma.StringFilter<"Address"> | string;
    email?: Prisma.StringFilter<"Address"> | string;
    country?: Prisma.StringFilter<"Address"> | string;
    state?: Prisma.StringFilter<"Address"> | string;
    city?: Prisma.StringFilter<"Address"> | string;
    street?: Prisma.StringFilter<"Address"> | string;
    buildingNumber?: Prisma.StringFilter<"Address"> | string;
    zipCode?: Prisma.StringFilter<"Address"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orders?: Prisma.OrderListRelationFilter;
};
export type AddressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    buildingNumber?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    OR?: Prisma.AddressWhereInput[];
    NOT?: Prisma.AddressWhereInput | Prisma.AddressWhereInput[];
    userId?: Prisma.IntFilter<"Address"> | number;
    firstName?: Prisma.StringFilter<"Address"> | string;
    lastName?: Prisma.StringFilter<"Address"> | string;
    phoneNumber?: Prisma.StringFilter<"Address"> | string;
    email?: Prisma.StringFilter<"Address"> | string;
    country?: Prisma.StringFilter<"Address"> | string;
    state?: Prisma.StringFilter<"Address"> | string;
    city?: Prisma.StringFilter<"Address"> | string;
    street?: Prisma.StringFilter<"Address"> | string;
    buildingNumber?: Prisma.StringFilter<"Address"> | string;
    zipCode?: Prisma.StringFilter<"Address"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orders?: Prisma.OrderListRelationFilter;
}, "id">;
export type AddressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    buildingNumber?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    _count?: Prisma.AddressCountOrderByAggregateInput;
    _avg?: Prisma.AddressAvgOrderByAggregateInput;
    _max?: Prisma.AddressMaxOrderByAggregateInput;
    _min?: Prisma.AddressMinOrderByAggregateInput;
    _sum?: Prisma.AddressSumOrderByAggregateInput;
};
export type AddressScalarWhereWithAggregatesInput = {
    AND?: Prisma.AddressScalarWhereWithAggregatesInput | Prisma.AddressScalarWhereWithAggregatesInput[];
    OR?: Prisma.AddressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AddressScalarWhereWithAggregatesInput | Prisma.AddressScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Address"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Address"> | number;
    firstName?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    country?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    state?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    street?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    buildingNumber?: Prisma.StringWithAggregatesFilter<"Address"> | string;
    zipCode?: Prisma.StringWithAggregatesFilter<"Address"> | string;
};
export type AddressCreateInput = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
    user: Prisma.UserCreateNestedOneWithoutAddressInput;
    orders?: Prisma.OrderCreateNestedManyWithoutAddressInput;
};
export type AddressUncheckedCreateInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutAddressInput;
};
export type AddressUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAddressNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutAddressNestedInput;
};
export type AddressUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutAddressNestedInput;
};
export type AddressCreateManyInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
};
export type AddressUpdateManyMutationInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressListRelationFilter = {
    every?: Prisma.AddressWhereInput;
    some?: Prisma.AddressWhereInput;
    none?: Prisma.AddressWhereInput;
};
export type AddressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AddressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    buildingNumber?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
};
export type AddressAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AddressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    buildingNumber?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
};
export type AddressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    street?: Prisma.SortOrder;
    buildingNumber?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
};
export type AddressSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AddressNullableScalarRelationFilter = {
    is?: Prisma.AddressWhereInput | null;
    isNot?: Prisma.AddressWhereInput | null;
};
export type AddressCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutUserInput, Prisma.AddressUncheckedCreateWithoutUserInput> | Prisma.AddressCreateWithoutUserInput[] | Prisma.AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutUserInput | Prisma.AddressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AddressCreateManyUserInputEnvelope;
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
};
export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutUserInput, Prisma.AddressUncheckedCreateWithoutUserInput> | Prisma.AddressCreateWithoutUserInput[] | Prisma.AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutUserInput | Prisma.AddressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AddressCreateManyUserInputEnvelope;
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
};
export type AddressUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutUserInput, Prisma.AddressUncheckedCreateWithoutUserInput> | Prisma.AddressCreateWithoutUserInput[] | Prisma.AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutUserInput | Prisma.AddressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AddressUpsertWithWhereUniqueWithoutUserInput | Prisma.AddressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AddressCreateManyUserInputEnvelope;
    set?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    disconnect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    delete?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    update?: Prisma.AddressUpdateWithWhereUniqueWithoutUserInput | Prisma.AddressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AddressUpdateManyWithWhereWithoutUserInput | Prisma.AddressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
};
export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutUserInput, Prisma.AddressUncheckedCreateWithoutUserInput> | Prisma.AddressCreateWithoutUserInput[] | Prisma.AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutUserInput | Prisma.AddressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AddressUpsertWithWhereUniqueWithoutUserInput | Prisma.AddressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AddressCreateManyUserInputEnvelope;
    set?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    disconnect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    delete?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    connect?: Prisma.AddressWhereUniqueInput | Prisma.AddressWhereUniqueInput[];
    update?: Prisma.AddressUpdateWithWhereUniqueWithoutUserInput | Prisma.AddressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AddressUpdateManyWithWhereWithoutUserInput | Prisma.AddressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
};
export type AddressCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutOrdersInput, Prisma.AddressUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.AddressWhereUniqueInput;
};
export type AddressUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.AddressCreateWithoutOrdersInput, Prisma.AddressUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.AddressCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.AddressUpsertWithoutOrdersInput;
    disconnect?: Prisma.AddressWhereInput | boolean;
    delete?: Prisma.AddressWhereInput | boolean;
    connect?: Prisma.AddressWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AddressUpdateToOneWithWhereWithoutOrdersInput, Prisma.AddressUpdateWithoutOrdersInput>, Prisma.AddressUncheckedUpdateWithoutOrdersInput>;
};
export type AddressCreateWithoutUserInput = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
    orders?: Prisma.OrderCreateNestedManyWithoutAddressInput;
};
export type AddressUncheckedCreateWithoutUserInput = {
    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutAddressInput;
};
export type AddressCreateOrConnectWithoutUserInput = {
    where: Prisma.AddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddressCreateWithoutUserInput, Prisma.AddressUncheckedCreateWithoutUserInput>;
};
export type AddressCreateManyUserInputEnvelope = {
    data: Prisma.AddressCreateManyUserInput | Prisma.AddressCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AddressWhereUniqueInput;
    update: Prisma.XOR<Prisma.AddressUpdateWithoutUserInput, Prisma.AddressUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AddressCreateWithoutUserInput, Prisma.AddressUncheckedCreateWithoutUserInput>;
};
export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AddressWhereUniqueInput;
    data: Prisma.XOR<Prisma.AddressUpdateWithoutUserInput, Prisma.AddressUncheckedUpdateWithoutUserInput>;
};
export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AddressScalarWhereInput;
    data: Prisma.XOR<Prisma.AddressUpdateManyMutationInput, Prisma.AddressUncheckedUpdateManyWithoutUserInput>;
};
export type AddressScalarWhereInput = {
    AND?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
    OR?: Prisma.AddressScalarWhereInput[];
    NOT?: Prisma.AddressScalarWhereInput | Prisma.AddressScalarWhereInput[];
    id?: Prisma.IntFilter<"Address"> | number;
    userId?: Prisma.IntFilter<"Address"> | number;
    firstName?: Prisma.StringFilter<"Address"> | string;
    lastName?: Prisma.StringFilter<"Address"> | string;
    phoneNumber?: Prisma.StringFilter<"Address"> | string;
    email?: Prisma.StringFilter<"Address"> | string;
    country?: Prisma.StringFilter<"Address"> | string;
    state?: Prisma.StringFilter<"Address"> | string;
    city?: Prisma.StringFilter<"Address"> | string;
    street?: Prisma.StringFilter<"Address"> | string;
    buildingNumber?: Prisma.StringFilter<"Address"> | string;
    zipCode?: Prisma.StringFilter<"Address"> | string;
};
export type AddressCreateWithoutOrdersInput = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
    user: Prisma.UserCreateNestedOneWithoutAddressInput;
};
export type AddressUncheckedCreateWithoutOrdersInput = {
    id?: number;
    userId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
};
export type AddressCreateOrConnectWithoutOrdersInput = {
    where: Prisma.AddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddressCreateWithoutOrdersInput, Prisma.AddressUncheckedCreateWithoutOrdersInput>;
};
export type AddressUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.AddressUpdateWithoutOrdersInput, Prisma.AddressUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.AddressCreateWithoutOrdersInput, Prisma.AddressUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.AddressWhereInput;
};
export type AddressUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.AddressWhereInput;
    data: Prisma.XOR<Prisma.AddressUpdateWithoutOrdersInput, Prisma.AddressUncheckedUpdateWithoutOrdersInput>;
};
export type AddressUpdateWithoutOrdersInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAddressNestedInput;
};
export type AddressUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressCreateManyUserInput = {
    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    state: string;
    city: string;
    street: string;
    buildingNumber: string;
    zipCode: string;
};
export type AddressUpdateWithoutUserInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.OrderUpdateManyWithoutAddressNestedInput;
};
export type AddressUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutAddressNestedInput;
};
export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    street?: Prisma.StringFieldUpdateOperationsInput | string;
    buildingNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    zipCode?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AddressCountOutputType = {
    orders: number;
};
export type AddressCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | AddressCountOutputTypeCountOrdersArgs;
};
export type AddressCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressCountOutputTypeSelect<ExtArgs> | null;
};
export type AddressCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type AddressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phoneNumber?: boolean;
    email?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    street?: boolean;
    buildingNumber?: boolean;
    zipCode?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.Address$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.AddressCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type AddressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phoneNumber?: boolean;
    email?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    street?: boolean;
    buildingNumber?: boolean;
    zipCode?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type AddressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phoneNumber?: boolean;
    email?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    street?: boolean;
    buildingNumber?: boolean;
    zipCode?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["address"]>;
export type AddressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phoneNumber?: boolean;
    email?: boolean;
    country?: boolean;
    state?: boolean;
    city?: boolean;
    street?: boolean;
    buildingNumber?: boolean;
    zipCode?: boolean;
};
export type AddressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "phoneNumber" | "email" | "country" | "state" | "city" | "street" | "buildingNumber" | "zipCode", ExtArgs["result"]["address"]>;
export type AddressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.Address$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.AddressCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AddressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AddressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AddressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Address";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
        country: string;
        state: string;
        city: string;
        street: string;
        buildingNumber: string;
        zipCode: string;
    }, ExtArgs["result"]["address"]>;
    composites: {};
};
export type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AddressPayload, S>;
export type AddressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressCountAggregateInputType | true;
};
export interface AddressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Address'];
        meta: {
            name: 'Address';
        };
    };
    findUnique<T extends AddressFindUniqueArgs>(args: Prisma.SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AddressFindFirstArgs>(args?: Prisma.SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AddressFindManyArgs>(args?: Prisma.SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AddressCreateArgs>(args: Prisma.SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AddressCreateManyArgs>(args?: Prisma.SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AddressDeleteArgs>(args: Prisma.SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AddressUpdateArgs>(args: Prisma.SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AddressDeleteManyArgs>(args?: Prisma.SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AddressUpdateManyArgs>(args: Prisma.SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AddressUpsertArgs>(args: Prisma.SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AddressCountArgs>(args?: Prisma.Subset<T, AddressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AddressCountAggregateOutputType> : number>;
    aggregate<T extends AddressAggregateArgs>(args: Prisma.Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>;
    groupBy<T extends AddressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AddressGroupByArgs['orderBy'];
    } : {
        orderBy?: AddressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AddressFieldRefs;
}
export interface Prisma__AddressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.Address$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Address$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AddressFieldRefs {
    readonly id: Prisma.FieldRef<"Address", 'Int'>;
    readonly userId: Prisma.FieldRef<"Address", 'Int'>;
    readonly firstName: Prisma.FieldRef<"Address", 'String'>;
    readonly lastName: Prisma.FieldRef<"Address", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Address", 'String'>;
    readonly email: Prisma.FieldRef<"Address", 'String'>;
    readonly country: Prisma.FieldRef<"Address", 'String'>;
    readonly state: Prisma.FieldRef<"Address", 'String'>;
    readonly city: Prisma.FieldRef<"Address", 'String'>;
    readonly street: Prisma.FieldRef<"Address", 'String'>;
    readonly buildingNumber: Prisma.FieldRef<"Address", 'String'>;
    readonly zipCode: Prisma.FieldRef<"Address", 'String'>;
}
export type AddressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput | Prisma.AddressOrderByWithRelationInput[];
    cursor?: Prisma.AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type AddressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput | Prisma.AddressOrderByWithRelationInput[];
    cursor?: Prisma.AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type AddressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput | Prisma.AddressOrderByWithRelationInput[];
    cursor?: Prisma.AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressScalarFieldEnum | Prisma.AddressScalarFieldEnum[];
};
export type AddressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddressCreateInput, Prisma.AddressUncheckedCreateInput>;
};
export type AddressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AddressCreateManyInput | Prisma.AddressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AddressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    data: Prisma.AddressCreateManyInput | Prisma.AddressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AddressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AddressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddressUpdateInput, Prisma.AddressUncheckedUpdateInput>;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AddressUpdateManyMutationInput, Prisma.AddressUncheckedUpdateManyInput>;
    where?: Prisma.AddressWhereInput;
    limit?: number;
};
export type AddressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AddressUpdateManyMutationInput, Prisma.AddressUncheckedUpdateManyInput>;
    where?: Prisma.AddressWhereInput;
    limit?: number;
    include?: Prisma.AddressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AddressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.AddressCreateInput, Prisma.AddressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AddressUpdateInput, Prisma.AddressUncheckedUpdateInput>;
};
export type AddressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where: Prisma.AddressWhereUniqueInput;
};
export type AddressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AddressWhereInput;
    limit?: number;
};
export type Address$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type AddressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
};
export {};
