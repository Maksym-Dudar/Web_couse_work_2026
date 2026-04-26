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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("./order.repository");
const client_1 = require("@prisma/client");
const product_repository_1 = require("../product/product.repository");
let OrderService = class OrderService {
    orderRepo;
    productRepo;
    constructor(orderRepo, productRepo) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }
    async markAsPaid(id) {
        return this.orderRepo.update(id, { status: client_1.OrderStatus.PENDING });
    }
    async markAsFailed(id) {
        return this.orderRepo.update(id, { status: client_1.OrderStatus.FAILED });
    }
    async create(total, subtotal, userId, shippingMethod, items) {
        const productIds = items.map((item) => item.productId);
        const products = await this.productRepo.findManyPriseCards(productIds);
        const productMap = new Map(products.map((p) => [p.id, p]));
        let realTotal = 0;
        for (const item of items) {
            const product = productMap.get(item.productId);
            if (!product) {
                throw new common_1.BadRequestException(`Product with id ${item.productId} not found`);
            }
            realTotal += product.price * item.quantity;
        }
        if (total !== realTotal) {
            throw new common_1.BadRequestException('Incorrect total count');
        }
        return this.orderRepo.create(client_1.OrderStatus.CONFIRMED, realTotal, subtotal, userId, shippingMethod, items);
    }
    async find(id) {
        const data = await this.orderRepo.findOneForCheckout(id);
        if (!data) {
            throw new common_1.BadRequestException("Order not found");
        }
        ;
        const orderItem = data.orderItem?.map(({ product, quantity }) => ({
            id: product.id,
            color: product.color,
            title: product.productGroup?.title ?? null,
            price: product.price,
            quantity,
            image: product.image?.[1] ?? product.image?.[0] ?? null,
        }));
        return {
            id: data.id,
            total: data.total,
            subtotal: data.subtotal,
            shippingMethod: data.shippingMethod,
            orderItem,
        };
    }
    async findAllForUser(id) {
        return this.orderRepo.findManyForUser(id);
    }
    async findComplete(id) {
        const data = await this.orderRepo.findOneForComplete(id);
        if (!data) {
            throw new common_1.BadRequestException('Order not found');
        }
        const orderItem = data.orderItem?.map(({ product, quantity }) => ({
            quantity,
            image: product.image?.[1] ?? product.image?.[0] ?? null,
        }));
        return {
            id: data.id,
            total: data.total,
            shippingMethod: data.shippingMethod,
            createdAt: data.createdAt,
            orderItem,
        };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository,
        product_repository_1.ProductRepository])
], OrderService);
//# sourceMappingURL=order.service.js.map