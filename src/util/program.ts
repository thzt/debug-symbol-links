import * as ts from 'typescript';

const createProgram = (rootFiles: string[], compilerOptions: ts.CompilerOptions): ts.Program => {
  const program = ts.createProgram({
    rootNames: rootFiles,
    options: compilerOptions,
  });
  return program;
};

export default createProgram;
