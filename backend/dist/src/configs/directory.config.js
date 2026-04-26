"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIRECTORY = void 0;
class DirectoryConfig {
    PUBLIC = '/public';
    USER = `${this.PUBLIC}/user`;
    AVATAR = `${this.USER}/avatar`;
    PRODUCT = `${this.PUBLIC}/product`;
}
exports.DIRECTORY = new DirectoryConfig();
//# sourceMappingURL=directory.config.js.map