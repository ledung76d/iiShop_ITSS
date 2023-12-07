/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';


// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT || 5137,
      host: env.VITE_HOST || 'localhost',
    },
    resolve: {
      alias: {
        '@root': path.resolve(
          __dirname,
          './src/',
        ),

        routes: `${path.resolve(
          __dirname,
          './src/routes/',
        )}`,

        services: `${path.resolve(
          __dirname,
          './src/services/',
        )}`,
      },
    },
  }
})
