import * as ts from 'typescript';

const anyTs = ts as any;

const getImportPropertyName = importSymbol => {
  const importNode = anyTs.find(importSymbol.declarations, anyTs.isAliasSymbolDeclaration);
  const {
    propertyName: {
      text: name,
    }
  } = importNode;

  return name;
};

export default getImportPropertyName;
