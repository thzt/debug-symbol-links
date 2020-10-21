import * as path from 'path';

import { compilerOptions } from './util/constant';
import createProgram from './util/program';
import { bindSourceFile } from './util/source-file';
import getNodeAtPosition from './util/node';

const main = async () => {
  const sourceFilePath = path.join(__dirname, '../debug/type/index.ts');
  const rootFiles = [sourceFilePath];
  const program = createProgram(rootFiles, compilerOptions);
  const sourceFile = program.getSourceFile(sourceFilePath);
  bindSourceFile(sourceFile, compilerOptions);

  const position = 84;  // res 的位置
  const node = getNodeAtPosition(sourceFile, position);
  const checker = program.getTypeChecker();

  debugger
  const type = checker.getTypeAtLocation(node);
  const completions = type.getApparentProperties().map(({ name }) => name);
  debugger;
};

main();
