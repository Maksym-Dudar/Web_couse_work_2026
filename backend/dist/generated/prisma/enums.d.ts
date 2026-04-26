export declare const Category: {
    readonly LIVING_ROOM: "LIVING_ROOM";
    readonly BEDROOM: "BEDROOM";
    readonly KITCHEN: "KITCHEN";
    readonly BATHROOM: "BATHROOM";
    readonly OFFICE: "OFFICE";
};
export type Category = (typeof Category)[keyof typeof Category];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly PROCESSING: "PROCESSING";
    readonly SHIPPED: "SHIPPED";
    readonly DELIVERED: "DELIVERED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly RETURNED: "RETURNED";
    readonly FAILED: "FAILED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const ShippingMethod: {
    readonly FREE: "FREE";
    readonly EXPRESS: "EXPRESS";
    readonly PICK_UP: "PICK_UP";
};
export type ShippingMethod = (typeof ShippingMethod)[keyof typeof ShippingMethod];
