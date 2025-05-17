import tailwind from "@astrojs/tailwind";
import compress from "@playform/compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), compress()],
});
