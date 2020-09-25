import * as fs from 'fs';
import * as ts from 'typescript';
import { fileEncoding, languageVersion } from './constant';

const anyTs = ts as any;

// 创建 AST
const createSourceFile = (filePath: string, isExternalModule: boolean): ts.SourceFile => {
  const sourceText = fs.readFileSync(filePath, fileEncoding);
  const setParentNodes = false;
  const scriptKind = isExternalModule ? ts.ScriptKind.External : ts.ScriptKind.TS;

  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    languageVersion,
    setParentNodes,

    // 语义分析时要判断 sourceFile 是否 external module
    // 如果是 external module，才会计算模块的导出符号（设置 sourceFile.symbol），否则没有值
    // https://github.com/microsoft/TypeScript/blob/v3.7.3/src/compiler/binder.ts#L2560
    scriptKind,
  );

  return sourceFile;
};

// 对 AST 进行语义分析，计算 symbol
const bindSourceFile = (sourceFile: ts.SourceFile, compilerOptions: ts.CompilerOptions) => {
  anyTs.bindSourceFile(sourceFile, compilerOptions);
};

export {
  createSourceFile,
  bindSourceFile,
};
