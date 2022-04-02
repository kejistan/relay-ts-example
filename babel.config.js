module.exports = (api) => {
  api.cache.never();

  return {
    presets: [
      ['@babel/preset-env'],
      '@babel/preset-typescript',
    ],
    plugins: ['relay'],
  };
};