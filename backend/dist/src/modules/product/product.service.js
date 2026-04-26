"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("./product.repository");
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const sorts_enum_1 = require("../../common/enums/sorts.enum");
const map_sort_to_prisma_1 = require("../../common/utils/map-sort-to-prisma");
const directory_config_1 = require("../../configs/directory.config");
const RAW_IMAGE_BASE_URL = process.env.IMAGE_BASE_URL ?? 'https://localhost:4200';
const IMAGE_BASE_URL = RAW_IMAGE_BASE_URL.endsWith('/')
    ? RAW_IMAGE_BASE_URL.slice(0, -1)
    : RAW_IMAGE_BASE_URL;
const buildImageUrl = (path) => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    return path[0] === '/'
        ? `${IMAGE_BASE_URL}${path}`
        : `${IMAGE_BASE_URL}/${path}`;
};
let ProductService = class ProductService {
    productRepo;
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async findManyShop(params) {
        const { skip, take, maxPrice, minPrice = 0, category = 'ALL', sort = sorts_enum_1.Sorts.newest, groupId, } = params;
        const where = {
            price: { gte: minPrice, ...(maxPrice ? { lte: maxPrice } : {}) },
            ...(groupId ? { productGroupId: { in: groupId } } : {}),
            ...(category !== 'ALL' ? { category: { hasSome: [category] } } : {}),
        };
        const orderBy = (0, map_sort_to_prisma_1.mapSortToPrisma)(sort);
        const products = await this.productRepo.findManyShopCards({
            skip,
            take,
            where,
            orderBy,
        });
        console.log(products);
        return products.map((p) => ({
            ...p,
            title: p.productGroup.title,
            image: buildImageUrl(p.image[0]),
        }));
    }
    async findManySearch(query) {
        const groups = await this.productRepo.findManyGroup();
        const words = query.trim().toLowerCase().split(/\s+/).slice(0, 2);
        return groups.filter((val) => words.every((word) => val.title.toLowerCase().includes(word)));
    }
    async findManyCart(ids) {
        const data = await this.productRepo.findManyCartCards(ids);
        return data.map((val) => ({
            ...val,
            title: val.productGroup.title,
            image: buildImageUrl(val.image[0]),
        }));
    }
    async findManyWishlist(ids) {
        const data = await this.productRepo.findManyWishlistCards(ids);
        return data.map((val) => ({
            ...val,
            title: val.productGroup.title,
            image: buildImageUrl(val.image[0]),
        }));
    }
    async create(data, files) {
        if (!files || files.length == 0) {
            throw new common_1.BadRequestException("Files don't found");
        }
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
        for (const file of files) {
            if (!allowedMimeTypes.includes(file.mimetype)) {
                throw new common_1.BadRequestException('Incorrect image format');
            }
        }
        const { title, productGroupId, ...rest } = data;
        let productGroupIdFinal = productGroupId;
        if (productGroupId == -1) {
            const group = await this.productRepo.createProductGroup(title);
            productGroupIdFinal = group.id;
        }
        const productInput = {
            ...rest,
            image: [],
            rating: 5,
            reviews: 0,
            productGroup: { connect: { id: productGroupIdFinal } },
        };
        const product = await this.productRepo.createProduct(productInput);
        let imagePath = [];
        for (const file of files) {
            const uploadDir = path.join(process.cwd(), directory_config_1.DIRECTORY.PRODUCT, `${product.id}`);
            await fs.mkdir(uploadDir, { recursive: true });
            const extension = path.extname(file.originalname).toLowerCase();
            const safeExtension = extension.replace(/[^a-z0-9.]/gi, '');
            const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}${safeExtension}`;
            const filePath = path.join(uploadDir, fileName);
            await fs.writeFile(filePath, file.buffer);
            imagePath.push(`${directory_config_1.DIRECTORY.PRODUCT}/${product.id}/${fileName}`);
        }
        return await this.productRepo.updateProduct(product.id, {
            image: imagePath,
        });
    }
    async findManyGroup() {
        return await this.productRepo.findManyGroup();
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
//# sourceMappingURL=product.service.js.map