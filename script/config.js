const path = require('path');

const config = [
  // 在 node_modules/typescript/lib/typescript.js#L35185 之前插入 hack 代码
  {
    file: path.join(__dirname, '../node_modules/typescript/lib/typescript.js'),
    embeds: [
      {
        insert: 35185,  // 至于为什么在这里 hack？ 我猜的 😀
        code: `ts._hackResolveAlias && ts._hackResolveAlias(symbol, links, target, resolveAlias);`,
      },
    ],
  },
];

module.exports = config;
