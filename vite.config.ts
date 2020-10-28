import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  minify: 'esbuild',
  assetsDir: 'static',
  // outDir: 'assets',
  // base: 'basename',
  // entry: 'home.html'
}

export default config
