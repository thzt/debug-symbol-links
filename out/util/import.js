"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const anyTs = ts;
const getImportPropertyName = importSymbol => {
    const importNode = anyTs.find(importSymbol.declarations, anyTs.isAliasSymbolDeclaration);
    const { propertyName: { text: name, } } = importNode;
    return name;
};
exports.default = getImportPropertyName;
//# sourceMappingURL=import.js.map