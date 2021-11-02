const CompressionPlugin = require("compression-webpack-plugin");

const BSCSiteReactStaticPlugin = (options) => {
    return {
        webpack: (config, options) => {
            config.plugins.push(new CompressionPlugin());
            return config;
        }
    }
}

export default BSCSiteReactStaticPlugin
