"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const prisma_service_1 = require("../../database/prisma/prisma.service");
const common_1 = require("@nestjs/common");
let OrderRepository = class OrderRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(status, total, subtotal, userId, shippingMethod, item) {
        return this.prisma.$transaction(async (tx) => {
            const order = await tx.order.create({
                data: { status, total, subtotal, userId, shippingMethod },
            });
            const orderItem = item.map((val) => ({ ...val, orderId: order.id }));
            await tx.orderItem.createMany({
                data: orderItem,
            });
            return order;
        });
    }
    async update(id, order) {
        return this.prisma.order.update({ where: { id }, data: order });
    }
    async findOneForCheckout(id) {
        return this.prisma.order.findFirst({
            where: { id },
            select: {
                total: true,
                shippingMethod: true,
                subtotal: true,
                id: true,
                orderItem: {
                    select: {
                        product: {
                            select: {
                                id: true,
                                image: true,
                                color: true,
                                price: true,
                                productGroup: {
                                    select: {
                                        title: true,
                                    },
                                },
                            },
                        },
                        quantity: true,
                    },
                },
            },
        });
    }
    async findOneForComplete(id) {
        return this.prisma.order.findFirst({
            where: { id },
            select: {
                total: true,
                shippingMethod: true,
                id: true,
                createdAt: true,
                orderItem: {
                    select: {
                        product: {
                            select: {
                                image: true
                            },
                        },
                        quantity: true,
                    },
                },
            },
        });
    }
    async findManyForUser(id) {
        return this.prisma.order.findMany({ where: { userId: id } });
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderRepository);
//# sourceMappingURL=order.repository.js.map