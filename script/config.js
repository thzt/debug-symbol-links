const path = require('path');

const config = [
  // 在 node_modules/typescript/lib/typescript.js#L35185 之前插入 hack 代码
  {
    file: path.join(__dirname, '../node_modules/typescript/lib/typescript.js'),
    embeds: [
      {
        insert: 35185,
        code: `ts._hackResolveAlias && ts._hackResolveAlias(symbol, links, target, resolveAlias);`,
      },
    ],
  },
];

module.exports = config;
