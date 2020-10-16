import * as ts from 'typescript';

const anyTs = ts as any;

const getSymbolAtPosition = (program, sourceFile, position) => {
  const checker = program.getTypeChecker();
  const node = anyTs.getTouchingPropertyName(sourceFile, position);
  const symbol = checker.getSymbolAtLocation(node);;

  return symbol;
};

export default getSymbolAtPosition;
