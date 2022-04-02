module.exports = (api) => {
  api.cache.never();

  return {
    plugins: ['relay', '@babel/plugin-transform-modules-commonjs'],
  };
};