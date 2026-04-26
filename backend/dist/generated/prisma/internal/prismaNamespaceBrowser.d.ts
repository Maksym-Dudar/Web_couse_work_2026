import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Product: "Product";
    readonly ProductGroup: "ProductGroup";
    readonly Address: "Address";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Comment: "Comment";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly otp: "otp";
    readonly expireOtp: "expireOtp";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly avatar: "avatar";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly productGroupId: "productGroupId";
    readonly isNew: "isNew";
    readonly offerExpires: "offerExpires";
    readonly measurements: "measurements";
    readonly sale: "sale";
    readonly price: "price";
    readonly rating: "rating";
    readonly reviews: "reviews";
    readonly quantityWarehouse: "quantityWarehouse";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly color: "color";
    readonly description: "description";
    readonly image: "image";
    readonly category: "category";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductGroupScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
};
export type ProductGroupScalarFieldEnum = (typeof ProductGroupScalarFieldEnum)[keyof typeof ProductGroupScalarFieldEnum];
export declare const AddressScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phoneNumber: "phoneNumber";
    readonly email: "email";
    readonly country: "country";
    readonly state: "state";
    readonly city: "city";
    readonly street: "street";
    readonly buildingNumber: "buildingNumber";
    readonly zipCode: "zipCode";
};
export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly addressId: "addressId";
    readonly createdAt: "createdAt";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly total: "total";
    readonly shippingMethod: "shippingMethod";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly quantity: "quantity";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const CommentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly productId: "productId";
    readonly rating: "rating";
    readonly text: "text";
    readonly createdAt: "createdAt";
};
export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
