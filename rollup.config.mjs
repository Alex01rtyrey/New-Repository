import styles from 'rollup-plugin-styles';
import image from '@rollup/plugin-image';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: 'index.js', 
  output: {
    file: 'dist/bundle.js',
    format: 'iife', 
    sourcemap: true,
  },
  plugins: [
    styles({
      mode: 'inject',
    }),
    image(),
    babel({ babelHelpers: 'bundled' }),
    serve('dist'),
    livereload('dist')
  ]
};