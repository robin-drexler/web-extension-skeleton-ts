#!/usr/bin/env node

const path = require("path");
const { entrypoints, bundleOptions } = require("./config");
const Bundler = require("parcel-bundler");
const { spawn } = require("child_process");

(async function () {
  const bundler = new Bundler(entrypoints, bundleOptions);

  bundler.once("bundled", () => {
    const child = spawn("yarn", ["launch-dev-browser"], {
      cwd: path.join(__dirname, ".."),
      env: process.env,
      stdio: "inherit",
    });

    child.on("exit", (code) => {
      process.exit(code);
    });
  });

  await bundler.bundle();
})();
