import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    addressId: number | null;
    subtotal: number | null;
    total: number | null;
};
export type OrderSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    addressId: number | null;
    subtotal: number | null;
    total: number | null;
};
export type OrderMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    addressId: number | null;
    createdAt: Date | null;
    status: $Enums.OrderStatus | null;
    subtotal: number | null;
    total: number | null;
    shippingMethod: $Enums.ShippingMethod | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
};
export type OrderMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    addressId: number | null;
    createdAt: Date | null;
    status: $Enums.OrderStatus | null;
    subtotal: number | null;
    total: number | null;
    shippingMethod: $Enums.ShippingMethod | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    userId: number;
    addressId: number;
    createdAt: number;
    status: number;
    subtotal: number;
    total: number;
    shippingMethod: number;
    firstName: number;
    lastName: number;
    email: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    id?: true;
    userId?: true;
    addressId?: true;
    subtotal?: true;
    total?: true;
};
export type OrderSumAggregateInputType = {
    id?: true;
    userId?: true;
    addressId?: true;
    subtotal?: true;
    total?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    userId?: true;
    addressId?: true;
    createdAt?: true;
    status?: true;
    subtotal?: true;
    total?: true;
    shippingMethod?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    userId?: true;
    addressId?: true;
    createdAt?: true;
    status?: true;
    subtotal?: true;
    total?: true;
    shippingMethod?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    userId?: true;
    addressId?: true;
    createdAt?: true;
    status?: true;
    subtotal?: true;
    total?: true;
    shippingMethod?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: number;
    userId: number;
    addressId: number | null;
    createdAt: Date;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.IntFilter<"Order"> | number;
    userId?: Prisma.IntFilter<"Order"> | number;
    addressId?: Prisma.IntNullableFilter<"Order"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.IntFilter<"Order"> | number;
    total?: Prisma.IntFilter<"Order"> | number;
    shippingMethod?: Prisma.EnumShippingMethodFilter<"Order"> | $Enums.ShippingMethod;
    firstName?: Prisma.StringFilter<"Order"> | string;
    lastName?: Prisma.StringFilter<"Order"> | string;
    email?: Prisma.StringFilter<"Order"> | string;
    orderItem?: Prisma.OrderItemListRelationFilter;
    address?: Prisma.XOR<Prisma.AddressNullableScalarRelationFilter, Prisma.AddressWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    addressId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    shippingMethod?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    orderItem?: Prisma.OrderItemOrderByRelationAggregateInput;
    address?: Prisma.AddressOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    userId?: Prisma.IntFilter<"Order"> | number;
    addressId?: Prisma.IntNullableFilter<"Order"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.IntFilter<"Order"> | number;
    total?: Prisma.IntFilter<"Order"> | number;
    shippingMethod?: Prisma.EnumShippingMethodFilter<"Order"> | $Enums.ShippingMethod;
    firstName?: Prisma.StringFilter<"Order"> | string;
    lastName?: Prisma.StringFilter<"Order"> | string;
    email?: Prisma.StringFilter<"Order"> | string;
    orderItem?: Prisma.OrderItemListRelationFilter;
    address?: Prisma.XOR<Prisma.AddressNullableScalarRelationFilter, Prisma.AddressWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    addressId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    shippingMethod?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    addressId?: Prisma.IntNullableWithAggregatesFilter<"Order"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    total?: Prisma.IntWithAggregatesFilter<"Order"> | number;
    shippingMethod?: Prisma.EnumShippingMethodWithAggregatesFilter<"Order"> | $Enums.ShippingMethod;
    firstName?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Order"> | string;
};
export type OrderCreateInput = {
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    address?: Prisma.AddressCreateNestedOneWithoutOrdersInput;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateInput = {
    id?: number;
    userId: number;
    addressId?: number | null;
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItem?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    address?: Prisma.AddressUpdateOneWithoutOrdersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    addressId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: number;
    userId: number;
    addressId?: number | null;
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
};
export type OrderUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    addressId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    addressId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    shippingMethod?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    addressId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    addressId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    shippingMethod?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    addressId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    shippingMethod?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    addressId?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput> | Prisma.OrderCreateWithoutUserInput[] | Prisma.OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutUserInput | Prisma.OrderCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutUserInput | Prisma.OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrderCreateManyUserInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutUserInput | Prisma.OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutUserInput | Prisma.OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAddressInput, Prisma.OrderUncheckedCreateWithoutAddressInput> | Prisma.OrderCreateWithoutAddressInput[] | Prisma.OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAddressInput | Prisma.OrderCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.OrderCreateManyAddressInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutAddressInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAddressInput, Prisma.OrderUncheckedCreateWithoutAddressInput> | Prisma.OrderCreateWithoutAddressInput[] | Prisma.OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAddressInput | Prisma.OrderCreateOrConnectWithoutAddressInput[];
    createMany?: Prisma.OrderCreateManyAddressInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAddressInput, Prisma.OrderUncheckedCreateWithoutAddressInput> | Prisma.OrderCreateWithoutAddressInput[] | Prisma.OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAddressInput | Prisma.OrderCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutAddressInput | Prisma.OrderUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.OrderCreateManyAddressInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutAddressInput | Prisma.OrderUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutAddressInput | Prisma.OrderUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutAddressInput, Prisma.OrderUncheckedCreateWithoutAddressInput> | Prisma.OrderCreateWithoutAddressInput[] | Prisma.OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutAddressInput | Prisma.OrderCreateOrConnectWithoutAddressInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutAddressInput | Prisma.OrderUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: Prisma.OrderCreateManyAddressInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutAddressInput | Prisma.OrderUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutAddressInput | Prisma.OrderUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type EnumShippingMethodFieldUpdateOperationsInput = {
    set?: $Enums.ShippingMethod;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type OrderCreateNestedOneWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderItemInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderItemInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrderItemInput;
    upsert?: Prisma.OrderUpsertWithoutOrderItemInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutOrderItemInput, Prisma.OrderUpdateWithoutOrderItemInput>, Prisma.OrderUncheckedUpdateWithoutOrderItemInput>;
};
export type OrderCreateWithoutUserInput = {
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    address?: Prisma.AddressCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutUserInput = {
    id?: number;
    addressId?: number | null;
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderCreateManyUserInputEnvelope = {
    data: Prisma.OrderCreateManyUserInput | Prisma.OrderCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutUserInput, Prisma.OrderUncheckedCreateWithoutUserInput>;
};
export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutUserInput, Prisma.OrderUncheckedUpdateWithoutUserInput>;
};
export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutUserInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.IntFilter<"Order"> | number;
    userId?: Prisma.IntFilter<"Order"> | number;
    addressId?: Prisma.IntNullableFilter<"Order"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    status?: Prisma.EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    subtotal?: Prisma.IntFilter<"Order"> | number;
    total?: Prisma.IntFilter<"Order"> | number;
    shippingMethod?: Prisma.EnumShippingMethodFilter<"Order"> | $Enums.ShippingMethod;
    firstName?: Prisma.StringFilter<"Order"> | string;
    lastName?: Prisma.StringFilter<"Order"> | string;
    email?: Prisma.StringFilter<"Order"> | string;
};
export type OrderCreateWithoutAddressInput = {
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    orderItem?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutAddressInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    orderItem?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutAddressInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutAddressInput, Prisma.OrderUncheckedCreateWithoutAddressInput>;
};
export type OrderCreateManyAddressInputEnvelope = {
    data: Prisma.OrderCreateManyAddressInput | Prisma.OrderCreateManyAddressInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutAddressInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutAddressInput, Prisma.OrderUncheckedUpdateWithoutAddressInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutAddressInput, Prisma.OrderUncheckedCreateWithoutAddressInput>;
};
export type OrderUpdateWithWhereUniqueWithoutAddressInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutAddressInput, Prisma.OrderUncheckedUpdateWithoutAddressInput>;
};
export type OrderUpdateManyWithWhereWithoutAddressInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutAddressInput>;
};
export type OrderCreateWithoutOrderItemInput = {
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
    address?: Prisma.AddressCreateNestedOneWithoutOrdersInput;
    user: Prisma.UserCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutOrderItemInput = {
    id?: number;
    userId: number;
    addressId?: number | null;
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
};
export type OrderCreateOrConnectWithoutOrderItemInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderItemInput>;
};
export type OrderUpsertWithoutOrderItemInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOrderItemInput, Prisma.OrderUncheckedUpdateWithoutOrderItemInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrderItemInput, Prisma.OrderUncheckedCreateWithoutOrderItemInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOrderItemInput, Prisma.OrderUncheckedUpdateWithoutOrderItemInput>;
};
export type OrderUpdateWithoutOrderItemInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.AddressUpdateOneWithoutOrdersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutOrderItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    addressId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderCreateManyUserInput = {
    id?: number;
    addressId?: number | null;
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
};
export type OrderUpdateWithoutUserInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItem?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    address?: Prisma.AddressUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    addressId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    addressId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderCreateManyAddressInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
    status: $Enums.OrderStatus;
    subtotal: number;
    total: number;
    shippingMethod: $Enums.ShippingMethod;
    firstName: string;
    lastName: string;
    email: string;
};
export type OrderUpdateWithoutAddressInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItem?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutAddressInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItem?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutAddressInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subtotal?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.IntFieldUpdateOperationsInput | number;
    shippingMethod?: Prisma.EnumShippingMethodFieldUpdateOperationsInput | $Enums.ShippingMethod;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrderCountOutputType = {
    orderItem: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderCountOutputTypeCountOrderItemArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountOrderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    addressId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    subtotal?: boolean;
    total?: boolean;
    shippingMethod?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    orderItem?: boolean | Prisma.Order$orderItemArgs<ExtArgs>;
    address?: boolean | Prisma.Order$addressArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    addressId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    subtotal?: boolean;
    total?: boolean;
    shippingMethod?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    address?: boolean | Prisma.Order$addressArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    addressId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    subtotal?: boolean;
    total?: boolean;
    shippingMethod?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    address?: boolean | Prisma.Order$addressArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    userId?: boolean;
    addressId?: boolean;
    createdAt?: boolean;
    status?: boolean;
    subtotal?: boolean;
    total?: boolean;
    shippingMethod?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "addressId" | "createdAt" | "status" | "subtotal" | "total" | "shippingMethod" | "firstName" | "lastName" | "email", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItem?: boolean | Prisma.Order$orderItemArgs<ExtArgs>;
    address?: boolean | Prisma.Order$addressArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.Order$addressArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    address?: boolean | Prisma.Order$addressArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        orderItem: Prisma.$OrderItemPayload<ExtArgs>[];
        address: Prisma.$AddressPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        addressId: number | null;
        createdAt: Date;
        status: $Enums.OrderStatus;
        subtotal: number;
        total: number;
        shippingMethod: $Enums.ShippingMethod;
        firstName: string;
        lastName: string;
        email: string;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orderItem<T extends Prisma.Order$orderItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    address<T extends Prisma.Order$addressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$addressArgs<ExtArgs>>): Prisma.Prisma__AddressClient<runtime.Types.Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'Int'>;
    readonly userId: Prisma.FieldRef<"Order", 'Int'>;
    readonly addressId: Prisma.FieldRef<"Order", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Order", 'OrderStatus'>;
    readonly subtotal: Prisma.FieldRef<"Order", 'Int'>;
    readonly total: Prisma.FieldRef<"Order", 'Int'>;
    readonly shippingMethod: Prisma.FieldRef<"Order", 'ShippingMethod'>;
    readonly firstName: Prisma.FieldRef<"Order", 'String'>;
    readonly lastName: Prisma.FieldRef<"Order", 'String'>;
    readonly email: Prisma.FieldRef<"Order", 'String'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$orderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Order$addressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressSelect<ExtArgs> | null;
    omit?: Prisma.AddressOmit<ExtArgs> | null;
    include?: Prisma.AddressInclude<ExtArgs> | null;
    where?: Prisma.AddressWhereInput;
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
export {};
