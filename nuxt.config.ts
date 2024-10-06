// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: ['@nuxt/content', '@nuxthq/studio', '@nuxt/ui'],


    routeRules: {
        '/': {prerender: true}
    },

    studio: {
        enabled: true,
    },

    components: {
        dirs: [
            '~/components',
            '~/components/content',
        ]
    },

    tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css',
    },

    compatibilityDate: '2024-10-05'
})
