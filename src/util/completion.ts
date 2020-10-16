import * as ts from 'typescript';

const anyTs = ts as any;

const getCompletionsAtPosition = (host, program, sourceFile, position) => {
  const triggerCharacter = null;
  const log = (message: string) => { };
  const preferences: ts.UserPreferences = {};

  const completions = anyTs.Completions.getCompletionsAtPosition(host, program, log, sourceFile, position, preferences, triggerCharacter);
  return completions;
};

export default getCompletionsAtPosition;
