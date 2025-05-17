import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [compress()],
    vite: {
        plugins: [tailwindcss()],
    },
});
