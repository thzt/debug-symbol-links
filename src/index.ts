import * as path from 'path';

import { compilerOptions } from './util/constant';
import createProgram from './util/program';
import goToDefinition from './util/definition';
import { bindSourceFile } from './util/source-file';
import hover from './util/hover';

const main = async () => {
  const sourceFilePath = path.join(__dirname, '../debug/index.ts');
  const position = 23;  // x 的位置

  const rootFiles = [sourceFilePath];
  const program = createProgram(rootFiles, compilerOptions);
  const sourceFile = program.getSourceFile(sourceFilePath);
  bindSourceFile(sourceFile, compilerOptions);

  debugger
  const definitions = goToDefinition(program, sourceFile, position);
  debugger

  debugger
  const message = hover(program, sourceFile, position);
  debugger
};

main();
