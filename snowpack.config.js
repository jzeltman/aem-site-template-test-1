// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // mount: {},
  plugins: [
    "@snowpack/plugin-postcss"
  ],
  // installOptions: {},
  devOptions: {
    "port": 3000,
  },
  buildOptions: {
    "out": "dist"
  },
  proxy: {
    "/": {
      target: "http://localhost:7000"
    },
    "/content/**/_default": "/dist"
  }
};
