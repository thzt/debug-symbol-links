import * as path from 'path';

import { compilerOptions } from './util/constant';
import createProgram from './util/program';
import { bindSourceFile, createSourceFile } from './util/source-file';
import getSymbolAtPosition from './util/symbol';
import getImportPropertyName from './util/import';
import getExportSymbol from './util/export';
import getTypeOfNode from './util/type';

const main = async () => {
  // 解析 index.ts
  const sourceFilePath = path.join(__dirname, '../debug/completion/index.ts');
  const rootFiles = [sourceFilePath];
  const program = createProgram(rootFiles, compilerOptions);
  const sourceFile = program.getSourceFile(sourceFilePath);
  bindSourceFile(sourceFile, compilerOptions);

  // 获取导入的符号 a
  const position = 32;  // a 的位置
  const importSymbol = getSymbolAtPosition(program, sourceFile, position);
  const importName = getImportPropertyName(importSymbol);  // 'a'

  // 手动加载 lib 库
  const libSourceFilePath = path.join(__dirname, '../debug/completion/lib.ts');
  const isExternalModule = true;
  const libSourceFile = createSourceFile(libSourceFilePath, isExternalModule);
  bindSourceFile(libSourceFile, compilerOptions);

  // 获取 lib 库导出的名为 'a' 的符号
  const exportSymbol = getExportSymbol(libSourceFile, importName);

  // 获取符号 a 的属性列表，作为补全提示
  const type = getTypeOfNode(program, exportSymbol.declarations[0]);
  const completionSymbols = type.getApparentProperties();

  const completions = completionSymbols.map(({ name }) => name);
  debugger
};

main();
