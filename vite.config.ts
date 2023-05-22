/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
const build = {
    lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'wrapperino',
        fileName: 'wrapperino',
    },
};

const plugins = [dts()];

const test = {
    // ...
}
export default defineConfig({ build, plugins, test });