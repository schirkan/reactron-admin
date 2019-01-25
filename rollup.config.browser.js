import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript';
import autoprefixer from 'autoprefixer';
import ts from 'typescript';

export default {
    input: './src/browser/index.ts',
    output: [{
        file: './dist/bundle.browser.js',
        format: 'system',
        sourcemap: true
    }],
    plugins: [
        typescript({ typescript: ts }),
        postcss({ plugins: [autoprefixer()] }),
        babel({ exclude: 'node_modules/**' }),
        resolve(),
        commonjs(),
    ],
    external: [
        '@schirkan/reactron-interfaces',
        'react',
        'react-dom',
        'react-router-dom',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome',
        'electron',
        'moment',
        'moment-timezone',
    ]
};