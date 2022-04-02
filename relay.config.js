module.exports = {
  src: '.',
  schema: 'schema.graphql',
  exclude: ['**/node_modules/**', '**/__generated__/**'],
  language: 'typescript',
  typegenPhase: 'Compat',
  eagerEsModules: true,
};
  