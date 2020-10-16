"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const createCompilerHost = (compilerOptions) => {
    const host = ts.createCompilerHost(compilerOptions);
    return host;
};
exports.default = createCompilerHost;
//# sourceMappingURL=host.js.map