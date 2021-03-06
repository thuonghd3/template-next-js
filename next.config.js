module.exports = {
    /* config options here */
    webpack: (config, { dev }) => {
        // check eslint on build
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                // Emit errors as warnings for dev to not break webpack build.
                // Eslint errors are shown in console for dev, yay :-)
                // emitWarning: dev,
            },
        });

        return config;
    },
};
