### debug-symbol-links

#### 1. 安装依赖 & 构建
```
$ npm install
$ npm run watch
```

#### 2. Debug 查看效果

+ Mock GoToDefinition: 模拟 VSCode 通过 LSP 调用 tsserver 查找符号定义的过程
+ Hack GotoDefinition: 手动建立 symbolLinks，实现到任意文件中去查找定义
