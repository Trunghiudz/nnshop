import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, './productt.html'),
                datail: resolve(__dirname, './chitietsp.html'),
                cart: resolve(__dirname, './cart.html'),
                pay: resolve(__dirname, './checkout.html'),
                // login: resolve(__dirname, './login.html'),
            },
        },
    },
})