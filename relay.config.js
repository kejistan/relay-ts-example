module.exports = {
  src: '.',
  schema: 'schema.graphql',
  exclude: ['**/node_modules/**', '**/__generated__/**'],
  language: 'javascript',
  typegenPhase: 'Compat',
  eagerEsModules: true,
};
  