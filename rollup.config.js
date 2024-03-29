import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";

export default {
  // entry 파일 지정
  input: "./index.ts",
  output: [
    {
      // build 폴더명
      dir: "build",
      // build format, cjs로도 설정 가능
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  //   preserveModules: true,
  plugins: [
    // @description peerDependency로 설치된 라이브러리의 코드가 번들링된 결과에 포함되지 않고, import 구문으로 불러와서 사용할 수 있게 만들어주는 플러그인
    peerDepsExternal(),
    image(),
    // @description node_modules에서 third party 모듈을 사용하는 용도, js 이외의 확장자 (ts, tsx) 파일을 불러오기 위해서도 이 플러그인을 필요로 함
    resolve(),
    // @description 외부 노드 모듈이 es6 으로 변환되지 않았을 경우 es6 으로 변환하는 플러그인
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
      plugins: [
        postcssUrl({
          url: "inline",
        }),
      ],
    }),
  ],
};
