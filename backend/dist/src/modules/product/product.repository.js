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
exports.ProductRepository = void 0;
const prisma_service_1 = require("../../database/prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findManyShopCards(params) {
        return await this.prisma.product.findMany({
            skip: params.skip,
            take: params.take,
            where: params.where,
            orderBy: params.orderBy ? [params.orderBy] : undefined,
            select: {
                id: true,
                price: true,
                rating: true,
                sale: true,
                isNew: true,
                image: true,
                productGroup: { select: { title: true } },
            },
        });
    }
    async findManyPriseCards(ids) {
        return await this.prisma.product.findMany({
            select: {
                id: true,
                price: true,
            },
            where: {
                id: {
                    in: ids,
                },
            },
        });
    }
    async findManyGroup() {
        return await this.prisma.productGroup.findMany({
            select: {
                id: true,
                title: true,
            },
        });
    }
    async findManyCartCards(ids) {
        return await this.prisma.product.findMany({
            select: {
                id: true,
                price: true,
                color: true,
                image: true,
                sale: true,
                productGroup: {
                    select: {
                        title: true,
                    },
                },
            },
            where: {
                id: {
                    in: ids,
                },
            },
        });
    }
    async findManyWishlistCards(ids) {
        return await this.prisma.product.findMany({
            select: {
                id: true,
                color: true,
                price: true,
                image: true,
                productGroup: {
                    select: {
                        title: true,
                    },
                },
            },
            where: {
                id: {
                    in: ids,
                },
            },
        });
    }
    async createProductGroup(title) {
        return this.prisma.productGroup.create({
            data: { title },
        });
    }
    async createProduct(data) {
        return this.prisma.product.create({ data });
    }
    async updateProduct(id, data) {
        return this.prisma.product.update({
            where: { id },
            data,
        });
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepository);
//# sourceMappingURL=product.repository.js.map