import * as ts from 'typescript';

const createCompilerHost = (compilerOptions) => {
  const host = ts.createCompilerHost(compilerOptions);
  return host;
};

export default createCompilerHost;
