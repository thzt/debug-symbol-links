"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const ts = require("typescript");
const constant_1 = require("./constant");
const anyTs = ts;
// 创建 AST
const createSourceFile = (filePath, isExternalModule) => {
    const sourceText = fs.readFileSync(filePath, constant_1.fileEncoding);
    const setParentNodes = false;
    const scriptKind = isExternalModule ? ts.ScriptKind.External : ts.ScriptKind.TS;
    const sourceFile = ts.createSourceFile(filePath, sourceText, constant_1.languageVersion, setParentNodes, 
    // 语义分析时要判断 sourceFile 是否 external module
    // 如果是 external module，才会计算模块的导出符号（设置 sourceFile.symbol），否则没有值
    // https://github.com/microsoft/TypeScript/blob/v3.7.3/src/compiler/binder.ts#L2560
    scriptKind);
    return sourceFile;
};
exports.createSourceFile = createSourceFile;
// 对 AST 进行语义分析，计算 symbol
const bindSourceFile = (sourceFile, compilerOptions) => {
    anyTs.bindSourceFile(sourceFile, compilerOptions);
};
exports.bindSourceFile = bindSourceFile;
//# sourceMappingURL=source-file.js.map