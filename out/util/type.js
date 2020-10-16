"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTypeOfNode = (program, node) => {
    const checker = program.getTypeChecker();
    const type = checker.getTypeAtLocation(node);
    return type;
};
exports.default = getTypeOfNode;
//# sourceMappingURL=type.js.map