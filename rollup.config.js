import path from "path";
import { fileURLToPath } from "url";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// ESM에서 __dirname을 사용하기 위한 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: "./index.ts",
  treeshake: true,
  output: [
    {
      dir: "build/esm",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      dir: "build/cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: path.resolve(__dirname, "build/build.css"), // build 폴더에 build.css 파일로 저장
      modules: true,
      use: ["sass"],
      plugins: [
        tailwindcss(),
        autoprefixer(),
        postcssUrl({
          url: "inline",
        }),
      ],
    }),
  ],
};
