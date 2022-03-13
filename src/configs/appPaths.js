/* eslint semi: ["error", "always"] */

const paths = {
  index: {
    source: '/',
    destination: '/',
  },
};

const api = [];

module.exports.appPaths = [...api, ...Object.values({ ...paths })];
