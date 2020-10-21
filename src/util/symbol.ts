import * as ts from 'typescript';
import getNodeAtPosition from './node';

const anyTs = ts as any;

const getSymbolAtPosition = (program, sourceFile, position) => {
  const checker = program.getTypeChecker();
  const node = getNodeAtPosition(sourceFile, position);
  const symbol = checker.getSymbolAtLocation(node);;

  return symbol;
};

export default getSymbolAtPosition;
