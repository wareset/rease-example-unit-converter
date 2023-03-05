import * as fs from 'fs'
import * as path from 'path'

import { minify as terser } from 'terser'
import { transform as sucrase } from 'sucrase'
import { transformAsync as babel } from '@babel/core'

// import css from 'rollup-plugin-css-only'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import rollupLivereload from 'rollup-plugin-livereload'

import { jsx as rease_jsx } from 'rastree'
// import { css as rease_css} from 'rastree'

const bs = fs.readFileSync(path.resolve('static/bootstrap.min.css'), 'utf8')

const production = !process.env.ROLLUP_WATCH

// eslint-disable-next-line func-style
// function serve() {
//   let server

//   // eslint-disable-next-line func-style
//   function toExit() {
//     if (server) server.kill(0)
//   }

//   return {
//     writeBundle() {
//       if (server) return
//       server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
//         stdio: ['ignore', 'inherit', 'inherit'],
//         shell: true
//       })

//       process.on('SIGTERM', toExit)
//       process.on('exit', toExit)
//     }
//   }
// }

export default {
  input : 'src/index.tsx',
  output: {
    sourcemap: false,
    format   : 'iife',
    name     : 'app',
    file     : 'app/unit-converter.html'
  },
  plugins: [
    {
      name: 'svg-custom',
      transform(code, id) {
        // if (id in temp) return temp[id]
        if (id.endsWith('.svg')) {
          return `export default ${JSON.stringify(encodeURIComponent(code.trim()))}`
        }
        return null
      }
    },
    {
      name: 'rease-custom',
      transform(code, id) {
        if (/\.[tj]sx?$/.test(id)) {
          const useJSX = /x$/.test(id)
          code = rease_jsx(code, { useJSX })
          // code = rease_css(code, { useJSX, salt: id })
          return code
        }
        return null
      }
    },
    {
      name: 'sucrase-custom',
      transform(code, id) {
        if (/\.[mc]?tsx?$/.test(id)) {
          try {
            code = sucrase(code, { transforms: ['typescript'] }).code
          } catch (e) {
            console.error('sucrase-custom')
            console.error(e)
          }
          return { code }
        }
        return null
      }
    },
    resolve({
      browser   : true,
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    // !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && rollupLivereload('app'),

    {
      async transform(code) {
        if (production) {
          try {
            code = (await babel(code, {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    corejs     : 3,
                    loose      : true,
                    bugfixes   : true,
                    modules    : false,
                    useBuiltIns: 'entry', // 'entry', 'usage'
                    targets    : '> 1%, not dead, ie 11',
                  }
                ]
              ],
              plugins: ['@babel/plugin-transform-runtime']
            })).code
          } catch (e) {
            console.error('babel-custom')
            console.error(e)
          }
        }
        return { code }
      },
      async renderChunk(code) {
        if (production) {
          try {
            code = (await terser(code, {
              safari10       : true,
              mangle         : true,
              module         : true,
              toplevel       : true,
              compress       : true,
              keep_classnames: false
            })).code
          } catch (e) {
            console.error('terser-custom')
            console.error(e)
          }
        }

        // return '/* eslint-disable */\n' + code
        return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset='utf-8'>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="theme-color" content="#333333">

  <title>unit-converter</title>

  <style>
  ${bs}
  </style>
</head>

<body style="touch-action:pan-down;">
<script>
/* eslint-disable */
${code}
</script>
</body>

</html>
`
      }
    }
  ],
  watch: { clearScreen: false }
}
