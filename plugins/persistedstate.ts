import { defineNuxtPlugin, useCookie } from '#app'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.$pinia.use(createPersistedState({
        /**
         * @see https://github.com/prazdevs/pinia-plugin-persistedstate/issues/32
         */
        storage: {
            getItem: key => {
                return useCookie(key, { encode: (x: any) => x, decode: (x: any) => x }).value
            },
            setItem: (key, value) => {
                useCookie(key, { encode: (x: any) => x, decode: (x: any) => x }).value = value
            },
        },
    }))
})
