"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getExportSymbol = (sourceFile, name) => {
    const { symbol: moduleSymbol } = sourceFile;
    const exportSymbol = moduleSymbol.exports.get(name);
    // name 还可以换成以下两种值
    // ts.InternalSymbolName.Default      // default 默认导出
    // ts.InternalSymbolName.ExportEquals // export= 导出
    return exportSymbol;
};
exports.default = getExportSymbol;
//# sourceMappingURL=export.js.map