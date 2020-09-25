import * as path from 'path';
import * as ts from 'typescript';

import { compilerOptions } from './util/constant';
import createProgram from './util/program';
import goToDefinition from './util/definition';
import { bindSourceFile } from './util/source-file';
import hackResolveAlias from './util/resolve-alias';

const anyTs = ts as any;

// 对 resolveAlias 进行 hack
anyTs._hackResolveAlias = hackResolveAlias;

const main = async () => {
  const sourceFilePath = path.join(__dirname, '../debug/hack.ts');
  const position = 28;  // 查看 x 的定义

  const rootFiles = [sourceFilePath];
  const program = createProgram(rootFiles, compilerOptions);
  const sourceFile = program.getSourceFile(sourceFilePath);
  bindSourceFile(sourceFile, compilerOptions);

  debugger
  const definitions = goToDefinition(program, sourceFile, position);
  debugger
};

main();
