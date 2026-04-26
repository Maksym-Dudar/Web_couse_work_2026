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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const auth_service_1 = require("../auth/auth.service");
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const directory_config_1 = require("../../configs/directory.config");
let UserService = class UserService {
    userRepo;
    authService;
    constructor(userRepo, authService) {
        this.userRepo = userRepo;
        this.authService = authService;
    }
    async findUser(email) {
        const user = await this.userRepo.findByEmail(email);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        return user;
    }
    async patchUser(email, payload) {
        const user = await this.userRepo.findByEmail(email);
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        if (payload.oldPassword || payload.newPassword) {
            if (!payload.oldPassword || !payload.newPassword) {
                throw new common_1.BadRequestException('Both passwords required');
            }
            await this.authService.changePassword(user.email, payload.oldPassword, payload.newPassword);
        }
        const updateData = {};
        if (payload.firstName)
            updateData.firstName = payload.firstName;
        if (payload.lastName)
            updateData.lastName = payload.lastName;
        return await this.userRepo.update(user.email, updateData);
    }
    async updateAvatar(email, file) {
        if (!file || file.size === 0) {
            throw new common_1.BadRequestException('File not found');
        }
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException('Incorrect image format');
        }
        const uploadDir = path.join(process.cwd(), directory_config_1.DIRECTORY.AVATAR);
        await fs.mkdir(uploadDir, { recursive: true });
        const extension = path.extname(file.originalname).toLowerCase();
        const safeExtension = extension.replace(/[^a-z0-9.]/gi, '');
        const fileName = `${email}${safeExtension}`;
        const filePath = path.join(uploadDir, fileName);
        await fs.writeFile(filePath, file.buffer);
        return await this.userRepo.update(email, {
            avatar: `${directory_config_1.DIRECTORY.AVATAR}/${fileName}`,
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        auth_service_1.AuthService])
], UserService);
//# sourceMappingURL=user.service.js.map