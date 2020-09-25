"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const ts = require("typescript");
const constant_1 = require("./util/constant");
const program_1 = require("./util/program");
const definition_1 = require("./util/definition");
const source_file_1 = require("./util/source-file");
const resolve_alias_1 = require("./util/resolve-alias");
const anyTs = ts;
// 对 resolveAlias 进行 hack
anyTs._hackResolveAlias = resolve_alias_1.default;
const main = async () => {
    const sourceFilePath = path.join(__dirname, '../debug/hack.ts');
    const position = 28; // 查看 x 的定义
    const rootFiles = [sourceFilePath];
    const program = program_1.default(rootFiles, constant_1.compilerOptions);
    const sourceFile = program.getSourceFile(sourceFilePath);
    source_file_1.bindSourceFile(sourceFile, constant_1.compilerOptions);
    debugger;
    const definitions = definition_1.default(program, sourceFile, position);
    debugger;
};
main();
//# sourceMappingURL=hack.js.map