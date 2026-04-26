"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethod = exports.OrderStatus = exports.Category = void 0;
exports.Category = {
    LIVING_ROOM: 'LIVING_ROOM',
    BEDROOM: 'BEDROOM',
    KITCHEN: 'KITCHEN',
    BATHROOM: 'BATHROOM',
    OFFICE: 'OFFICE'
};
exports.OrderStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    PROCESSING: 'PROCESSING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
    RETURNED: 'RETURNED',
    FAILED: 'FAILED'
};
exports.ShippingMethod = {
    FREE: 'FREE',
    EXPRESS: 'EXPRESS',
    PICK_UP: 'PICK_UP'
};
//# sourceMappingURL=enums.js.map