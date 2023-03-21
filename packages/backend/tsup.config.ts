import { defineConfig } from 'tsup';

export default defineConfig({
    outDir: 'dist',
    bundle: true,
    minify: true,
    entry: {
        restApi: 'rest-api/index.ts',
        alertsHandler: 'update-alerts-handler/index.ts'
    }
});
