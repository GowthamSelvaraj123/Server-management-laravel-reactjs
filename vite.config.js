import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
          '/@/': path.resolve(__dirname, 'resources/images'), // Adjust as per your folder structure
          'react-bootstrap': 'react-bootstrap/esm',
          'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom')
        },
      },
      build: {
        assetsInlineLimit: 0,
      },
});
