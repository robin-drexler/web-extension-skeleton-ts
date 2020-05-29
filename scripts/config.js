const path = require("path");

const background = path.join(
  __dirname,
  "..",
  "src",
  "background",
  "background.ts"
);
const content = path.join(__dirname, "..", "src", "content", "content.ts");
const popup = path.join(__dirname, "..", "src", "popup", "popup.html");

module.exports = {
  entrypoints: [background, content, popup],
  bundleOptions: {
    outDir: path.join(__dirname, "..", "extension", "dist"),
    publicUrl: "/dist",
    sourceMaps: false,
    hmr: false,
  },
};
