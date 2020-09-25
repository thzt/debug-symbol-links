"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const createProgram = (rootFiles, compilerOptions) => {
    const program = ts.createProgram({
        rootNames: rootFiles,
        options: compilerOptions,
    });
    return program;
};
exports.default = createProgram;
//# sourceMappingURL=program.js.map