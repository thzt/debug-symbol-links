"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const anyTs = ts;
const getSymbolAtPosition = (program, sourceFile, position) => {
    const checker = program.getTypeChecker();
    const node = anyTs.getTouchingPropertyName(sourceFile, position);
    const symbol = checker.getSymbolAtLocation(node);
    ;
    return symbol;
};
exports.default = getSymbolAtPosition;
//# sourceMappingURL=symbol.js.map