const jsEmbedder = require('js-embedder');
const config = require('./config');

// hack TypeScript 的 resolveAlias 方法
jsEmbedder(config);
