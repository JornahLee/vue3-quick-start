import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 在import的时候,可以使用@代表根路径
        alias: {
            '@': path.resolve(__dirname, "src"),
        }
    }

})
