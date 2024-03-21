import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, './shop.html'),
                datail: resolve(__dirname, './datail-product.html'),
                cart: resolve(__dirname, './cart.html'),
                pay: resolve(__dirname, './pay-product.html'),
                // login: resolve(__dirname, './login.html'),
            },
        },
    },
})