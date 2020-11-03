/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/bundle',
    hooks: '/hooks',
    components: '/components',
    services: '/services',
    utils: '/utils',
    '../types': '/types',
  },
  plugins: ['@snowpack/plugin-typescript'],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    open: 'none',
    /* ... */
  },
  buildOptions: {
    baseUrl: '../',
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
