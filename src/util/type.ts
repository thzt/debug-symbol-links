const getTypeOfNode = (program, node) => {
  const checker = program.getTypeChecker();
  const type = checker.getTypeAtLocation(node);

  return type;
};

export default getTypeOfNode;
