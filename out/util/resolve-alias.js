"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const ts = require("typescript");
const source_file_1 = require("./source-file");
const constant_1 = require("./constant");
const hackResolveAlias = (symbol, links, target, tsResolveAlias) => {
    if (symbol.flags & ts.SymbolFlags.Alias // 是一个符号别名
        && target == null // 且没找到别名
    ) {
        // 认为这是在对导入的符号建立 symbolLinks 时没有成功
        // 手动加载一个外部文件，并进行语义分析
        const libFilePath = path.join(__dirname, '../../debug/lib.ts');
        // 设置它是一个外部模块，语义分析时才会计算 sourceFile.symbol
        const isExternalModule = true;
        const sourceFile = source_file_1.createSourceFile(libFilePath, isExternalModule);
        // 语义分析之后，sourceFile.symbol 才有值
        source_file_1.bindSourceFile(sourceFile, constant_1.compilerOptions);
        // 找到这个模块 default 导出的符号
        const { symbol: moduleSymbol } = sourceFile;
        const exportSymbol = moduleSymbol.exports.get(ts.InternalSymbolName.Default);
        // 递归解析，找到 default 导出的符号之源头在哪里
        const target = tsResolveAlias(exportSymbol);
        // 手动建立 symbolLinks
        links.target = target;
    }
};
exports.default = hackResolveAlias;
//# sourceMappingURL=resolve-alias.js.map