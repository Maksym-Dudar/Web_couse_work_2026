"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailQueue = void 0;
const bullmq_1 = require("bullmq");
const common_1 = require("@nestjs/common");
let EmailQueue = class EmailQueue {
    queue = new bullmq_1.Queue('email', {
        connection: {
            host: 'localhost',
            port: 4200,
        },
    });
};
exports.EmailQueue = EmailQueue;
exports.EmailQueue = EmailQueue = __decorate([
    (0, common_1.Injectable)()
], EmailQueue);
//# sourceMappingURL=email.queue.js.map