import * as path from 'path';
import * as ts from 'typescript';
import { createSourceFile, bindSourceFile } from './source-file';
import { compilerOptions } from './constant';

const hackResolveAlias = (symbol: ts.Symbol, links, target: ts.Symbol | undefined, tsResolveAlias) => {
  if (
    symbol.flags & ts.SymbolFlags.Alias  // 是一个符号别名
    && target == null  // 且没找到别名
  ) {
    // 认为这是在对导入的符号建立 symbolLinks 时没有成功
    // 手动加载一个外部文件，并进行语义分析

    const libFilePath = path.join(__dirname, '../../debug/lib.ts');

    // 设置它是一个外部模块，语义分析时才会计算 sourceFile.symbol
    const isExternalModule = true;
    const sourceFile = createSourceFile(libFilePath, isExternalModule);

    // 语义分析之后，sourceFile.symbol 才有值
    bindSourceFile(sourceFile, compilerOptions);

    // 找到这个模块 default 导出的符号
    const { symbol: moduleSymbol } = sourceFile as any;
    const exportSymbol = moduleSymbol.exports.get(ts.InternalSymbolName.Default);

    // 递归解析，找到 default 导出的符号之源头在哪里
    const target = tsResolveAlias(exportSymbol);

    // 手动建立 symbolLinks
    links.target = target;
  }
};

export default hackResolveAlias;
