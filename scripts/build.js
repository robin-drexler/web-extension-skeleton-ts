#!/usr/bin/env node

const path = require("path");
const { entrypoints, bundleOptions } = require("./config");
const Bundler = require("parcel-bundler");

(async function () {
  const bundler = new Bundler(entrypoints, { ...bundleOptions, watch: false });

  await bundler.bundle();
})();
