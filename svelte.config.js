import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const BUILD_DIRECTORY = "docs";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            assets: BUILD_DIRECTORY,
            pages: BUILD_DIRECTORY,
            precompress: true,
        }),
        prerender: {
            default: true,
        },
    },
};

export default config;
