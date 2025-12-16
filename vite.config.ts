import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],
    css: {
        devSourcemap: false,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './resources/js'),
        },
    },
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Split vendor chunks more aggressively
                    if (id.includes('node_modules')) {
                        if (id.includes('vue')) {
                            return 'vue-vendor';
                        }
                        if (id.includes('vue-router')) {
                            return 'router-vendor';
                        }
                        // Other node_modules
                        return 'vendor';
                    }
                    // Split large components
                    if (id.includes('components') && id.includes('Diamond')) {
                        return 'diamond-components';
                    }
                    if (id.includes('pages')) {
                        return 'pages';
                    }
                },
                // Optimize chunk names
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.');
                    const ext = info[info.length - 1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                        return `assets/img/[name]-[hash][extname]`;
                    }
                    if (/woff2?|eot|ttf|otf/i.test(ext)) {
                        return `assets/fonts/[name]-[hash][extname]`;
                    }
                    return `assets/[ext]/[name]-[hash][extname]`;
                },
            },
        },
        chunkSizeWarningLimit: 300,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.error'],
                passes: 3,
                unsafe: true,
                unsafe_comps: true,
                unsafe_math: true,
                unsafe_methods: true,
            },
            mangle: {
                safari10: true,
                properties: {
                    regex: /^_/,
                },
            },
            format: {
                comments: false,
            },
        },
        sourcemap: false,
        cssCodeSplit: true,
        cssMinify: 'lightningcss',
        reportCompressedSize: false,
        target: 'esnext',
        assetsInlineLimit: 4096,
    },
    server: {
        port: 5173,
        open: true,
        strictPort: false,
        hmr: {
            protocol: 'ws',
        },
    },
    optimizeDeps: {
        include: ['vue', 'vue-router'],
        exclude: [],
    },
});
