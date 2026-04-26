"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const worker = new bullmq_1.Worker('email', async (job) => {
}, {
    connection: {
        host: 'localhost',
        port: 4200,
    },
});
//# sourceMappingURL=email.worker.js.map