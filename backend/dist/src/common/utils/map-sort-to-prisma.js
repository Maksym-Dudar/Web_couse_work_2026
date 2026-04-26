"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSortToPrisma = mapSortToPrisma;
const sorts_enum_1 = require("../enums/sorts.enum");
function mapSortToPrisma(sort) {
    switch (sort) {
        case sorts_enum_1.Sorts.highPrice:
            return { price: 'desc' };
        case sorts_enum_1.Sorts.lowPrice:
            return { price: 'asc' };
        case sorts_enum_1.Sorts.topRated:
            return { rating: 'desc' };
        case sorts_enum_1.Sorts.newest:
            return { createdAt: 'desc' };
        default:
            return { rating: 'desc' };
    }
}
//# sourceMappingURL=map-sort-to-prisma.js.map