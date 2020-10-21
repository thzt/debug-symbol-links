"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const constant_1 = require("./util/constant");
const program_1 = require("./util/program");
const source_file_1 = require("./util/source-file");
const node_1 = require("./util/node");
const main = async () => {
    const sourceFilePath = path.join(__dirname, '../debug/type/index.ts');
    const rootFiles = [sourceFilePath];
    const program = program_1.default(rootFiles, constant_1.compilerOptions);
    const sourceFile = program.getSourceFile(sourceFilePath);
    source_file_1.bindSourceFile(sourceFile, constant_1.compilerOptions);
    const position = 84; // res 的位置
    const node = node_1.default(sourceFile, position);
    const checker = program.getTypeChecker();
    debugger;
    const type = checker.getTypeAtLocation(node);
    const completions = type.getApparentProperties().map(({ name }) => name);
    debugger;
};
main();
//# sourceMappingURL=type.js.map