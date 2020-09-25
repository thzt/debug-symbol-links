"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const fileEncoding = 'utf-8';
exports.fileEncoding = fileEncoding;
const languageVersion = ts.ScriptTarget.ESNext;
exports.languageVersion = languageVersion;
const compilerOptions = {
    // 决定了要加载哪些内置的 lib 文件
    // https://github.com/microsoft/TypeScript/blob/v3.7.3/src/compiler/utilities.ts#L4877
    target: languageVersion,
    // 决定了 TypeScript 解析依赖的方式
    // node_modules 中的 .d.ts 文件，ModuleResolutionKind.NodeJs 才可以解析
    // https://github.com/microsoft/TypeScript/blob/v3.7.3/src/compiler/moduleNameResolver.ts#L658
    // https://github.com/microsoft/TypeScript/blob/v3.7.3/src/compiler/moduleNameResolver.ts#L670
    module: ts.ModuleKind.CommonJS,
};
exports.compilerOptions = compilerOptions;
//# sourceMappingURL=constant.js.map