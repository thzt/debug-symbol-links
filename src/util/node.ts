import * as ts from 'typescript';

const anyTs = ts as any;

const getNodeAtPosition = (sourceFile, position) => {
  const node = anyTs.getTouchingPropertyName(sourceFile, position);
  return node;
};

export default getNodeAtPosition;
