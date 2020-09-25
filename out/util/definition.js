"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const anyTs = ts;
// LSP 跳转到定义的内部实现
const goToDefinition = (program, sourceFile, position) => {
    const { definitions } = anyTs.GoToDefinition.getDefinitionAndBoundSpan(program, sourceFile, position);
    return definitions;
};
exports.default = goToDefinition;
//# sourceMappingURL=definition.js.map