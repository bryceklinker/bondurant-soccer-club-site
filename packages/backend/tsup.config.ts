import { defineConfig } from 'tsup';
const { dependencies } = require('./package.json');
const packages = Object.keys(dependencies);
export default defineConfig({
    outDir: 'dist',
    bundle: true,
    minify: true,
    noExternal: packages,
    entry: {
        restApi: 'rest-api/index.ts',
        alertsHandler: 'update-alerts-handler/index.ts'
    }
});
