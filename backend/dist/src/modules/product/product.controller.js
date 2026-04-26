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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const find_many_shop_dto_1 = require("./dto/find-many-shop.dto");
const find_many_search_dto_1 = require("./dto/find-many-search.dto");
const find_many_bag_dto_1 = require("./dto/find-many-bag.dto");
const find_many_wishlist_dto_1 = require("./dto/find-many-wishlist.dto");
const platform_express_1 = require("@nestjs/platform-express");
const create_product_dto_1 = require("./dto/create-product.dto");
let ProductController = class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    createProduct(images, body) {
        console.log(images);
        if (!images || !Array.isArray(images))
            throw new common_1.BadRequestException("Images incorect");
        return this.productService.create(body, images);
    }
    findManyShop(query) {
        const { take, page = 1, ...rest } = query;
        const skip = (page - 1) * take;
        return this.productService.findManyShop({ skip, take: take, ...rest });
    }
    findManySearch(query) {
        return this.productService.findManySearch(query.world);
    }
    findManyCart(query) {
        return this.productService.findManyCart(query.ids);
    }
    findManyWishlist(query) {
        return this.productService.findManyCart(query.ids);
    }
    findManyGroup() {
        return this.productService.findManyGroup();
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)('cards'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_shop_dto_1.FindManyShopDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findManyShop", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_search_dto_1.FindManySearchDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findManySearch", null);
__decorate([
    (0, common_1.Get)('bag'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_bag_dto_1.FindManyBagDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findManyCart", null);
__decorate([
    (0, common_1.Get)('wishlist'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_wishlist_dto_1.FindManyWishlistDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findManyWishlist", null);
__decorate([
    (0, common_1.Get)('group'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findManyGroup", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map