/* eslint-disable global-require */
// const browserify = require('@cypress/browserify-preprocessor');

// const options = {
//   ...browserify.defaultOptions,
//   typescript: require.resolve('typescript'),
// };

module.exports = (on, config) => {
  // require('@cypress/code-coverage/task')(on, config);
  // on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
  // on('file:preprocessor', browserify(options));
  // return config;
  require('@cypress/code-coverage/task')(on, config);

  // add other tasks to be registered here

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
