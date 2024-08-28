import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import copy from "rollup-plugin-copy";

export default {
  input: "./index.ts",
  output: [
    {
      dir: "build",
      format: "esm",
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
      // CSS를 빌드 폴더에 저장
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
    copy({
      targets: [
        { src: "build/build.css", dest: "build" }, // 복사 설정
      ],
      verbose: true,
    }),
  ],
};
