import { defineNuxtConfig } from 'nuxt3';

import { visualizer } from "rollup-plugin-visualizer";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    vite: {
        plugins: [
            visualizer(),
        ]
    },
    build: {
        transpile: [
            'moment', 'compute-scroll-into-view', '@arco-design',
        ]
    },
    components: [
        '~/components',
        { path: 'node_modules/@arco-design/web-vue/es/', prefix: 'a' }
    ],
    buildModules: [
        /**
         * @see https://cn.windicss.org/integrations/nuxt.html
         */
        'nuxt-windicss',
        /**
         * @see https://vueuse.org/guide/#installation
         */
        '@vueuse/nuxt',
        /**
         * @see https://pinia.vuejs.org/ssr/nuxt.html#installation
         */
        '@pinia/nuxt',
    ],
});
