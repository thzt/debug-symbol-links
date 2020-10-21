"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const anyTs = ts;
const getNodeAtPosition = (sourceFile, position) => {
    const node = anyTs.getTouchingPropertyName(sourceFile, position);
    return node;
};
exports.default = getNodeAtPosition;
//# sourceMappingURL=node.js.map