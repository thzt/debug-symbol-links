import * as ts from 'typescript';

const anyTs = ts as any;

// LSP 跳转到定义的内部实现
const goToDefinition = (program: ts.Program, sourceFile: ts.SourceFile, position: number): ts.DefinitionInfoAndBoundSpan => {
  const { definitions } = anyTs.GoToDefinition.getDefinitionAndBoundSpan(program, sourceFile, position);
  return definitions;
};

export default goToDefinition;
