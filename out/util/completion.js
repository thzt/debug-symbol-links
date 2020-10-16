"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const anyTs = ts;
const getCompletionsAtPosition = (host, program, sourceFile, position) => {
    const triggerCharacter = null;
    const log = (message) => { };
    const preferences = {};
    const completions = anyTs.Completions.getCompletionsAtPosition(host, program, log, sourceFile, position, preferences, triggerCharacter);
    return completions;
};
exports.default = getCompletionsAtPosition;
//# sourceMappingURL=completion.js.map