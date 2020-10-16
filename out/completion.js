"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const constant_1 = require("./util/constant");
const program_1 = require("./util/program");
const source_file_1 = require("./util/source-file");
const symbol_1 = require("./util/symbol");
const import_1 = require("./util/import");
const export_1 = require("./util/export");
const type_1 = require("./util/type");
const main = async () => {
    // 解析 index.ts
    const sourceFilePath = path.join(__dirname, '../debug/completion/index.ts');
    const rootFiles = [sourceFilePath];
    const program = program_1.default(rootFiles, constant_1.compilerOptions);
    const sourceFile = program.getSourceFile(sourceFilePath);
    source_file_1.bindSourceFile(sourceFile, constant_1.compilerOptions);
    // 获取导入的符号 a
    const position = 32; // a 的位置
    const importSymbol = symbol_1.default(program, sourceFile, position);
    const importName = import_1.default(importSymbol); // 'a'
    // 手动加载 lib 库
    const libSourceFilePath = path.join(__dirname, '../debug/completion/lib.ts');
    const isExternalModule = true;
    const libSourceFile = source_file_1.createSourceFile(libSourceFilePath, isExternalModule);
    source_file_1.bindSourceFile(libSourceFile, constant_1.compilerOptions);
    // 获取 lib 库导出的名为 'a' 的符号
    const exportSymbol = export_1.default(libSourceFile, importName);
    // 获取符号 a 的属性列表，作为补全提示
    const type = type_1.default(program, exportSymbol.declarations[0]);
    const completionSymbols = type.getApparentProperties();
    const completions = completionSymbols.map(({ name }) => name);
    debugger;
};
main();
//# sourceMappingURL=completion.js.map