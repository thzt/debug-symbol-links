"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const anyTs = ts;
const hover = (program, sourceFile, position) => {
    const checker = program.getTypeChecker();
    // 获取该位置处的 AST node
    const node = anyTs.getTouchingPropertyName(sourceFile, position);
    // 获取 node 相关的 symbol
    const symbol = checker.getSymbolAtLocation(node);
    // LSP hover 的内部实现
    const { displayParts } = anyTs.SymbolDisplay.getSymbolDisplayPartsDocumentationAndSymbolKind(checker, symbol, sourceFile, anyTs.getContainerNode(node), node);
    // 会返回一个字符串，也可能是空串
    return displayParts.map(({ text }) => text).join('');
};
exports.default = hover;
//# sourceMappingURL=hover.js.map