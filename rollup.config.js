import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    format: "cjs",
  },
  plugins: [resolve(), commonjs()],
};
