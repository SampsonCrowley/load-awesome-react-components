import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';


export default {
  input: './src/index.js',

  plugins: [
    postcss({
      modules: false
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    resolve(),
    commonjs()
  ],

  external: ['react', 'react-dom'],

  output: [
    {
      file: './build/rrpm.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      name: 'LoadAwesomeReactComponents',
      sourcemap: true
    },
    {
      file: 'build/rrpm.module.js',
      format: 'es',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      name: 'LoadAwesomeReactComponents',
      sourcemap: true
    },
  ]
};
