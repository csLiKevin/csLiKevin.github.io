import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-css-only";
import liveReload from "rollup-plugin-livereload";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

const development = process.env.ROLLUP_WATCH;

export default {
    input: "src/index.js",
    output: {
        dir: "public/generated",
        format: "iife",
        name: "app",
        sourcemap: false,
    },
    plugins: [
        svelte({
            // Enable run-time checks during development.
            dev: development,
            // Bundle css into a single file.
            css: (css) => css.write("public/generated/index.css"),
        }),
        resolve({
            browser: true,
            dedupe: (importee) => "svelte" || importee.startsWith("svelte/"),
        }),
        commonjs(),
        json(),
        css({ output: "public/generated/app.css" }),
        // Automatically reload the browser during development.
        development && liveReload("public/generated"),
        // Minify for production.
        !development && terser(),
    ],
    watch: {
        clearScreen: false,
    },
};
